import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ContainerOptionForm = ({
  dimensionLabel,
  carDimensions,
  onHomePress,
  onNOTIFICATIONPress,
  onPersonalInfoPress,
}) => {
  return (
    <View style={styles.option}>
      <Pressable style={styles.home} onPress={onHomePress}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
        <Text style={[styles.home1, styles.me1Typo]}>HOME</Text>
      </Pressable>
      <Pressable
        style={[styles.notification, styles.notificationLayout]}
        onPress={onNOTIFICATIONPress}
      >
        <Image
          style={styles.maskGroupIcon1}
          contentFit="cover"
          source={dimensionLabel}
        />
        <Text style={[styles.notification1, styles.me1Typo]}>NOTIFICATION</Text>
      </Pressable>
      <Pressable
        style={[styles.personalInfo, styles.notificationLayout]}
        onPress={onPersonalInfoPress}
      >
        <View style={styles.me}>
          <Image
            style={styles.maskGroupIcon2}
            contentFit="cover"
            source={carDimensions}
          />
          <Text style={[styles.me1, styles.me1Typo]}>ME</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  me1Typo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.abelRegular,
    fontSize: FontSize.size_xs,
  },
  notificationLayout: {
    marginLeft: 58,
    opacity: 0.7,
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
    paddingLeft: 25,
    paddingRight: 24,
    paddingBottom: Padding.p_5xl,
    opacity: 0.7,
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
  notification1: {
    width: 72,
  },
  notification: {
    paddingLeft: 10,
    paddingRight: 9,
    paddingBottom: Padding.p_sm,
    paddingTop: Padding.p_sm,
    alignItems: "center",
    marginLeft: 58,
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
    paddingHorizontal: 28,
    paddingVertical: Padding.p_xs,
  },
  option: {
    position: "absolute",
    bottom: 0,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 420,
    height: 92,
    flexDirection: "row",
    backgroundColor: Color.colorSteelblue_200,
    borderRadius: Border.br_8xs,
  },
});

export default ContainerOptionForm;
