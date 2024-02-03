import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const PurchaseOptionForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.po}>
      <View style={styles.poBox}>
        <Text style={[styles.purchaseOption, styles.delivery1Typo]}>
          Purchase Option
        </Text>
      </View>
      <View style={[styles.poChild, styles.poChildPosition]} />
      <Image
        style={[styles.optionIcon, styles.poChildPosition]}
        contentFit="cover"
        source={require("../assets/option.png")}
      />
      <Pressable
        style={[styles.delivery, styles.meetUpLayout]}
        onPress={() => navigation.navigate("Delivery")}
      >
        <Text style={[styles.delivery1, styles.delivery1Typo]}>delivery</Text>
      </Pressable>
      <Pressable
        style={[styles.meetUp, styles.meetUpLayout]}
        onPress={() => navigation.navigate("MeetUpMessage")}
      >
        <Text style={[styles.delivery1, styles.delivery1Typo]}>meet-up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  delivery1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.abelRegular,
  },
  poChildPosition: {
    width: 277,
    left: 10,
    top: 67,
    position: "absolute",
  },
  meetUpLayout: {
    height: 42,
    width: 277,
    left: 10,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  purchaseOption: {
    fontSize: FontSize.size_11xl,
    letterSpacing: 1.5,
    color: Color.colorGray_800,
  },
  poBox: {
    top: 0,
    left: 0,
    height: 125,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_4xl,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xs,
    width: 301,
    position: "absolute",
  },
  poChild: {
    backgroundColor: Color.colorGray_900,
    height: 151,
    borderRadius: Border.br_xs,
    width: 277,
    left: 10,
    top: 67,
  },
  optionIcon: {
    borderRadius: Border.br_3xs,
    height: 46,
  },
  delivery1: {
    fontSize: FontSize.size_3xl,
    letterSpacing: 1.1,
    color: Color.colorBlack,
  },
  delivery: {
    top: 171,
    borderRadius: Border.br_8xs,
    paddingHorizontal: Padding.p_8xl,
    paddingVertical: Padding.p_5xs,
  },
  meetUp: {
    top: 125,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_7xs,
  },
  po: {
    top: 410,
    left: 46,
    height: 218,
    width: 301,
    position: "absolute",
  },
});

export default PurchaseOptionForm;
