import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "react-native";
import InputUsername from "./InputUsername";
import InputPassword from "./InputPassword";
import LgnButton from "./LgnButton";
import FbIcon from "./FbIcon";
import XIcon from "./XIcon";
import AppleIcon from "./AppleIcon";
import GoogleIcon from "./GoogleIcon";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const LoginFormContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginp}>
      <Text style={[styles.logIn, styles.orTypo]}>LOG IN</Text>
      <InputUsername />
      <InputPassword />
      <LgnButton />
      <View style={[styles.line, styles.orLayout]}>
        <View style={[styles.lineChild, styles.lineLayout]} />
        <View style={[styles.lineItem, styles.lineLayout]} />
        <Text style={[styles.or, styles.orLayout]}>OR</Text>
      </View>
      <View style={styles.icon}>
        <FbIcon />
        <XIcon />
        <AppleIcon />
        <GoogleIcon />
      </View>
      <Image
        style={styles.s12Icon}
        contentFit="cover"
        source={require("../assets/s1-2.png")}
      />
      <View style={[styles.su, styles.suLayout]}>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={[styles.fp, styles.suLayout]}>
        <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={[styles.forgotPassword1, styles.signUp1Typo]}>
            Forgot Password?
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  orLayout: {
    height: 20,
    position: "absolute",
  },
  lineLayout: {
    height: 1,
    width: 96,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 10,
    position: "absolute",
  },
  suLayout: {
    paddingHorizontal: 0,
    borderRadius: Border.br_8xs,
    top: 327,
    height: 20,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  signUp1Typo: {
    opacity: 0.75,
    letterSpacing: 0.7,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  logIn: {
    top: 81,
    left: 98,
    fontSize: FontSize.size_16xl,
    letterSpacing: 1.8,
    position: "absolute",
  },
  lineChild: {
    left: 0,
  },
  lineItem: {
    left: 130,
  },
  or: {
    top: 0,
    left: 95,
    fontSize: FontSize.size_base,
    letterSpacing: 1.6,
    width: 33,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  line: {
    top: 359,
    left: 34,
    width: 226,
  },
  icon: {
    top: 386,
    left: 49,
    width: 195,
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  s12Icon: {
    top: 27,
    left: 128,
    borderRadius: Border.br_9xs,
    width: 38,
    height: 38,
    position: "absolute",
  },
  signUp1: {
    width: 56,
    height: 11,
  },
  su: {
    left: 181,
    width: 98,
    alignItems: "flex-end",
    paddingVertical: 2,
  },
  forgotPassword1: {
    width: 114,
    height: 16,
  },
  fp: {
    left: 14,
    width: 148,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_12xs,
  },
  loginp: {
    borderRadius: Border.br_2xs,
    width: 294,
    height: 479,
    backgroundColor: Color.colorWhite,
  },
});

export default LoginFormContainer;
