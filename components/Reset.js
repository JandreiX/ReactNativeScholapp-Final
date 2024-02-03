import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Reset = memo(() => {
  return (
    <View style={styles.reset}>
      <Text style={styles.reset1}>RESET</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  reset1: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 1.5,
    fontFamily: FontFamily.abelRegular,
    color: Color.colorWhite,
    textAlign: "center",
    width: 220,
    height: 30,
  },
  reset: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorSteelblue_100,
    width: 298,
    height: 66,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 19,
  },
});

export default Reset;
