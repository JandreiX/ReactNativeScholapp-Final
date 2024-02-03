import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const ProductPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.productPage}>
      <View style={styles.mainb}>
        <Image
          style={[styles.searchIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/search1.png")}
        />
        <Image
          style={[styles.cartIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/cart1.png")}
        />
        <View style={[styles.home, styles.picFlexBox]}>
          <Text style={[styles.scholapp, styles.scholappTypo]}>SCHOLAPP</Text>
        </View>
        <Image
          style={styles.menuBarIcon}
          contentFit="cover"
          source={require("../assets/menu-bar.png")}
        />
      </View>
      <View style={[styles.l1, styles.l1Position]} />
      <View style={[styles.prinfo, styles.l1Position]}>
        <Text style={[styles.text, styles.textTypo]}>₱250.00</Text>
        <Text style={[styles.genderAndSocietyContainer, styles.statusPosition]}>
          <Text style={styles.genderAndSociety}>Gender and Society</Text>
          <Text style={styles.aModularApproach}>{` 
            (A Modular Approach)`}</Text>
        </Text>
        <Text style={[styles.available, styles.statusTypo]}>Available</Text>
        <Text style={[styles.status, styles.statusTypo]}>status:</Text>
      </View>
      <View style={[styles.pic, styles.l1Position]}>
        <Image
          style={styles.n2Icon}
          contentFit="cover"
          source={require("../assets/n-21.png")}
        />
      </View>
      <Pressable
        style={[styles.xButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <View style={[styles.xButtonChild, styles.buttonLayout]} />
        <Image
          style={[styles.xbRemovebgPreview1Icon, styles.buttonLayout]}
          contentFit="cover"
          source={require("../assets/xbremovebgpreview-1.png")}
        />
      </Pressable>
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
      <Pressable
        style={[styles.buybox, styles.buyLayout]}
        onPress={() => navigation.navigate("PurchaseOption")}
      >
        <View style={[styles.buy, styles.buyLayout]}>
          <View style={[styles.buy1, styles.picFlexBox]}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group12.png")}
            />
            <Text style={[styles.buy2, styles.textTypo]}>BUY</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 35,
    borderRadius: Border.br_11xs,
    top: 2,
    width: 39,
    position: "absolute",
  },
  picFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  scholappTypo: {
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
  },
  l1Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.abelRegular,
  },
  statusPosition: {
    left: 11,
    color: Color.colorBlack,
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
  buyLayout: {
    backgroundColor: Color.colorSteelblue_200,
    borderRadius: Border.br_8xs,
    width: 450,
  },
  searchIcon: {
    left: 301,
  },
  cartIcon: {
    left: 257,
  },
  scholapp: {
    letterSpacing: 1.8,
    width: 170,
    height: 32,
    color: Color.colorBlack,
    fontSize: FontSize.size_16xl,
  },
  home: {
    top: 4,
    left: 44,
    width: 203,
    height: 36,
    alignItems: "center",
    position: "absolute",
  },
  menuBarIcon: {
    width: 32,
    height: 32,
  },
  mainb: {
    top: 75,
    left: 22,
    width: 340,
    height: 40,
    position: "absolute",
  },
  l1: {
    top: 103,
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorSnow_100,
    height: 787,
  },
  text: {
    top: 84,
    left: 247,
    fontSize: FontSize.size_21xl,
    color: Color.colorBlack,
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  },
  saveIcon: {
    left: 282,
  },
  shareIcon: {
    left: 335,
  },
  maskGroupIcon: {
    width: 39,
    height: 40,
  },
  buy2: {
    color: Color.colorWhite,
    marginLeft: 6,
    fontSize: FontSize.size_16xl,
  },
  buy1: {
    width: 119,
    alignItems: "center",
    height: 40,
  },
  buy: {
    height: 74,
    paddingHorizontal: Padding.p_113xl,
    paddingVertical: 0,
    justifyContent: "center",
  },
  buybox: {
    top: 820,
    height: 92,
    left: 0,
    backgroundColor: Color.colorSteelblue_200,
    alignItems: "center",
    position: "absolute",
  },
  productPage: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.colorWhite,
  },
});

export default ProductPage;
