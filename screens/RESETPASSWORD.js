import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import InputNewPassword from "../components/InputNewPassword";
import InputConfirmPassword from "../components/InputConfirmPassword";
import Reset from "../components/Reset";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const RESETPASSWORD = () => {
  return (
    <ImageBackground
      style={styles.resetPasswordIcon}
      resizeMode="cover"
      source={require("../assets/scholapp.png")}
    >
      <View style={styles.rbox}>
        <Text style={[styles.resetPassword, styles.passwordTypo]}>{`Reset
Password`}</Text>
        <View style={styles.pw}>
          <InputNewPassword />
          <Text style={[styles.newPassword, styles.passwordTypo]}>
            New Password
          </Text>
        </View>
        <View style={styles.pw}>
          <InputConfirmPassword />
          <Text style={[styles.newPassword, styles.passwordTypo]}>
            Confirm Password
          </Text>
        </View>
        <Reset />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  passwordTypo: {
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
  },
  resetPassword: {
    fontSize: FontSize.size_21xl,
    letterSpacing: 2.8,
    color: Color.colorBlack,
    width: 178,
    height: 83,
  },
  newPassword: {
    position: "absolute",
    marginTop: -10,
    top: "50%",
    left: 16,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.5,
    color: Color.colorGray_500,
    width: 170,
    height: 20,
  },
  pw: {
    width: 298,
    height: 66,
    marginTop: 19,
  },
  rbox: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    width: 328,
    height: 428,
    paddingHorizontal: Padding.p_mini,
    paddingTop: Padding.p_30xl,
    paddingBottom: Padding.p_mini,
  },
  resetPasswordIcon: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: 199,
  },
});

export default RESETPASSWORD;
