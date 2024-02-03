import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const InputUsername = memo(() => {
  return (
    <View style={styles.un}>
      <Text style={styles.email}>email</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  email: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.6,
    fontFamily: FontFamily.abelRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 69,
    height: 16,
    opacity: 0.5,
  },
  un: {
    position: "absolute",
    top: 151,
    left: 14,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 267,
    height: 39,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    opacity: 0.5,
  },
});

export default InputUsername;
