import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LgnButton = memo(() => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.lgnButton}
      onPress={() => navigation.navigate("HomeScreen")}
    >
      <Text style={styles.login}>LOGIN</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  login: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.abelRegular,
    color: Color.colorWhite,
    textAlign: "center",
    width: 55,
    height: 17,
    opacity: 0.9,
  },
  lgnButton: {
    position: "absolute",
    top: 267,
    left: 14,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorSteelblue_300,
    width: 266,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LgnButton;
