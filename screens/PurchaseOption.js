import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "react-native";
import FormContainer from "../components/FormContainer";
import { useNavigation } from "@react-navigation/native";
import PurchaseOptionForm from "../components/PurchaseOptionForm";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const PurchaseOption = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.purchaseOption}>
      <View style={[styles.purpage, styles.l2Position]}>
        <FormContainer
          dimensionCode={require("../assets/search2.png")}
          dimensionCodeImageUrl={require("../assets/cart2.png")}
          imageCode={require("../assets/menu1.png")}
          menuIconBackgroundColor="#fff"
          propTextAlign="left"
        />
        <View style={[styles.l2, styles.l2Position]} />
        <View style={[styles.l1, styles.l2Position]} />
        <View style={[styles.lowNav, styles.buyPosition]} />
        <View style={[styles.prinfo, styles.l2Position]}>
          <Text style={[styles.text, styles.textTypo]}>₱250.00</Text>
          <Text style={styles.genderAndSocietyContainer}>
            <Text style={styles.genderAndSociety}>Gender and Society</Text>
            <Text style={styles.aModularApproach}>{` 
(A Modular Approach)`}</Text>
          </Text>
          <Text style={[styles.available, styles.statusTypo]}>Available</Text>
          <Text style={[styles.status, styles.statusTypo]}>status:</Text>
        </View>
        <View style={[styles.pic, styles.l2Position]}>
          <Image
            style={styles.n2Icon}
            contentFit="cover"
            source={require("../assets/n-21.png")}
          />
        </View>
        <View style={[styles.xButton, styles.buttonLayout]}>
          <View style={[styles.xButtonChild, styles.buttonLayout]} />
          <Image
            style={[styles.xbRemovebgPreview1Icon, styles.buttonLayout]}
            contentFit="cover"
            source={require("../assets/xbremovebgpreview-1.png")}
          />
        </View>
        <View style={[styles.buy, styles.buyPosition]}>
          <View style={styles.buy1}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group12.png")}
            />
            <Text style={[styles.buy2, styles.textTypo]}>BUY</Text>
          </View>
        </View>
        <Image
          style={[styles.saveIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/save.png")}
        />
        <Image
          style={[styles.shareIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/share.png")}
        />
      </View>
      <Pressable
        style={[styles.fullTrp, styles.l2Position]}
        onPress={() => navigation.navigate("ProductPage")}
      />
      <PurchaseOptionForm />
    </View>
  );
};

const styles = StyleSheet.create({
  l2Position: {
    width: 420,
    left: 0,
    position: "absolute",
    bottom: -30,
  },
  buyPosition: {
    backgroundColor: Color.colorSteelblue_200,
    borderRadius: Border.br_8xs,
    width: 420,
    left: 0,
    position: "absolute",
    bottom: -40, // Position at the bottom
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.abelRegular,
  },
  statusTypo: {
    top: 65,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  buttonLayout: {
    height: 45,
    width: 45,
  },
  iconLayout: {
    height: 38,
    width: 38,
    top: 600,
    position: "absolute",
  },
  l2: {
    backgroundColor: Color.colorGray_600,
    top: 0,
    left: 0,
    height: 844,
    bottom: -30,
  },
  l1: {
    top: 103,
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorSnow_100,
    height: 741,
  },
  lowNav: {
    height: 92,
  },
  text: {
    top: 84,
    left: 247,
    fontSize: FontSize.size_21xl,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  genderAndSociety: {
    fontSize: FontSize.size_6xl,
  },
  aModularApproach: {
    fontSize: FontSize.size_mini,
  },
  genderAndSocietyContainer: {
    top: 11,
    textAlign: "left",
    left: 11,
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  available: {
    left: 64,
    color: Color.colorSteelblue_400,
    width: 89,
  },
  status: {
    left: 11,
    top: 65,
    color: Color.colorBlack,
  },
  prinfo: {
    top: 654,
    height: 189,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
  },
  n2Icon: {
    width: 212,
    height: 369,
  },
  pic: {
    top: 144,
    backgroundColor: Color.colorGainsboro_300,
    height: 443,
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: 36,
    alignItems: "center",
  },
  xButtonChild: {
    backgroundColor: Color.colorSnow_200,
    borderRadius: Border.br_8xs,
  },
  xbRemovebgPreview1Icon: {
    marginTop: -45,
    borderRadius: Border.br_8xs,
  },
  xButton: {
    top: 118,
    left: 18,
    alignItems: "center",
    position: "absolute",
    height: 45,
    width: 45,
  },
  maskGroupIcon: {
    width: 39,
    height: 40,
  },
  buy2: {
    fontSize: FontSize.size_16xl,
    color: Color.colorWhite,
    marginLeft: 7,
    textAlign: "center",
    fontFamily: FontFamily.abelRegular,
  },
  buy1: {
    width: 120,
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  buy: {
    height: 74,
    justifyContent: "center",
    paddingHorizontal: Padding.p_113xl,
    paddingVertical: 0,
  },
  saveIcon: {
    left: 282,
  },
  shareIcon: {
    left: 335,
  },
  purpage: {
    height: 861,
    top: 0,
    left: 0,
    bottom: -30,
  },
  fullTrp: {
    backgroundColor: "rgba(0, 0, 0, 0.23)",
    top: 0,
    left: 0,
    height: 900, // Adjusted height to fit the buy button
  },
  purchaseOption: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.colorWhite,
  },
});

export default PurchaseOption;
