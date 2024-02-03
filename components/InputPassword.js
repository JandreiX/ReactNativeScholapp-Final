import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const InputPassword = memo(() => {
  return (
    <View style={styles.pw}>
      <Text style={styles.password}>password</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  password: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.6,
    fontFamily: FontFamily.abelRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 69,
    height: 16,
    opacity: 0.5,
  },
  pw: {
    position: "absolute",
    top: 210,
    left: 14,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 267,
    height: 39,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 11,
    opacity: 0.5,
  },
});

export default InputPassword;
