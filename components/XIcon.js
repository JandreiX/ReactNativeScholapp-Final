import * as React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const XIcon = () => {
  return (
    <Image
      style={styles.xIcon}
      contentFit="cover"
      source={require("../assets/x.png")}
    />
  );
};

const styles = StyleSheet.create({
  xIcon: {
    width: 35,
    height: 65,
    marginLeft: 17,
  },
});

export default XIcon;
