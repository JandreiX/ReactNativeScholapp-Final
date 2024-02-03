import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const NotificationPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notificationPage}>
      <View style={styles.option}>
        <Pressable
          style={[styles.home, styles.homeSpaceBlock]}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("../assets/mask-group7.png")}
          />
          <Text style={[styles.home1, styles.me1Typo]}>HOME</Text>
        </Pressable>
        <View style={[styles.notification, styles.notificationLayout]}>
          <Image
            style={styles.maskGroupIcon1}
            contentFit="cover"
            source={require("../assets/mask-group8.png")}
          />
          <Text style={styles.me1Typo}>NOTIFICATION</Text>
        </View>
        <Pressable
          style={[styles.personalInfo, styles.notificationLayout]}
          onPress={() => navigation.navigate("PersonalPage")}
        >
          <View style={styles.me}>
            <Image
              style={styles.maskGroupIcon2}
              contentFit="cover"
              source={require("../assets/mask-group9.png")}
            />
            <Text style={[styles.me1, styles.me1Typo]}>ME</Text>
          </View>
        </Pressable>
      </View>
      <Text style={styles.notification2}>NOTIFICATION</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeSpaceBlock: {
    paddingTop: Padding.p_sm,
    alignItems: "center",
  },
  me1Typo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.abelRegular,
  },
  notificationLayout: {
    marginLeft: 59,
    height: 82,
    width: 91,
    backgroundColor: Color.colorSteelblue_200,
    borderRadius: Border.br_8xs,
  },
  maskGroupIcon: {
    height: 33,
    width: 33,
  },
  home1: {
    width: 42,
    height: 11,
  },
  home: {
    paddingLeft: Padding.p_6xl,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_5xl,
    opacity: 0.6,
    height: 82,
    width: 91,
    paddingTop: Padding.p_sm,
    alignItems: "center",
    backgroundColor: Color.colorSteelblue_200,
    borderRadius: Border.br_8xs,
  },
  maskGroupIcon1: {
    width: 29,
    height: 33,
  },
  notification: {
    paddingLeft: Padding.p_3xs,
    paddingRight: Padding.p_4xs,
    paddingBottom: Padding.p_sm,
    paddingTop: Padding.p_sm,
    alignItems: "center",
  },
  maskGroupIcon2: {
    height: 35,
    width: 33,
  },
  me1: {
    width: 24,
    height: 17,
  },
  me: {
    alignItems: "flex-end",
    width: 33,
  },
  personalInfo: {
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_xs,
    opacity: 0.6,
  },
  option: {
    top: 820,
    width: 450,
    height: 92,
    flexDirection: "row",
    backgroundColor: Color.colorSteelblue_200,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  notification2: {
    top: 104,
    left: 21,
    fontSize: FontSize.size_16xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  notificationPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default NotificationPage;
