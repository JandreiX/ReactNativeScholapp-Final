import * as React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PersonalPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalPage}>
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
          <Text style={[styles.home1, styles.home1Typo]}>HOME</Text>
        </Pressable>
        <Pressable
          style={[styles.notification, styles.notificationLayout]}
          onPress={() => navigation.navigate("NotificationPage")}
        >
          <Image
            style={styles.maskGroupIcon1}
            contentFit="cover"
            source={require("../assets/mask-group8.png")}
          />
          <Text style={[styles.notification1, styles.home1Typo]}>
            NOTIFICATION
          </Text>
        </Pressable>
        <View style={[styles.personalInfo, styles.notificationLayout]}>
          <View style={styles.me}>
            <Image
              style={styles.maskGroupIcon2}
              contentFit="cover"
              source={require("../assets/mask-group9.png")}
            />
            <Text style={styles.me1}>ME</Text>
          </View>
        </View>
      </View>
      <View style={[styles.space, styles.spacePosition]} />
      <View style={[styles.personalPageChild, styles.personalChildLayout]} />
      <View style={[styles.personalPageItem, styles.personalChildLayout]} />
      <View style={[styles.personalPageInner, styles.personalChildLayout]} />
      <View style={[styles.lineView, styles.personalChildLayout]} />
      <View style={[styles.personalPageChild1, styles.personalChildLayout]} />
      <Pressable
        style={[styles.message, styles.mrLayout]}
        onPress={() => navigation.navigate("MeetUpMessage")}
      >
        <Image
          style={[styles.inboxRemovebgPreview1Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/inboxremovebgpreview-1.png")}
        />
        <Text style={[styles.message1, styles.message1Typo]}>Message</Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-24.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.mr, styles.mrLayout]}
        onPress={() => navigation.navigate("RatingSellingItemPage" )}
      >
        <Image
          style={[styles.starIcon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/8666698-star-icon-1.png")}
        />
        <Text style={[styles.myRating, styles.message1Typo]}>My Rating</Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon1,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-24.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.savedItems, styles.mrLayout]}
        onPress={() => navigation.navigate("UserSellingPage")}
      >
        <Image
          style={[styles.bookmarkBadgeUiSavedIcon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/8207903-bookmark-badge-ui-saved-icon-1.png")}
        />
        <Text style={[styles.savedItems1, styles.message1Typo]}>
          Saved Items
        </Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon2,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-24.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.startSellingButton, styles.mrLayout]}
        onPress={() => navigation.navigate("UserSellingPage")}
      >
        <Image
          style={styles.maskGroupIcon3}
          contentFit="cover"
          source={require("../assets/mask-group11.png")}
        />
        <Text style={[styles.startSelling, styles.message1Typo]}>
          Start Selling
        </Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon3,
            styles.arrowIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-24.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.receive, styles.mrLayout]}
        onPress={() => navigation.navigate("DeliveryTrackPage")}
      >
        <Image
          style={[styles.truckLineIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/8679633-truck-line-icon-1.png")}
        />
        <Text style={[styles.orderedReceive, styles.shippingTypo]}>
          Ordered Receive
        </Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon4,
            styles.arrowIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-24.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.ship, styles.mrLayout]}
        onPress={() => navigation.navigate("DeliveryTrackPage")}
      >
        <Image
          style={[styles.boxDeliveryDownDownloadPacIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/5740091-box-delivery-down-download-package-icon-1.png")}
        />
        <Text style={[styles.shipping, styles.shippingTypo]}>Shipping</Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon5,
            styles.arrowIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-24.png")}
        />
      </Pressable>
      <Pressable
        style={styles.myPrchs}
        onPress={() => navigation.navigate("DeliveryTrackPage")}
      >
        <Image
          style={[styles.invenRemovebgPreview1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/invenremovebgpreview-1.png")}
        />
        <Text style={[styles.myPurchases, styles.shippingTypo]}>
          My Purchases
        </Text>
        <Text style={styles.purchaseHistory}>Purchase History</Text>
        <Image
          style={[
            styles.arrowForwardRightMoveNavigIcon6,
            styles.arrowIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/2931159-arrow-forward-right-move-navigation-icon-18.png")}
        />
      </Pressable>
      <View style={[styles.profile, styles.spacePosition]}>
        <Image
          style={styles.businessManMaleUserAvatarIcon}
          contentFit="cover"
          source={require("../assets/403022-business-man-male-user-avatar-profile-icon-2.png")}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeSpaceBlock: {
    opacity: 0.6,
    paddingTop: Padding.p_sm,
    alignItems: "center",
  },
  home1Typo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.abelRegular,
  },
  notificationLayout: {
    marginLeft: 59,
    height: 82,
    width: 91,
    backgroundColor: Color.colorSteelblue_200,
    borderRadius: Border.br_8xs,
  },
  spacePosition: {
    width: 420,
    backgroundColor: Color.colorSteelblue_200,
    left: -1,
    position: "absolute",
  },
  personalChildLayout: {
    height: 1,
    width: 372,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    left: 19,
    position: "absolute",
  },
  mrLayout: {
    height: 50,
    left: 0,
    width: 390,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iconLayout1: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  message1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 82,
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 12,
    width: 12,
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
  },
  shippingTypo: {
    left: 67,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  arrowIconPosition: {
    left: 357,
    height: 12,
    width: 12,
    position: "absolute",
  },
  iconPosition: {
    top: 15,
    position: "absolute",
  },
  maskGroupIcon: {
    height: 33,
    width: 33,
  },
  home1: {
    width: 42,
    height: 11,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  home: {
    paddingLeft: Padding.p_6xl,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_5xl,
    height: 82,
    width: 91,
    opacity: 0.6,
    paddingTop: Padding.p_sm,
    backgroundColor: Color.colorSteelblue_200,
    borderRadius: Border.br_8xs,
  },
  maskGroupIcon1: {
    width: 29,
    height: 33,
  },
  notification1: {
    marginTop: 1,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  notification: {
    paddingLeft: Padding.p_3xs,
    paddingRight: Padding.p_4xs,
    paddingBottom: Padding.p_sm,
    opacity: 0.6,
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
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.abelRegular,
    fontSize: FontSize.size_xs,
  },
  me: {
    alignItems: "flex-end",
    width: 33,
  },
  personalInfo: {
    paddingHorizontal: Padding.p_9xl,
    paddingVertical: Padding.p_xs,
  },
  option: {
    top: 820,
    width: 500,
    flexDirection: "row",
    backgroundColor: Color.colorSteelblue_200,
    left: -1,
    borderRadius: Border.br_8xs,
  },
  space: {
    top: 374,
    width: 500,
    height: 65,
  },
  personalPageChild: {
    top: 645,
  },
  personalPageItem: {
    top: 574,
  },
  personalPageInner: {
    top: 315,
  },
  lineView: {
    top: 507,
  },
  personalPageChild1: {
    top: 257,
  },
  inboxRemovebgPreview1Icon: {
    left: 35,
    height: 30,
    top: 10,
  },
  message1: {
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 82,
    top: 16,
  },
  arrowForwardRightMoveNavigIcon: {
    left: 354,
    height: 12,
    width: 12,
    top: 19,
  },
  message: {
    top: 654,
  },
  starIcon1: {
    top: 9,
    left: 35,
    height: 30,
  },
  myRating: {
    top: 18,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 82,
  },
  arrowForwardRightMoveNavigIcon1: {
    top: 21,
    left: 354,
    height: 12,
    width: 12,
  },
  mr: {
    top: 586,
  },
  bookmarkBadgeUiSavedIcon1: {
    left: 34,
    top: 14,
  },
  savedItems1: {
    top: 20,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 82,
  },
  arrowForwardRightMoveNavigIcon2: {
    top: 23,
    left: 354,
    height: 12,
    width: 12,
  },
  savedItems: {
    top: 515,
  },
  maskGroupIcon3: {
    left: 36,
    height: 31,
    top: 16,
    width: 30,
    position: "absolute",
  },
  startSelling: {
    top: 22,
    color: Color.colorSteelblue_200,
    width: 83,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 82,
    height: 17,
  },
  arrowForwardRightMoveNavigIcon3: {
    top: 25,
    left: 355,
  },
  startSellingButton: {
    top: 448,
  },
  truckLineIcon1: {
    left: 28,
    top: 10,
    position: "absolute",
    height: 25,
    width: 25,
  },
  orderedReceive: {
    top: 14,
  },
  arrowForwardRightMoveNavigIcon4: {
    top: 16,
  },
  receive: {
    top: 321,
    borderRadius: Border.br_8xs,
  },
  boxDeliveryDownDownloadPacIcon: {
    width: 20,
    height: 20,
    left: 28,
  },
  shipping: {
    top: 17,
  },
  arrowForwardRightMoveNavigIcon5: {
    top: 19,
  },
  ship: {
    top: 260,
    borderRadius: Border.br_8xs,
  },
  invenRemovebgPreview1Icon: {
    left: 25,
    height: 25,
    width: 25,
    borderRadius: Border.br_8xs,
  },
  myPurchases: {
    top: 19,
  },
  purchaseHistory: {
    left: 288,
    fontSize: FontSize.size_3xs,
    color: "#4f4d4d",
    textAlign: "right",
    top: 21,
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  arrowForwardRightMoveNavigIcon6: {
    top: 21,
    borderRadius: Border.br_8xs,
  },
  myPrchs: {
    top: 199,
    height: 55,
    left: 0,
    width: 390,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  businessManMaleUserAvatarIcon: {
    width: 80,
    height: 80,
  },
  user12334: {
    fontSize: FontSize.size_6xl,
    marginLeft: 15,
  },
  profile: {
    top: 0,
    height: 196,
    paddingHorizontal: Padding.p_4xl,
    paddingTop: Padding.p_55xl,
    paddingBottom: 42,
    alignItems: "center",
    width: 391,
    flexDirection: "row",
  },
  personalPage: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default PersonalPage;
