import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const GracieJane = ({ style }) => {
  return (
    <View style={[styles.gracieJane, style]}>
      <Image
        style={styles.stars1Icon}
        contentFit="cover"
        source={require("../assets/stars-1.png")}
      />
      <Text style={[styles.gracieJane1, styles.textFlexBox]}>Gracie Jane</Text>
      <Text style={[styles.theSellerIs, styles.n2IconPosition]}>
        The seller is very responsive to my questions. Packed the items nicely
        and securely. Good product quality, will definitely buy again from this
        seller.
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
      <Text style={[styles.text, styles.textFlexBox]}>03-01-2024 11:22</Text>
      <Image
        style={[styles.n2Icon, styles.n2IconPosition]}
        contentFit="cover"
        source={require("../assets/n-2.png")}
      />
      <Image
        style={styles.pic31Icon}
        contentFit="cover"
        source={require("../assets/pic3-1.png")}
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
    top: 35,
    left: 39,
    width: 183,
    height: 30,
    position: "absolute",
  },
  gracieJane1: {
    top: 0,
    left: 17,
    fontSize: FontSize.size_smi,
    width: 140,
    height: 31,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  theSellerIs: {
    top: 69,
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
    top: 9,
    left: 287,
    width: 20,
    height: 21,
    position: "absolute",
  },
  icons8Dots481: {
    top: 13,
    left: 320,
    width: 21,
    
    position: "absolute",
  },
  text: {
    top: 252,
    left: 36,
    fontSize: FontSize.size_3xs,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 105,
    height: 18,
  },
  n2Icon: {
    top: 156,
    width: 63,
    height: 84,
  },
  pic31Icon: {
    top: 4,
    left: 0,
    borderRadius: Border.br_116xl_5,
    width: 39,
    height: 32,
    position: "absolute",
  },
  gracieJane: {
    width: 341,
    height: 270,
    display: "none",
  },
});

export default GracieJane;
