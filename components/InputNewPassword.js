import React, { memo } from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const InputNewPassword = memo(() => {
  return (
    <Image
      style={styles.pwChild}
      contentFit="cover"
      source={require("../assets/rectangle-30.png")}
    />
  );
});

const styles = StyleSheet.create({
  pwChild: {
    position: "absolute",
    marginTop: -33,
    marginLeft: -149,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_6xs,
    width: 298,
    height: 66,
    opacity: 0.5,
  },
});

export default InputNewPassword;
