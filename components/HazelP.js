import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const HazelP = ({ style }) => {
  return (
    <View style={[styles.hazelp, style]}>
      <Image
        style={styles.stars1Icon}
        contentFit="cover"
        source={require("../assets/stars-1.png")}
      />
      <Text style={[styles.hazelp1, styles.textFlexBox]}>Hazel.P</Text>
      <Text style={[styles.theSellerIs, styles.n2IconPosition]}>
        The seller is very responsive, well accommodating. Product received in
        good quality. Price is very budget friendly.
      </Text>
      <Image
        style={styles.icons8Like481}
        contentFit="cover"
        source={require("../assets/icons8like48-1.png")}
      />
      <Image
        style={styles.icons8Dots481}
        contentFit="cover"
        source={require("../assets/icons8dots48-1.png")}
      />
      <Text style={[styles.text, styles.textFlexBox]}>01-01-2024 17:03</Text>
      <Image
        style={[styles.n2Icon, styles.n2IconPosition]}
        contentFit="cover"
        source={require("../assets/n-2.png")}
      />
      <Image
        style={styles.pic41Icon}
        contentFit="cover"
        source={require("../assets/pic4-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    position: "absolute",
  },
  n2IconPosition: {
    left: 51,
    position: "absolute",
  },
  stars1Icon: {
    top: 31,
    width: 183,
    height: 30,
    left: 39,
    position: "absolute",
  },
  hazelp1: {
    top: 0,
    left: 13,
    fontSize: FontSize.size_smi,
    width: 140,
    height: 31,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  theSellerIs: {
    top: 48,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    width: 290,
    height: 75,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    left: 51,
    fontFamily: FontFamily.interRegular,
  },
  icons8Like481: {
    top: 5,
    left: 287,
    width: 20,
    height: 21,
    position: "absolute",
  },
  icons8Dots481: {
    top: 9,
    left: 320,
    width: 21,
    
    position: "absolute",
  },
  text: {
    top: 209,
    fontSize: FontSize.size_3xs,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 105,
    height: 18,
    left: 39,
  },
  n2Icon: {
    top: 124,
    width: 63,
    height: 84,
  },
  pic41Icon: {
    top: 3,
    left: 0,
    borderRadius: Border.br_71xl,
    width: 39,
    height: 33,
    position: "absolute",
  },
  hazelp: {
    width: 341,
    height: 227,
    display: "none",
  },
});

export default HazelP;
