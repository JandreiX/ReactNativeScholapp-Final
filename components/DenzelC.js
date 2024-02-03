import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const DenzelC = ({ style }) => {
  return (
    <View style={[styles.denzelc, style]}>
      <Image
        style={styles.stars1Icon}
        contentFit="cover"
        source={require("../assets/stars-1.png")}
      />
      <Image
        style={styles.pic81Icon}
        contentFit="cover"
        source={require("../assets/pic8-1.png")}
      />
      <Text style={[styles.denzelc1, styles.textFlexBox]}>Denzel.C</Text>
      <Text
        style={[styles.excellentQualityVery, styles.n2IconPosition]}
      >{`Excellent quality, very responsive and  accommodating seller. `}</Text>
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
    top: 32,
    width: 183,
    height: 30,
    left: 39,
    position: "absolute",
  },
  pic81Icon: {
    top: 0,
    left: 0,
    borderRadius: Border.br_72xl_5,
    width: 36,
    height: 32,
    position: "absolute",
  },
  denzelc1: {
    top: 1,
    left: 13,
    fontSize: FontSize.size_smi,
    width: 140,
    height: 31,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  excellentQualityVery: {
    top: 49,
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
    top: 6,
    left: 287,
    width: 20,
    height: 21,
    position: "absolute",
  },
  icons8Dots481: {
    top: 10,
    left: 320,
    width: 21,
    
    position: "absolute",
  },
  text: {
    top: 210,
    fontSize: FontSize.size_3xs,
    fontStyle: "italic",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 105,
    height: 18,
    left: 39,
  },
  n2Icon: {
    top: 117,
    width: 63,
    height: 84,
  },
  denzelc: {
    width: 341,
    height: 228,
    display: "none",
  },
});

export default DenzelC;
