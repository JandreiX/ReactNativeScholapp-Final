import * as React from "react";
import { StyleSheet, Pressable, Text, View, Image } from "react-native"; // Import Image from react-native
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MenuBtnProfilePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.MenuBtnProfilePage}>
      <Pressable
        style={styles.backRemovebgPreview1}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/backremovebgpreview-12.png")}
        />
      </Pressable>
      <Pressable style={styles.sO} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.logout}>Logout</Text>
      </Pressable>
      <Pressable
        style={[styles.support, styles.supportLayout]}
        onPress={() => navigation.navigate("Support")}
      >
        <Image
          style={styles.ar3Icon}
          contentFit="cover"
          source={require("../assets/ar3.png")}
        />
        <Text style={[styles.support1, styles.support1Typo]}>Support</Text>
        <Image
          style={styles.checkFaqHelpInformationMarIcon}
          contentFit="cover"
          source={require("../assets/6351915-check-faq-help-information-mark-icon-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.settings, styles.supportLayout]}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.ar3Icon}
          contentFit="cover"
          source={require("../assets/ar3.png")}
        />
        <Text style={[styles.settings1, styles.support1Typo]}>Settings</Text>
        <Image
          style={[
            styles.manageUserRemovebgPreview1Icon,
            styles.userIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/manage-userremovebgpreview-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.myAccount, styles.supportLayout]}
        onPress={() => navigation.navigate("MyAccount")}
      >
        <Image
          style={styles.ar3Icon}
          contentFit="cover"
          source={require("../assets/ar1.png")}
        />
        <Text style={[styles.myAccount1, styles.support1Typo]}>My Account</Text>
        <Image
          style={[
            styles.ecommerceUserProfileAccountIcon,
            styles.userIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/9458784-ecommerce-user-profile-account-my-account-icon-1.png")}
        />
      </Pressable>
      <View style={styles.profile}>
        <Image
          style={styles.businessManMaleUserAvatarIcon}
          contentFit="cover"
          source={require("../assets/403022-business-man-male-user-avatar-profile-icon-1.png")}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  supportLayout: {
    height: 60,
    width: 402,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  support1Typo: {
    opacity: 0.75,
    letterSpacing: 0.6,
    left: 107,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  userIconPosition: {
    width: 33,
    left: 54,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backRemovebgPreview1: {
    left: 24,
    top: 80,
    width: 30,
    height: 30,
    position: "absolute",
  },
  logout: {
    color: Color.colorWhite,
    textAlign: "center",
    width: 73,
    height: 22,
    fontFamily: FontFamily.abelRegular,
    fontSize: FontSize.size_xl,
  },
  sO: {
    top: 682,
    left: 40,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray,
    width: 100,
    height: 50,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_smi,
    paddingVertical: 13,
    position: "absolute",
  },
  ar3Icon: {
    top: 22,
    left: 322,
    width: 15,
    height: 16,
    position: "absolute",
  },
  support1: {
    width: 82,
    top: 19,
    opacity: 0.75,
    letterSpacing: 0.6,
    left: 107,
    height: 22,
  },
  checkFaqHelpInformationMarIcon: {
    top: 14,
    width: 32,
    height: 32,
    left: 54,
    position: "absolute",
  },
  support: {
    top: 512,
  },
  settings1: {
    top: 18,
    width: 85,
    height: 23,
  },
  manageUserRemovebgPreview1Icon: {
    top: 13,
    height: 33,
  },
  settings: {
    top: 442,
  },
  myAccount1: {
    width: 148,
    top: 19,
    opacity: 0.75,
    letterSpacing: 0.6,
    left: 107,
  },
  ecommerceUserProfileAccountIcon: {
    top: 9,
    height: 34,
  },
  myAccount: {
    top: 372,
  },
  businessManMaleUserAvatarIcon: {
    width: 130,
    height: 128,
  },
  user12334: {
    fontSize: FontSize.size_26xl,
    letterSpacing: 1.4,
    width: 227,
    height: 44,
    marginTop: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  profile: {
    top: 120,
    height: 210,
    paddingHorizontal: 40,
    paddingTop: Padding.p_4xs,
    paddingBottom: Padding.p_6xs,
    width: 402,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  MenuBtnProfilePage: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default MenuBtnProfilePage;