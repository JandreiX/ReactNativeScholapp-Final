import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES, images } from '../constants';
import Input from '../components/Input';
import Button from '../components/Button';
import { signUp } from '../utils/actions/authActions';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducers';

const isTestMode = true;

const initialState = {
  inputValues: {
    fullName: isTestMode ? "John Doe" : "",
    email: isTestMode ? "example@gmail.com" : "",
    password: isTestMode ? "**********" : ""
  },
  inputValidities: {
    fullName: false,
    email: false,
    password: false
  },
  formIsValid: false,
};

const Signup = ({ navigation }) => {
  const [error, setError] = useState();
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
    try {
      setIsLoading(true);
      const action = signUp(
        formState.inputValues.fullName,
        formState.inputValues.email,
        formState.inputValues.password
      )
      await dispatch(action);
      Alert.alert("Account Successfully created", "Account Created!")
      setError(null)
      setIsLoading(false)
      navigation.navigate("Login")

    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(error.message)
    }
  }

  useEffect(() => {
    if (error) {
      Alert.alert("An error occured", error);
    }
  }, [error]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.background, padding: 16 }}>
        <Image source={images.logo} resizeMode="contain" style={{ width: 100, height: 100, marginBottom: 10 }} />
        <Text style={{ ...FONTS.h2, color: COLORS.black }}>Sign Up</Text>
        <View style={{ marginVertical: 22 }}>
          <Input
            id="fullName"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities.fullName}
            placeholder="Name"
            placeholderTextColor={COLORS.black}
          />
          <Input
            id="email"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities.email}
            placeholder="Email Address"
            placeholderTextColor={COLORS.black}
            keyboardType="email-address"
          />
          <Input
            id="password"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities.password}
            placeholder="Password"
            placeholderTextColor={COLORS.black}
            secureTextEntry={true}
          />
          <Button
            title="Sign Up"
            onPress={authHandler}
            isLoading={isLoading}
            style={{ width: SIZES.width - 32, marginVertical: 8 }}
          />
          <View style={styles.bottomContainer}>
            <Text style={{ ...FONTS.body3, color: COLORS.black }}>Already have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ ...FONTS.h3, color: COLORS.black }}> Login</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2
  },
  cover: {
    width: SIZES.width,
    position: 'absolute',
    bottom: 0
  }
});

export default Signup;