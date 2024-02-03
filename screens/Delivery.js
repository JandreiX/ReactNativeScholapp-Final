import * as React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Delivery = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.delivery}>
      <View style={styles.mainb}>
        <Image
          style={[styles.searchIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search1.png")}
        />
        <Image
          style={[styles.cartIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/cart1.png")}
        />
        <View style={[styles.home, styles.homeFlexBox]}>
          <Text style={styles.scholapp}>SCHOLAPP</Text>
          <View style={styles.scholappBut} />
        </View>
        <Image
          style={styles.menuIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
      </View>
      <View style={[styles.l1, styles.l1Position]} />
      <Pressable
        style={[styles.option, styles.l1Position]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.done}>{`DONE `}</Text>
      </Pressable>
      <Pressable
        style={[styles.xButton, styles.buttonLayout]}
        onPress={() => navigation.navigate("ProductPage")}
      >
        <View style={[styles.xButtonChild, styles.buttonLayout]} />
        <Image
          style={[styles.xbRemovebgPreview1Icon, styles.buttonLayout]}
          contentFit="cover"
          source={require("../assets/xbremovebgpreview-1.png")}
        />
      </Pressable>
      <Text style={[styles.delivery1, styles.paymentPosition]}>DELIVERY</Text>
      <View style={[styles.paymentDetails, styles.paymentBorder]}>
        <Text style={[styles.paymentDetails1, styles.textTypo1]}>
          Payment details
        </Text>
        <View style={[styles.total, styles.homeFlexBox]}>
          <Text style={styles.total1}>total:</Text>
          <Text style={[styles.text, styles.textTypo1]}>₱300</Text>
        </View>
        <View style={[styles.ms, styles.msLayout]}>
          <Text style={[styles.merchandiseSubtotal, styles.textTypo]}>
            Merchandise Subtotal
          </Text>
          <Text style={[styles.text1, styles.textTypo]}>₱250</Text>
        </View>
        <View style={[styles.ss, styles.ssPosition]}>
          <Text style={[styles.merchandiseSubtotal, styles.textTypo]}>
            Shipping Subtotal
          </Text>
          <Text style={[styles.text2, styles.textTypo]}>₱50</Text>
        </View>
      </View>
      <View style={[styles.paymentBoxWrapper, styles.paymentPosition]}>
        <View style={[styles.paymentBox, styles.paymentBorder]}>
          <Image
            style={styles.cashMoneyPaymentWalletIcon}
            contentFit="cover"
            source={require("../assets/290143-cash-money-payment-wallet-icon-1.png")}
          />
          <Text style={[styles.payment, styles.text4Typo]}>Payment Option</Text>
          <View style={[styles.pOpt, styles.homeFlexBox]}>
            <Text style={styles.cashOnDelivery}>Cash on delivery</Text>
            <Image
              style={styles.backRemovebgPreview1Icon}
              contentFit="cover"
              source={require("../assets/backremovebgpreview-1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.prInfo, styles.infoLayout]}>
        <Image
          style={styles.n3Icon}
          contentFit="cover"
          source={require("../assets/n-3.png")}
        />
        <Text style={styles.genderAndSocietyAContainer}>
          <Text style={styles.genderAndSociety}>GENDER AND SOCIETY</Text>
          <Text style={styles.aModularApproach}>(A MODULAR APPROACH)</Text>
        </Text>
        <Text style={styles.ownerUser00001}>
          <Text style={styles.owner}>{`Owner: `}</Text>
          <Text style={styles.user00001}>User00001</Text>
        </Text>
        <Text style={[styles.text3, styles.fTypo]}>₱250</Text>
      </View>
      <View style={[styles.info, styles.infoLayout]}>
        <View style={styles.gender}>
          <Text style={[styles.f, styles.fTypo]}>F</Text>
        </View>
        <Text style={[styles.olapeCmpdSt, styles.text4Position]}>
          Olape Cmpd, St Michael St, Zone 5, Cagayan de Oro, 9000
        </Text>
        <Text style={[styles.text4, styles.text4Position]}>
          +63 905 718 3367
        </Text>
        <Text style={[styles.user12334, styles.text4Position]}>User12334</Text>
        <Image
          style={styles.communicationInternetMediaNIcon}
          contentFit="cover"
          source={require("../assets/290136-communication-internet-media-news-newspaper-icon-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 35,
    width: 39,
    top: 2,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  homeFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  l1Position: {
    width: 420,
    left: 0,
    position: "absolute",
  },
  buttonLayout: {
    height: 45,
    width: 45,
  },
  paymentPosition: {
    left: 35,
    position: "absolute",
  },
  paymentBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorWhite,
  },
  textTypo1: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    letterSpacing: 1.8,
  },
  msLayout: {
    width: 286,
    left: 24,
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    top: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  ssPosition: {
    top: 71,
    position: "absolute",
  },
  text4Typo: {
    letterSpacing: 1.5,
    fontSize: FontSize.size_mini,
  },
  infoLayout: {
    width: 331,
    left: 34,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  fTypo: {
    fontSize: FontSize.size_6xl,
    textAlign: "left",
  },
  text4Position: {
    left: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  searchIcon: {
    left: 301,
  },
  cartIcon: {
    left: 257,
  },
  scholapp: {
    height: 32,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
    letterSpacing: 1.8,
    fontSize: FontSize.size_16xl,
    width: 168,
  },
  scholappBut: {
    width: 143,
    marginLeft: -163,
    backgroundColor: Color.colorGray_300,
    height: 36,
    borderRadius: Border.br_11xs,
  },
  home: {
    top: 4,
    left: 45,
    alignItems: "center",
    height: 36,
    width: 168,
    flexDirection: "row",
    position: "absolute",
  },
  menuIcon: {
    width: 40,
    left: 0,
    top: 0,
    height: 40,
    position: "absolute",
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
    width: 340,
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorSnow_100,
    height: 741,
  },
  done: {
    letterSpacing: 1.1,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.abelRegular,
    fontSize: FontSize.size_16xl,
  },
  option: {
    top: 820,
    width: 420,
    backgroundColor: Color.colorSteelblue_200,
    height: 92,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_lgi,
    borderRadius: Border.br_8xs,
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
  },
  delivery1: {
    top: 179,
    fontSize: FontSize.size_26xl,
    letterSpacing: 4.5,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  paymentDetails1: {
    top: 11,
    left: 13,
    width: 171,
    height: 18,
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  total1: {
    fontSize: FontSize.size_sm,
    letterSpacing: 1.4,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  text: {
    fontFamily: FontFamily.alatsiRegular,
    color: Color.colorSteelblue_100,
    marginLeft: 36,
  },
  total: {
    top: 93,
    left: 184,
    width: 126,
    height: 21,
    alignItems: "center",
    position: "absolute",
  },
  merchandiseSubtotal: {
    left: 0,
    textAlign: "left",
  },
  text1: {
    left: 254,
    textAlign: "left",
  },
  ms: {
    top: 45,
    height: 15,
    position: "absolute",
  },
  text2: {
    left: 259,
    textAlign: "center",
  },
  ss: {
    height: 14,
    width: 286,
    left: 24,
  },
  paymentDetails: {
    top: 629,
    width: 327,
    height: 121,
    left: 35,
    position: "absolute",
  },
  cashMoneyPaymentWalletIcon: {
    width: 25,
    height: 26,
    zIndex: 0,
  },
  payment: {
    zIndex: 1,
    marginLeft: 12,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  cashOnDelivery: {
    fontSize: 8,
    letterSpacing: 0.8,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  backRemovebgPreview1Icon: {
    width: 21,
    height: 20,
    marginLeft: -1,
  },
  pOpt: {
    top: -3,
    left: 212,
    width: 105,
    height: 19,
    justifyContent: "flex-end",
    paddingTop: 35,
    zIndex: 2,
    backgroundColor: Color.colorGray_300,
    alignItems: "center",
    position: "absolute",
  },
  paymentBox: {
    width: 320,
    height: 46,
    paddingHorizontal: Padding.p_3xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  paymentBoxWrapper: {
    top: 552,
    width: 326,
    justifyContent: "center",
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  n3Icon: {
    top: 3,
    left: 4,
    borderRadius: Border.br_2xs,
    width: 52,
    height: 106,
    position: "absolute",
  },
  genderAndSociety: {
    fontSize: FontSize.size_mini,
  },
  aModularApproach: {
    fontSize: FontSize.size_smi,
  },
  genderAndSocietyAContainer: {
    top: 12,
    left: 70,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  owner: {
    color: Color.colorCornflowerblue,
  },
  user00001: {
    color: Color.colorBlack,
  },
  ownerUser00001: {
    top: 53,
    left: 72,
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  text3: {
    left: 253,
    top: 71,
    position: "absolute",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  prInfo: {
    top: 429,
    height: 111,
    borderColor: Color.colorBlack,
    left: 34,
  },
  f: {
    letterSpacing: 2.5,
    fontFamily: FontFamily.aBeeZeeRegular,
    color: "#c93535",
  },
  gender: {
    left: 266,
    borderRadius: Border.br_9xs,
    width: 30,
    height: 30,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
    top: 18,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  olapeCmpdSt: {
    top: 82,
    letterSpacing: 1.3,
    width: 208,
    height: 78,
    fontSize: FontSize.size_smi,
  },
  text4: {
    top: 55,
    letterSpacing: 1.5,
    fontSize: FontSize.size_mini,
  },
  user12334: {
    fontSize: FontSize.size_3xl,
    letterSpacing: 2.2,
    top: 18,
  },
  communicationInternetMediaNIcon: {
    top: 69,
    left: 252,
    width: 64,
    height: 64,
    position: "absolute",
  },
  info: {
    top: 243,
    borderColor: Color.colorSteelblue_200,
    height: 166,
  },
  delivery: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Delivery;
