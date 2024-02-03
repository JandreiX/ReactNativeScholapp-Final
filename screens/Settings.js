import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Pressable
        style={styles.backRemovebgPreview1}
        onPress={() => navigation.navigate("MenuBtnProfilePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/backremovebgpreview-11.png")}
        />
      </Pressable>
      <View style={[styles.labelsettings, styles.languagePosition]}>
        <Text style={styles.settings1}>Settings</Text>
      </View>
      <View style={[styles.language, styles.languagePosition]}>
        <Text style={styles.languageWika}>Language/ Wika</Text>
        <Text style={styles.english}>English</Text>
        <Image
          style={styles.arrowForwardRightMoveNavigIcon}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-11.png")}
        />
      </View>
      <View style={[styles.settingsChild, styles.settingsLayout]} />
      <View style={styles.blockedUsers}>
        <Text style={[styles.blockedUsers1, styles.blockedUsers1Typo]}>
          Blocked Users
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
      <View style={[styles.settingsItem, styles.settingsLayout]} />
      <View style={[styles.pset, styles.psetPosition]}>
        <Text style={styles.blockedUsers1Typo}>Privacy Settings</Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon2,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/ar3.png")}
        />
      </View>
      <View style={[styles.settingsInner, styles.settingsLayout]} />
      <View style={[styles.nset, styles.psetPosition]}>
        <Text style={styles.blockedUsers1Typo}>Notification Settings</Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon3,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/ar3.png")}
        />
      </View>
      <View style={[styles.lineView, styles.settingsLayout]} />
      <View style={[styles.cset, styles.psetPosition]}>
        <Text style={styles.blockedUsers1Typo}>Chat Settings</Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon4,
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
  languagePosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  settingsLayout: {
    height: 1,
    width: 372,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: 20,
    position: "absolute",
  },
  blockedUsers1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  arrowIconLayout: {
    height: 16,
    width: 15,
  },
  psetPosition: {
    paddingBottom: Padding.p_2xl,
    paddingTop: Padding.p_6xl,
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
    height: 70,
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backRemovebgPreview1: {
    top: 95,
    width: 25,
    height: 25,
    left: 20,
    position: "absolute",
  },
  settings1: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  labelsettings: {
    top: 152,
    backgroundColor: Color.colorGainsboro_200,
    height: 66,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_xl,
  },
  languageWika: {
    width: 199,
    
    top: 21,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    left: 26,
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  english: {
    top: 48,
    fontSize: FontSize.size_sm,
    color: "rgba(0, 0, 0, 0.45)",
    width: 46,
    height: 13,
    left: 26,
    textAlign: "center",
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  arrowForwardRightMoveNavigIcon: {
    left: 340,
    width: 15,
    
    top: 21,
    position: "absolute",
  },
  language: {
    top: 596,
    height: 71,
    backgroundColor: Color.colorWhite,
  },
  settingsChild: {
    top: 584,
  },
  blockedUsers1: {
    width: 123,
  },
  arrowForwardRightMoveNavigIcon1: {
    marginLeft: 191,
  },
  blockedUsers: {
    top: 504,
    paddingTop: Padding.p_5xl,
    paddingBottom: Padding.p_3xl,
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
    height: 70,
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  settingsItem: {
    top: 493,
  },
  arrowForwardRightMoveNavigIcon2: {
    marginLeft: 187,
  },
  pset: {
    top: 412,
  },
  settingsInner: {
    top: 401,
  },
  arrowForwardRightMoveNavigIcon3: {
    marginLeft: 150,
  },
  nset: {
    top: 321,
  },
  lineView: {
    top: 310,
  },
  arrowForwardRightMoveNavigIcon4: {
    marginLeft: 208,
  },
  cset: {
    top: 229,
  },
  chatDialogForumSpeakingIcoIcon: {
    width: 30,
    height: 30,
  },
  faq: {
    top: 83,
    left: 322,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  settings: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Settings;
