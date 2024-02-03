import React, { useMemo } from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({
  dimensionCode,
  dimensionCodeImageUrl,
  imageCode,
  menuIconBackgroundColor,
  propTextAlign,
}) => {
  const scholappButStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", menuIconBackgroundColor),
    };
  }, [menuIconBackgroundColor]);

  const sCHOLAPPStyle = useMemo(() => {
    return {
      ...getStyleValue("textAlign", propTextAlign),
    };
  }, [propTextAlign]);

  return (
    <View style={[styles.mainb, styles.mainbLayout]}>
      <Image
        style={[styles.searchIcon, styles.iconLayout]}
        contentFit="cover"
        source={dimensionCode}
      />
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        contentFit="cover"
        source={dimensionCodeImageUrl}
      />
      <View style={styles.home}>
        <View style={[styles.scholappBut, scholappButStyle]} />
        <Text style={[styles.scholapp, sCHOLAPPStyle]}>SCHOLAPP</Text>
      </View>
      <Image
        style={[styles.menuIcon, styles.mainbLayout]}
        contentFit="cover"
        source={imageCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainbLayout: {
    height: 40,
    position: "absolute",
  },
  iconLayout: {
    height: 35,
    width: 39,
    top: 2,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  searchIcon: {
    left: 301,
  },
  cartIcon: {
    left: 257,
  },
  scholappBut: {
    backgroundColor: Color.colorWhite,
    width: 163,
    height: 36,
    borderRadius: Border.br_11xs,
  },
  scholapp: {
    fontSize: FontSize.size_16xl,
    letterSpacing: 1.8,
    fontFamily: FontFamily.abelRegular,
    color: Color.colorBlack,
    textAlign: "left",
    height: 32,
    marginTop: -35,
    width: 169,
  },
  home: {
    top: 4,
    left: 44,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: Padding.p_7xs,
    height: 36,
    width: 169,
    position: "absolute",
  },
  menuIcon: {
    top: 0,
    left: 0,
    width: 40,
  },
  mainb: {
    top: 75,
    left: 22,
    width: 340,
  },
});

export default FormContainer;
