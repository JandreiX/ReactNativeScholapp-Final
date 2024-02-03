import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const ConfirmationPage = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.confirmationPageIcon}
      resizeMode="cover"
      source={require("../assets/scholapp.png")}
    >
      <View style={styles.appreciation}>
        <Text style={styles.text}>😊😊😊</Text>
        <Text style={[styles.thankYou, styles.thankYouFlexBox]}>
          THANK YOU!
        </Text>
        <Text
          style={[styles.weAppreciateYourContainer, styles.thankYouFlexBox]}
        >
          <Text style={styles.weAppreciateYourContainer1}>
            <Text style={styles.weAppreciateYourRegistratio}>
              <Text style={styles.weAppreciateYour}>
                We appreciate your registration on our application. Kindly check
                your email for confirmation of your account, and also click the
                button "OPEN THE APP" down below to directly launch the app on
                your email.
              </Text>
              <Text style={styles.text1}>{` 
`}</Text>
              <Text style={styles.text1}> </Text>
            </Text>
            <Text style={styles.welcomeToScholapp}>WELCOME TO ScholAPP!!!</Text>
          </Text>
        </Text>
      </View>
      <Pressable
        style={styles.btlButton}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={styles.backToLogin}>BACK TO LOGIN</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  thankYouFlexBox: {
    marginTop: 14,
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.size_6xl,
    letterSpacing: 6.3,
    fontWeight: "700",
    fontFamily: FontFamily.robotoCondensedBold,
    textAlign: "center",
    color: Color.colorBlack,
  },
  thankYou: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 5.4,
    width: 182,
    height: 68,
    justifyContent: "center",
    fontFamily: FontFamily.abelRegular,
  },
  weAppreciateYour: {
    fontFamily: FontFamily.abelRegular,
  },
  text1: {
    fontFamily: FontFamily.robotoRegular,
  },
  weAppreciateYourRegistratio: {
    fontSize: FontSize.size_mini,
  },
  welcomeToScholapp: {
    fontSize: FontSize.size_xl,
    letterSpacing: 3.6,
    fontFamily: FontFamily.abelRegular,
  },
  weAppreciateYourContainer1: {
    width: "100%",
  },
  weAppreciateYourContainer: {
    width: 248,
    height: 194,
  },
  appreciation: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    width: 292,
    height: 355,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
  },
  backToLogin: {
    color: Color.colorWhite,
    width: 97,
    
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.abelRegular,
    textAlign: "center",
    alignItems: "center",
  },
  btlButton: {
    borderRadius: 26,
    backgroundColor: Color.colorSteelblue_300,
    width: 147,
    height: 51,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    marginTop: 26,
    justifyContent: "center",
  },
  confirmationPageIcon: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    paddingHorizontal: Padding.p_30xl,
    paddingVertical: 200,
    alignItems: "center",
    width: "100%",
  },
});

export default ConfirmationPage;
