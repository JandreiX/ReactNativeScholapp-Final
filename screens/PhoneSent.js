import * as React from "react";
import { Image } from "react-native";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import EmailSentForm from "../components/EmailSentForm";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const PhoneSent = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.phoneSentIcon}
      resizeMode="cover"
      source={require("../assets/scholapp.png")}
    >
      <View style={[styles.pfBox, styles.boxLayout]}>
        <Image
          style={[styles.pfBoxChild, styles.sentInnerPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <View style={[styles.pfBoxItem, styles.sentPosition1]} />
        <Pressable
          style={[styles.image2, styles.pfPosition]}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
        </Pressable>
        <Text style={[styles.selectWhichContact, styles.okTypo]}>
          Select which contact details should we use to reset your password:
        </Text>
        <View style={[styles.pf, styles.pfPosition]}>
          <Text style={[styles.forgot, styles.forgotTypo]}>FORGOT</Text>
          <Text style={[styles.password, styles.forgotTypo]}>PASSWORD</Text>
        </View>
      </View>
      <EmailSentForm />
      <View style={[styles.phoneSent, styles.pfBoxPosition]}>
        <Image
          style={[styles.phoneSentChild, styles.sentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-44.png")}
        />
        <Image
          style={[styles.image4Icon, styles.image4IconLayout]}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
        <Text style={[styles.viaSms, styles.textPosition]}>Via sms:</Text>
        <Text style={[styles.text, styles.textPosition]}>**** **** 9011</Text>
      </View>
      <View style={[styles.sent, styles.sentPosition1]}>
        <View style={[styles.sentChild, styles.sentPosition]} />
        <Text
          style={[styles.weSentAn, styles.okTypo]}
        >{`We sent an message to **** **** 9011
with a link to reset your password.`}</Text>
        <Text style={styles.ps}>Phone Sent</Text>
        <Image
          style={[styles.sentItem, styles.sentPosition]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Pressable
          style={[styles.sentInner, styles.sentInnerPosition]}
          onPress={() => navigation.navigate("ForgotPassword")}
        />
        <Text style={[styles.ok, styles.okTypo]}>OK</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  boxLayout: {
    height: 659,
    width: 340,
  },
  sentInnerPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  sentPosition1: {
    left: 0,
    position: "absolute",
  },
  pfPosition: {
    left: 17,
    position: "absolute",
  },
  okTypo: {
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  forgotTypo: {
    height: 46,
    letterSpacing: 1.6,
    color: Color.colorBlack,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
  },
  pfBoxPosition: {
    left: 25,
    position: "absolute",
  },
  sentLayout: {
    opacity: 0.25,
    maxHeight: "100%",
  },
  image4IconLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  textPosition: {
    left: 135,
    textAlign: "left",
    color: Color.colorGray_600,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  sentPosition: {
    width: 360,
    left: 15,
    position: "absolute",
  },
  pfBoxChild: {
    marginTop: -329.5,
    marginLeft: -170,
    borderRadius: Border.br_xl,
    height: 659,
    width: 340,
  },
  pfBoxItem: {
    top: 178,
    height: 87,
    width: 340,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  image2: {
    top: 21,
    width: 36,
    height: 39,
  },
  selectWhichContact: {
    top: 182,
    left: 20,
    width: 300,
    height: 40,
    color: Color.colorGray_600,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  forgot: {
    width: 156,
  },
  password: {
    marginTop: -1,
    width: 209,
  },
  pf: {
    top: 81,
    height: 91,
    width: 209,
  },
  pfBox: {
    top: 97,
    left: 25,
    position: "absolute",
  },
  phoneSentChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    borderRadius: Border.br_mini,
    position: "absolute",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  image4Icon: {
    top: 37,
    left: 37,
    width: 46,
    height: 65,
  },
  viaSms: {
    top: 43,
    fontFamily: FontFamily.robotoRegular,
    width: 80,
    height: 20,
  },
  text: {
    top: 69,
    letterSpacing: 0.8,
    width: 110,
    height: 25,
    fontFamily: FontFamily.abelRegular,
    left: 135,
  },
  phoneSent: {
    top: 384,
    height: 128,
    width: 340,
  },
  sentChild: {
    top: 346,
    height: 258,
    backgroundColor: Color.colorGainsboro_100,
  },
  weSentAn: {
    top: 449,
    left: 42,
    fontSize: FontSize.size_base,
    width: 303,
    color: Color.colorGray_600,
    textAlign: "left",
  },
  ps: {
    top: 373,
    left: 89,
    letterSpacing: 2,
    width: 218,
    height: 44,
    color: Color.colorBlack,
    fontSize: FontSize.size_21xl,
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  sentItem: {
    top: 538,
    opacity: 0.25,
    maxHeight: "100%",
  },
  sentInner: {
    marginTop: 116.3,
    marginLeft: -70,
    width: 140,
    height: 64,
    backgroundColor: Color.colorGainsboro_100,
  },
  ok: {
    top: 552,
    left: 174,
    fontSize: FontSize.size_11xl,
    letterSpacing: 0.9,
    color: Color.colorCornflowerblue,
    width: 45,
    height: 34,
  },
  sent: {
    top: -1,
    backgroundColor: Color.colorGray_400,
    width: 390,
    height: 846,
  },
  phoneSentIcon: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default PhoneSent;
