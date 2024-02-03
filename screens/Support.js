import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Support = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.support}>
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
      <View style={[styles.labelsupport, styles.faqFlexBox]}>
        <Text style={styles.support1}>Support</Text>
      </View>
      <View style={[styles.accDeletion, styles.appRateFlexBox]}>
        <View style={styles.requestAccountDeletionWrapper}>
          <Text style={styles.requestAccountDeletion}>
            Request Account Deletion
          </Text>
        </View>
        <Image
          style={styles.arrowForwardRightMoveNavigIcon}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-17.png")}
        />
      </View>
      <View style={[styles.supportChild, styles.supportChildLayout]} />
      <View style={[styles.about, styles.spolPosition]}>
        <Text style={[styles.about1, styles.about1Typo]}>About</Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon1,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-15.png")}
        />
      </View>
      <View style={[styles.supportItem, styles.supportChildLayout]} />
      <View style={styles.supportInner} />
      <View style={[styles.appRate, styles.appRateFlexBox]}>
        <Text style={[styles.applicationRate, styles.about1Typo]}>
          Application Rate!
        </Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon2,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-15.png")}
        />
      </View>
      <View style={[styles.lineView, styles.supportChildLayout]} />
      <View style={[styles.spol, styles.spolPosition]}>
        <View style={[styles.scholappPoliciesWrapper, styles.appRateFlexBox]}>
          <Text style={[styles.scholappPolicies, styles.about1Typo]}>
            Scholapp Policies
          </Text>
        </View>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon3,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-15.png")}
        />
      </View>
      <View style={[styles.supportChild1, styles.supportChildLayout]} />
      <View style={[styles.comru, styles.spolPosition]}>
        <Text style={[styles.communityRules, styles.about1Typo]}>
          Community Rules
        </Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon4,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-15.png")}
        />
      </View>
      <View style={[styles.supportChild2, styles.supportChildLayout]} />
      <View style={[styles.hcen, styles.spolPosition]}>
        <Text style={[styles.helpCentre, styles.about1Typo]}>Help Centre</Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon5,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-15.png")}
        />
      </View>
      <View style={[styles.faq, styles.faqFlexBox]}>
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
  faqFlexBox: {
    justifyContent: "flex-end",
    position: "absolute",
  },
  appRateFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  supportChildLayout: {
    height: 1,
    width: 372,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: 20,
    position: "absolute",
  },
  spolPosition: {
    paddingBottom: Padding.p_2xl,
    paddingTop: Padding.p_6xl,
    height: 70,
    alignItems: "center",
    flexDirection: "row",
    width: 390,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  about1Typo: {
    textAlign: "left",
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
    left: 20,
    position: "absolute",
  },
  support1: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  labelsupport: {
    top: 152,
    backgroundColor: Color.colorGainsboro_200,
    height: 66,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_xl,
    width: 390,
    left: 0,
  },
  requestAccountDeletion: {
    width: 218,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  requestAccountDeletionWrapper: {
    width: 233,
    height: 22,
    alignItems: "center",
  },
  arrowForwardRightMoveNavigIcon: {
    marginLeft: 92,
    width: 15,
    
  },
  accDeletion: {
    top: 683,
    height: 48,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_lg,
    paddingBottom: Padding.p_3xs,
    alignItems: "center",
    width: 390,
    left: 0,
    position: "absolute",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
  },
  supportChild: {
    top: 676,
  },
  about1: {
    width: 55,
  },
  arrowForwardRightMoveNavigIcon1: {
    marginLeft: 262,
  },
  about: {
    top: 595,
    paddingRight: Padding.p_6xl,
    paddingLeft: Padding.p_4xl,
    paddingTop: Padding.p_6xl,
    left: 1,
  },
  supportItem: {
    top: 584,
  },
  supportInner: {
    top: 503,
    height: 70,
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  applicationRate: {
    width: 253,
  },
  arrowForwardRightMoveNavigIcon2: {
    marginLeft: 63,
  },
  appRate: {
    top: 528,
    left: 25,
    width: 328,
    height: 24,
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
  },
  lineView: {
    top: 493,
  },
  scholappPolicies: {
    width: 150,
  },
  scholappPoliciesWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrowForwardRightMoveNavigIcon3: {
    marginLeft: 166,
  },
  spol: {
    top: 412,
    paddingHorizontal: Padding.p_5xl,
    left: 1,
    paddingTop: Padding.p_6xl,
  },
  supportChild1: {
    top: 401,
  },
  communityRules: {
    width: 149,
  },
  arrowForwardRightMoveNavigIcon4: {
    marginLeft: 169,
  },
  comru: {
    top: 323,
    left: 5,
    paddingLeft: Padding.p_lgi,
    paddingRight: Padding.p_mid,
  },
  supportChild2: {
    top: 310,
  },
  helpCentre: {
    width: 101,
  },
  arrowForwardRightMoveNavigIcon5: {
    marginLeft: 217,
  },
  hcen: {
    top: 229,
    paddingRight: Padding.p_5xl,
    paddingLeft: Padding.p_4xl,
    paddingTop: Padding.p_6xl,
    left: 1,
  },
  chatDialogForumSpeakingIcoIcon: {
    width: 30,
    height: 30,
  },
  faq: {
    top: 82,
    left: 322,
    width: 50,
    height: 50,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_4xs,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  support: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Support;
