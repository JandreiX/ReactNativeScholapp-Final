import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const PurchasingCartPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.purchasingCartPage}>
      <View style={styles.pr1}>
        <Text style={[styles.price, styles.cartTypo]}>₱250.00</Text>
        <Text style={[styles.productn, styles.productnPosition]}>
          Gender and Society (A Modular Approach)
        </Text>
        <Image
          style={[styles.maskGroupIcon, styles.productnPosition]}
          contentFit="cover"
          source={require("../assets/mask-group4.png")}
        />
      </View>
      <Pressable
        style={[styles.tr, styles.trPosition]}
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <View style={[styles.cartBox, styles.trPosition]}>
        <Text style={[styles.cart, styles.cartTypo]}>CART</Text>
      </View>
      <View style={[styles.saveItem, styles.saveItemPosition]}>
        <Image
          style={styles.bookmarkRibbonIcon1}
          contentFit="cover"
          source={require("../assets/2639781-bookmark-ribbon-icon-1.png")}
        />
        <Text style={[styles.savedItems, styles.cartTypo]}>Saved items</Text>
      </View>
      <View style={[styles.purchaseBox, styles.saveItemPosition]}>
        <Image
          style={styles.productIcon1}
          contentFit="cover"
          source={require("../assets/2639894-product-icon-1.png")}
        />
        <Text style={[styles.purchase, styles.cartTypo]}>Purchase</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartTypo: {
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
  },
  productnPosition: {
    left: 27,
    position: "absolute",
  },
  trPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  saveItemPosition: {
    flexDirection: "row",
    width: 324,
    backgroundColor: Color.colorGray_100,
    left: 31,
    position: "absolute",
  },
  price: {
    top: 396,
    left: 156,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  productn: {
    top: 352,
    fontSize: FontSize.size_mini,
    width: 231,
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
    color: Color.colorBlack,
  },
  maskGroupIcon: {
    top: 36,
    width: 245,
    height: 300,
  },
  pr1: {
    top: 179,
    left: 45,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderWidth: 1,
    width: 300,
    height: 450,
    position: "absolute",
  },
  tr: {
    top: 0,
    backgroundColor: Color.colorGray_600,
    height: 844,
  },
  cart: {
    fontSize: 50,
    letterSpacing: 2.5,
    color: Color.colorWhite,
    width: 131,
    height: 44,
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
  },
  cartBox: {
    top: -11,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkslategray,
    height: 640,
    paddingHorizontal: 31,
    paddingVertical: 102,
  },
  bookmarkRibbonIcon1: {
    width: 27,
    height: 30,
  },
  savedItems: {
    fontSize: FontSize.size_6xl,
    width: 130,
    height: 20,
    marginLeft: 8,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
  },
  saveItem: {
    top: 157,
    borderRadius: Border.br_xs,
    height: 59,
    paddingHorizontal: Padding.p_lgi,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_smi,
  },
  productIcon1: {
    width: 35,
    height: 40,
  },
  purchase: {
    fontSize: 32,
    letterSpacing: 1.6,
    marginLeft: 7,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
  },
  purchaseBox: {
    top: 241,
    borderRadius: 18,
    height: 369,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_sm,
  },
  purchasingCartPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
  },
});

export default PurchasingCartPage;
