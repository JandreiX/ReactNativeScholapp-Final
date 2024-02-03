import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const MyAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myAccount}>
      <Pressable
        style={[styles.backRemovebgPreview1, styles.accountPosition]}
        onPress={() => navigation.navigate("MenuBtnProfilePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/backremovebgpreview-11.png")}
        />
      </Pressable>
      <View style={styles.labelmyAccount}>
        <Text style={styles.myAccount1}>My Account</Text>
      </View>
      <View style={[styles.bac, styles.bacPosition]}>
        <Text style={[styles.bankAccount, styles.bankAccountTypo]}>
          Bank Account
        </Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/ar3.png")}
        />
      </View>
      <View style={[styles.myAccountChild, styles.accountPosition]} />
      <View style={[styles.myAddress, styles.bacPosition]}>
        <Text style={[styles.myAddresses, styles.bankAccountTypo]}>
          My Addresses
        </Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon1,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/ar3.png")}
        />
      </View>
      <Image
        style={[styles.myAccountItem, styles.accountPosition]}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <View style={[styles.acsec, styles.bacPosition]}>
        <Text
          style={[styles.myAddresses, styles.bankAccountTypo]}
        >{`Account & Security`}</Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon2,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/ar3.png")}
        />
      </View>
      <View style={styles.faq}>
        <Image
          style={styles.chatDialogForumSpeakingIcoIcon}
          contentFit="cover"
          source={require("../assets/2135788-chat-dialog-forum-speaking-icon-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accountPosition: {
    left: 20,
    position: "absolute",
  },
  bacPosition: {
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
    width: 402,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  bankAccountTypo: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  arrowIconLayout: {
    height: 16,
    width: 15,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backRemovebgPreview1: {
    top: 95,
    width: 25,
    height: 25,
  },
  myAccount1: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  labelmyAccount: {
    top: 152,
    backgroundColor: Color.colorGainsboro_200,
    height: 66,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_xl,
    width: 402,
    left: 0,
    position: "absolute",
  },
  bankAccount: {
    textAlign: "left",
  },
  arrowForwardRightMoveNavigIcon: {
    marginLeft: 203,
  },
  bac: {
    top: 412,
    paddingTop: Padding.p_6xl,
    paddingBottom: Padding.p_2xl,
    height: 70,
    flexDirection: "row",
  },
  myAccountChild: {
    top: 401,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 1,
    width: 372,
    height: 1,
  },
  myAddresses: {
    textAlign: "center",
  },
  arrowForwardRightMoveNavigIcon1: {
    marginLeft: 200,
  },
  myAddress: {
    top: 322,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_3xl,
    height: 70,
    flexDirection: "row",
  },
  myAccountItem: {
    top: 310,
    maxHeight: "100%",
    width: 371,
  },
  arrowForwardRightMoveNavigIcon2: {
    marginLeft: 159,
  },
  acsec: {
    top: 220,
    height: 82,
    paddingTop: 34,
    paddingBottom: Padding.p_5xl,
  },
  chatDialogForumSpeakingIcoIcon: {
    width: 30,
    height: 30,
  },
  faq: {
    top: 83,
    left: 332,
    width: 50,
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  myAccount: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default MyAccount;
