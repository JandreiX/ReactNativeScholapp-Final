import * as React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const GoogleIcon = () => {
  return (
    <Image
      style={styles.gIcon}
      contentFit="cover"
      source={require("../assets/g.png")}
    />
  );
};

const styles = StyleSheet.create({
  gIcon: {
    width: 36,
    height: 65,
    marginLeft: 17,
  },
});

export default GoogleIcon;
