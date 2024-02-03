import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const SignUPBox = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpBox}>
      <Text style={styles.signUpWith}>Sign up with</Text>
      <View style={styles.icon}>
        <Image
          style={styles.iconChild}
          contentFit="cover"
          source={require("../assets/rectangle-36.png")}
        />
        <Image
          style={[styles.gIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/g1.png")}
        />
        <Image
          style={[styles.appleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/apple1.png")}
        />
        <Image
          style={[styles.xIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/x1.png")}
        />
        <Image
          style={[styles.fbIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/fb1.png")}
        />
      </View>
      <Pressable
        style={[styles.submitButton, styles.submitFlexBox]}
        onPress={() => navigation.navigate("ConfirmationPage")}
      >
        <Text style={[styles.submit, styles.submitTypo]}>SUBMIT</Text>
      </Pressable>
      <View style={[styles.pw, styles.pwPosition]}>
        <Image
          style={[styles.pwChild, styles.pwChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <Text style={[styles.password, styles.phoneTypo]}>Password</Text>
      </View>
      <View style={[styles.email, styles.fnLayout]}>
        <Text style={styles.phoneTypo}>Email</Text>
      </View>
      <View style={[styles.pno, styles.pwPosition]}>
        <Image
          style={[styles.pwChild, styles.pwChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <Text style={[styles.phone, styles.phoneTypo]}>{`Phone
`}</Text>
      </View>
      <View style={[styles.ln, styles.pwPosition]}>
        <Image
          style={[styles.pwChild, styles.pwChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <Text style={[styles.phone, styles.phoneTypo]}>Surname</Text>
      </View>
      <View style={[styles.fn, styles.fnLayout]}>
        <Text style={styles.phoneTypo}>Name</Text>
      </View>
      <Text style={[styles.signUp, styles.submitTypo]}>Sign Up</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  iconLayout1: {
    width: 36,
    top: 0,
    height: 65,
    position: "absolute",
  },
  iconLayout: {
    width: 35,
    top: 0,
    height: 65,
    position: "absolute",
  },
  submitFlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  submitTypo: {
    width: 143,
    textAlign: "center",
    color: "black",
    fontFamily: FontFamily.abelRegular,
  },
  pwPosition: {
    left: 10,
    height: 66,
    width: 298,
    position: "absolute",
  },
  pwChildLayout: {
    height: 66,
    width: 298,
    borderRadius: Border.br_6xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  phoneTypo: {
    height: 25,
    width: 115,
    textAlign: "left",
    color: Color.colorGray_500,
    letterSpacing: 1.5,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.abelRegular,
  },
  fnLayout: {
    paddingHorizontal: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.colorGray_600,
    borderStyle: "solid",
    backgroundColor: Color.colorLavender,
    height: 66,
    width: 298,
    borderRadius: Border.br_6xs,
    marginLeft: -148.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  signUpWith: {
    top: 686,
    left: 116,
    fontSize: FontSize.size_xs,
    width: 86,
    height: 16,
    opacity: 0.75,
    textAlign: "center",
    fontFamily: FontFamily.abelRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  iconChild: {
    top: 9,
    left: 0,
    height: 48,
    width: 270,
    position: "absolute",
  },
  gIcon: {
    left: 196,
  },
  appleIcon: {
    left: 143,
  },
  xIcon: {
    left: 90,
  },
  fbIcon: {
    left: 37,
  },
  icon: {
    top: 619,
    left: 23,
    height: 65,
    width: 270,
    position: "absolute",
  },
  submit: {
    fontSize: FontSize.size_11xl,
    color: Color.colorWhite,
    display: "flex",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    marginTop: 179.5,
    backgroundColor: Color.colorSteelblue_100,
    justifyContent: "center",
    height: 66,
    width: 298,
    borderRadius: Border.br_6xs,
    left: "50%",
    top: "50%",
    position: "absolute",
    marginLeft: -148.5,
    alignItems: "center",
  },
  pwChild: {
    marginTop: -33,
    marginLeft: -149,
    opacity: 0.5,
  },
  password: {
    marginTop: -12,
    left: 15,
    width: 115,
    textAlign: "left",
    color: Color.colorGray_500,
    letterSpacing: 1.5,
    fontSize: FontSize.size_3xl,
    position: "absolute",
    top: "50%",
  },
  pw: {
    top: 445,
  },
  email: {
    marginTop: 1.5,
    paddingVertical: Padding.p_lgi,
  },
  phone: {
    top: 21,
    left: 15,
    width: 115,
    textAlign: "left",
    color: Color.colorGray_500,
    letterSpacing: 1.5,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  pno: {
    top: 277,
  },
  ln: {
    top: 193,
  },
  fn: {
    marginTop: -250.5,
    paddingVertical: 0,
    justifyContent: "center",
  },
  signUp: {
    top: 56,
    left: 158,
    fontSize: FontSize.size_16xl,
    letterSpacing: 2.5,
    height: 40,
    color: Color.colorBlack,
    width: 143,
    position: "absolute",
  },
  signUpBox: {
    marginTop: -341,
    marginLeft: -159,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    width: 317,
    height: 719,
    left: "50%",
    position: "absolute",
    top: "50%",
  },
});

export default SignUPBox;
