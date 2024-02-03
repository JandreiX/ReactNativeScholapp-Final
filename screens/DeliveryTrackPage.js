import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native"; 
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import OrderContainer from "../components/OrderContainer";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DeliveryTrackPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.deliveryTrackPage}>
      <View style={[styles.deliveryTrackPageChild, styles.dInfoBorder]} />
      <Pressable
        style={[styles.backRemovebgPreview1, styles.questionCircleIcon1Layout]}
        onPress={() => navigation.navigate("PersonalPage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/backremovebgpreview-11.png")}
        />
      </Pressable>
      <Text style={[styles.completed, styles.completedTypo]}>Completed</Text>
      <Image
        style={[styles.questionCircleIcon1, styles.questionCircleIcon1Layout]}
        contentFit="cover"
        source={require("../assets/9111264-question-circle-icon-1.png")}
      />
      <View style={[styles.t2, styles.t2Border]}>
        <Image
          style={[styles.t2Child, styles.t2ChildPosition]}
          contentFit="cover"
          source={require("../assets/line-28.png")}
        />
        <OrderContainer
          eventTime={`1 Jan 2024
8:50 `}
          orderStatusMessage={require("../assets/ellipse-8.png")}
          orderStatusDescription="Your order already packed and ready to ship."
          showSTTRK
          propTop={244}
          propWidth={298}
          propWidth1={199}
        />
        <OrderContainer
          eventTime={`1 Jan 2024
9:30 `}
          orderStatusMessage={require("../assets/ellipse-8.png")}
          orderStatusDescription="Your package is already picked up."
          showSTTRK={false}
          propTop={164}
          propWidth={274}
          propWidth1={175}
        />
        <View style={[styles.rdTrk, styles.trkPosition]}>
          <Image
            style={styles.rdTrkChild}
            contentFit="cover"
            source={require("../assets/ellipse-8.png")}
          />
          <Text style={[styles.yourPackageIs, styles.yourTypo]}>
            Your package is being delivered by courier.
          </Text>
          <Text
            style={[styles.jan20241000, styles.thTrkChildPosition]}
          >{`1 Jan 2024
10:00 `}</Text>
        </View>
        <View style={[styles.thTrk, styles.trkPosition]}>
          <Image
            style={[styles.thTrkChild, styles.thTrkChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-5.png")}
          />
          <Text style={[styles.yourPackageHas, styles.yourTypo]}>
            Your package has been delivered.
          </Text>
          <Text
            style={[styles.jan20241000, styles.thTrkChildPosition]}
          >{`1 Jan 2024
10:20 `}</Text>
        </View>
      </View>
      <View style={[styles.tn, styles.t2Border]}>
        <Text style={[styles.copy, styles.copyTypo]}>COPY</Text>
        <Text style={[styles.jejhc123455667, styles.jejhc123455667Typo]}>
          JEJHC123455667
        </Text>
        <Text style={[styles.trackingNumber, styles.trackingNumberClr]}>
          Tracking Number
        </Text>
      </View>
      <View style={[styles.dInfo, styles.dInfoBorder]}>
        <Text style={[styles.shippedWithStandard, styles.trackingNumberClr]}>
          Shipped with Standard Delivery
        </Text>
        <Text style={[styles.deliveredOnMonContainer, styles.t2ChildPosition]}>
          <Text style={styles.deliveredOn}>{`Delivered on `}</Text>
          <Text style={styles.mon1Jan}>Mon, 1 Jan 2024</Text>
          <Text style={styles.deliveredOn}>{` `}</Text>
        </Text>
        <Image
          style={styles.image8Icon}
          contentFit="cover"
          source={require("../assets/image-8.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dInfoBorder: {
    width: 370,
    borderWidth: 1,
    borderColor: Color.colorCornflowerblue,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 10,
    position: "absolute",
  },
  questionCircleIcon1Layout: {
    height: 25,
    width: 25,
    top: 111,
    position: "absolute",
  },
  completedTypo: {
    fontFamily: FontFamily.abelRegular,
    textAlign: "center",
  },
  t2Border: {
    borderColor: Color.colorBlack,
    width: 370,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 10,
    position: "absolute",
  },
  t2ChildPosition: {
    top: 27,
    position: "absolute",
  },
  trkPosition: {
    display: "none",
    height: 40,
    left: 20,
    position: "absolute",
  },
  yourTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 99,
    top: 0,
    fontFamily: FontFamily.abelRegular,
    position: "absolute",
  },
  thTrkChildPosition: {
    top: 5,
    position: "absolute",
  },
  copyTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.abelRegular,
  },
  jejhc123455667Typo: {
    fontFamily: FontFamily.robotoCondensedBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 11,
  },
  trackingNumberClr: {
    color: Color.colorDimgray_100,
    textAlign: "center",
    position: "absolute",
  },
  deliveryTrackPageChild: {
    top: 94,
    height: 60,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backRemovebgPreview1: {
    left: 23,
  },
  completed: {
    top: 110,
    left: 61,
    fontSize: 23,
    letterSpacing: 1.2,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  questionCircleIcon1: {
    left: 332,
  },
  t2Child: {
    left: 94,
    maxWidth: "100%",
    height: 232,
    overflow: "hidden",
  },
  rdTrkChild: {
    top: 7,
    left: 68,
    width: 10,
    height: 10,
    position: "absolute",
  },
  yourPackageIs: {
    width: 188,
    color: Color.colorBlack,
  },
  jan20241000: {
    left: 0,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  rdTrk: {
    top: 90,
    width: 287,
  },
  thTrkChild: {
    left: 66,
    width: 15,
    height: 15,
  },
  yourPackageHas: {
    width: 185,
    color: Color.colorCornflowerblue,
  },
  thTrk: {
    top: 14,
    width: 284,
  },
  t2: {
    top: 356,
    height: 294,
  },
  copy: {
    left: 326,
    top: 11,
    fontSize: FontSize.size_sm,
    color: Color.colorCornflowerblue,
    textAlign: "center",
    position: "absolute",
  },
  jejhc123455667: {
    left: 210,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  trackingNumber: {
    left: 13,
    fontFamily: FontFamily.robotoCondensedBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    top: 11,
  },
  tn: {
    top: 286,
    height: 38,
  },
  shippedWithStandard: {
    top: 51,
    left: 81,
    letterSpacing: 0.7,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.abelRegular,
  },
  deliveredOn: {
    color: Color.colorBlack,
  },
  mon1Jan: {
    color: Color.colorCornflowerblue,
  },
  deliveredOnMonContainer: {
    left: 82,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.9,
    textAlign: "center",
    fontFamily: FontFamily.abelRegular,
  },
  image8Icon: {
    top: 20,
    left: 30,
    width: 30,
    height: 51,
    position: "absolute",
  },
  dInfo: {
    top: 174,
    height: 92,
  },
  deliveryTrackPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default DeliveryTrackPage;
