import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import FormContainer from "../components/FormContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const MeetUpMessage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.meetUpMessageContainer}>
      <FormContainer
        dimensionCode={require("../assets/search1.png")}
        dimensionCodeImageUrl={require("../assets/cart1.png")}
        menuIconBackgroundColor="rgba(255, 255, 255, 0)"
        propTextAlign="center"
      />
      <View style={[styles.meetUpBox, styles.boxLayout1]}>
        <Pressable
          style={styles.xButton}
          onPress={() => navigation.navigate("ProductPage")}
        >
          <View style={[styles.xButtonChild, styles.xButtonChildLayout]} />
          <Image
            style={[styles.xbRemovebgPreview1Icon, styles.xButtonChildLayout]}
            source={require("../assets/xbremovebgpreview-1.png")}
          />
        </Pressable>
        <Text style={[styles.meetUp, styles.meetUpTypo]}>meet-up</Text>
      </View>
      <View style={styles.meetUpMessageChild} />
      <View style={styles.user}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group13.png")}
        />
        <Text style={[styles.user0001, styles.meetUpTypo]}>User0001</Text>
      </View>
      <View style={[styles.urMes, styles.urMesLayout]}>
        <View style={styles.urMesChild} />
      </View>
      <Image
        style={styles.infoIcon1}
        contentFit="cover"
        source={require("../assets/2639839-info-icon-1.png")}
      />
      <View style={[styles.textMessageBox, styles.urMesLayout]}>
        <Image
          style={styles.plusIcon1}
          contentFit="cover"
          source={require("../assets/2639891-plus-icon-1.png")}
        />
        <View style={[styles.textMessage, styles.textFlexBox]}>
          <View style={[styles.textBox, styles.textFlexBox]}>
            <Text style={[styles.textMessage1, styles.declineTypo]}>
              text message
            </Text>
          </View>
        </View>
        <Image
          style={styles.sendIcon1}
          contentFit="cover"
          source={require("../assets/9035000-send-icon-1.png")}
        />
      </View>
      <View style={[styles.declineBox, styles.boxLayout]}>
        <Image
          style={styles.closeDeleteDismissExitCancIcon}
          contentFit="cover"
          source={require("../assets/619539-close-delete-dismiss-exit-cancel-icon.png")}
        />
        <Text style={[styles.decline, styles.declineTypo]}>decline</Text>
      </View>
      <View style={[styles.acceptBox, styles.boxLayout]}>
        <Image
          style={styles.checkCompleteDoneGreenSuccIcon}
          contentFit="cover"
          source={require("../assets/1930264-check-complete-done-green-success-icon.png")}
        />
        <Text style={[styles.decline, styles.declineTypo]}>accept</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxLayout1: {
    width: 390,
    flexDirection: "row",
    left: 0,
  },
  xButtonChildLayout: {
    borderRadius: Border.br_8xs,
    height: 45,
    width: 45,
  },
  meetUpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
    color: Color.colorBlack,
  },
  urMesLayout: {
    height: 74,
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "space-between",
    backgroundColor: Color.colorWhite,
  },
  declineTypo: {
    letterSpacing: 1.5,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.abelRegular,
  },
  boxLayout: {
    height: 44,
    width: 119,
    borderRadius: Border.br_6xs,
    top: 410,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  xButtonChild: {
    backgroundColor: Color.colorSnow_200,
  },
  xbRemovebgPreview1Icon: {
    marginTop: -45,
  },
  xButton: {
    alignItems: "center",
    height: 45,
    width: 45,
  },
  meetUp: {
    fontSize: FontSize.size_16xl,
    letterSpacing: 3.5,
    marginLeft: 48,
  },
  meetUpBox: {
    top: 103,
    borderRadius: Border.br_3xl,
    height: 762,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_4xl,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  meetUpMessageChild: {
    top: 185,
    left: -5,
    borderColor: Color.colorSteelblue_400,
    borderWidth: 3,
    width: 399,
    height: 80,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  maskGroupIcon: {
    width: 25,
    height: 25,
  },
  user0001: {
    fontSize: FontSize.size_xl,
    letterSpacing: 2,
    width: 110,
    height: 21,
    marginLeft: 15,
  },
  user: {
    top: 217,
    left: 107,
    width: 150,
    height: 25,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  urMesChild: {
    top: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSteelblue_200,
    width: 204,
    height: 64,
    left: 0,
    position: "absolute",
  },
  urMes: {
    top: 312,
    left: 182,
    width: 213,
  },
  infoIcon1: {
    top: 131,
    left: 336,
    width: 35,
    height: 39,
    position: "absolute",
  },
  plusIcon1: {
    width: 34,
    height: 32,
  },
  textMessage1: {
    color: Color.colorGray_600,
    display: "flex",
    width: 106,
    height: 17,
    alignItems: "center",
  },
  textBox: {
    width: 243,
    height: 31,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_4xs,
  },
  textMessage: {
    borderRadius: Border.br_3xs,
    width: 284,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_3xs,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    justifyContent: "space-between",
    borderStyle: "solid",
    height: 45,
  },
  sendIcon1: {
    width: 28,
    marginLeft: 8,
    height: 32,
  },
  
  closeDeleteDismissExitCancIcon: {
    width: 23,
    height: 26,
  },
  decline: {
    marginLeft: 12,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
  },
  declineBox: {
    left: 197,
    padding: Padding.p_4xs,
  },
  checkCompleteDoneGreenSuccIcon: {
    width: 24,
    height: 22,
  },
  acceptBox: {
    left: 60,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_4xs,
    alignItems: "center",
  },
  meetUpMessage: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },

  textMessageBox: {
    bottom: 0, // Position at the bottom
    backgroundColor: "#1f619e",
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_mini,
    paddingRight: Padding.p_2xs,
    paddingBottom: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    width: 420, // Set width to 420
    position: "absolute", // Position at the bottom
    left: 0,
  },

  meetUpMessageContainer: {
    flex: 1,
    width: 420, // Set width to 420
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default MeetUpMessage;
