import * as React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const FbIcon = () => {
  return (
    <Image
      style={styles.fbIcon}
      contentFit="cover"
      source={require("../assets/fb.png")}
    />
  );
};

const styles = StyleSheet.create({
  fbIcon: {
    width: 36,
    height: 65,
  },
});

export default FbIcon;
