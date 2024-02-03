import { View, Text, Image, Alert, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducers";
import Input from "../components/Input";
import Button from "../components/Button";
import { signIn } from "../utils/actions/authActions";
import { useDispatch } from "react-redux";

const isTestMode = true;

const initialState = {
  inputValues: {
    email: isTestMode ? "example@gmail.com" : "",
    password: isTestMode ? "**********" : "",
  },
  inputValidities: {
    email: false,
    password: false,
  },
  formIsValid: false,
};

const Login = () => {
  const navigation = useNavigation();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  const authHandler = async () => {
    const { email, password } = formState.inputValues;

    // Check if email and password are provided
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    try {
      setIsLoading(true);
      const action = signIn(email, password);
      await dispatch(action);
      setError(null);
      setIsLoading(false);
      navigation.navigate("HomeScreen"); // Navigate after successful authentication
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      let errorMessage = "An error occurred";
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        errorMessage = "Invalid email or password.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      }
      setError(errorMessage);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred", error);
    }
  }, [error]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.background, padding: 16 }}>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{ width: 100, height: 100, marginLeft: 0 }}
        />
        <Text style={{ ...FONTS.h2, color: COLORS.black, marginVertical: 2 }}>Sign In</Text>
        <View style={{ marginVertical: 4 }}>
          <Input
            id="email"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities["email"] ? "Invalid email" : null}
            placeholder="Email Address"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
          />
          <Input
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities["password"] ? "Invalid password" : null}
            autoCapitalize="none"
            id="password"
            placeholder="Password"
            placeholderTextColor={COLORS.black}
            secureTextEntry={true}
          />
          <Button
            title="LOGIN"
            onPress={authHandler}
            isLoading={isLoading}
            style={{ width: SIZES.width - 32, marginVertical: 8 }}
          />
          <View style={styles.bottomContainer}>
            <Text style={{ ...FONTS.body3, color: COLORS.black }}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={{ ...FONTS.h3, color: COLORS.black }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Image source={images.cover} resizeMode="contain" style={styles.cover} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 2,
  },
  cover: {
    width: SIZES.width,
    position: "absolute",
    bottom: 0,
  },
});

export default Login;