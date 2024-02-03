import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Upper = ({ style }) => {
  return (
    <View style={[styles.upper, style]}>
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      />
      <Text style={styles.ratings}>Ratings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backArrowIcon: {
    width: 49,
    height: 33,
  },
  ratings: {
    flex: 1,
    fontSize: FontSize.size_16xl,
    letterSpacing: 2.5,
    lineHeight: 23,
    fontFamily: FontFamily.abelRegular,
    color: Color.colorGray_700,
    textAlign: "center",
    marginLeft: 57,
  },
  upper: {
    backgroundColor: Color.colorSteelblue_200,
    width: 390,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_4xl,
    paddingTop: Padding.p_55xl,
    paddingBottom: Padding.p_4xs,
  },
});

export default Upper;
