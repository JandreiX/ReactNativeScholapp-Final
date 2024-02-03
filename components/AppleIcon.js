import * as React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const AppleIcon = () => {
  return (
    <Image
      style={styles.appleIcon}
      contentFit="cover"
      source={require("../assets/apple.png")}
    />
  );
};

const styles = StyleSheet.create({
  appleIcon: {
    width: 35,
    height: 65,
    marginLeft: 17,
  },
});

export default AppleIcon;
