import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const EmailSentForm = () => {
  return (
    <View style={[styles.emailSent, styles.emailLayout]}>
      <Image
        style={[styles.emailSentChild, styles.image3IconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Image
        style={[styles.image3Icon, styles.image3IconLayout]}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Text style={[styles.viaEmail, styles.viaEmailTypo]}>Via email:</Text>
      <Text style={[styles.elgmailcom, styles.viaEmailTypo]}>
        *******el@gmail.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailLayout: {
    height: 128,
    width: 340,
  },
  image3IconLayout: {
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  viaEmailTypo: {
    textAlign: "left",
    color: Color.colorGray_600,
    fontSize: FontSize.size_mini,
    left: 135,
    position: "absolute",
  },
  emailSentChild: {
    marginTop: -64,
    marginLeft: -170,
    top: "50%",
    left: "50%",
    opacity: 0.25,
    height: 128,
    width: 340,
  },
  image3Icon: {
    top: 41,
    left: 37,
    width: 46,
    height: 46,
  },
  viaEmail: {
    top: 44,
    fontFamily: FontFamily.robotoRegular,
    width: 80,
    height: 20,
  },
  elgmailcom: {
    top: 70,
    letterSpacing: 0.8,
    fontFamily: FontFamily.abelRegular,
    width: 156,
    height: 27,
  },
  emailSent: {
    top: 546,
    left: 25,
    position: "absolute",
    height: 128,
    width: 340,
  },
});

export default EmailSentForm;
