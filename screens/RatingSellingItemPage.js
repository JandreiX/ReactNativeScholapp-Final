import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContainerOptionForm from "../components/ContainerOptionForm";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const RatingSellingItemPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ratingSellingItemPage}>
      <View style={[styles.denzelc, styles.hazelpPosition]}>
        <Image
          style={[styles.stars1Icon, styles.stars1IconLayout]}
          contentFit="cover"
          source={require("../assets/stars-1.png")}
        />
        <Image
          style={styles.pic81Icon}
          contentFit="cover"
          source={require("../assets/pic8-1.png")}
        />
        <Text style={[styles.denzelc1, styles.hazelp1Typo]}>Denzel.C</Text>
        <Text
          style={[styles.excellentQualityVery, styles.theTypo]}
        >{`Excellent quality, very responsive and  accommodating seller. `}</Text>
        <Image
          style={[styles.icons8Like481, styles.icons8Layout1]}
          contentFit="cover"
          source={require("../assets/icons8like48-1.png")}
        />
        <Image
          style={[styles.icons8Dots481, styles.icons8Layout]}
          contentFit="cover"
          source={require("../assets/icons8dots48-1.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>01-01-2024 17:03</Text>
        <Image
          style={[styles.n2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/n-2.png")}
        />
      </View>
      <View style={[styles.gracieJane, styles.hazelpPosition]}>
        <Image
          style={[styles.stars1Icon1, styles.stars1IconLayout]}
          contentFit="cover"
          source={require("../assets/stars-1.png")}
        />
        <Text style={[styles.gracieJane1, styles.hazelp1Typo]}>
          Gracie Jane
        </Text>
        <Text style={[styles.theSellerIs, styles.theTypo]}>
          The seller is very responsive to my questions. Packed the items nicely
          and securely. Good product quality, will definitely buy again from
          this seller.
        </Text>
        <Image
          style={[styles.icons8Like4811, styles.icons8Position]}
          contentFit="cover"
          source={require("../assets/icons8like48-1.png")}
        />
        <Image
          style={[styles.icons8Dots4811, styles.icons8Layout]}
          contentFit="cover"
          source={require("../assets/icons8dots48-1.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>03-01-2024 11:22</Text>
        <Image
          style={[styles.n2Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/n-2.png")}
        />
        <Image
          style={[styles.pic31Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/pic3-1.png")}
        />
      </View>
      <View style={[styles.hazelp, styles.hazelpPosition]}>
        <Image
          style={[styles.stars1Icon2, styles.stars1IconLayout]}
          contentFit="cover"
          source={require("../assets/stars-1.png")}
        />
        <Text style={[styles.hazelp1, styles.hazelp1Typo]}>Hazel.P</Text>
        <Text style={[styles.theSellerIs1, styles.theTypo]}>
          The seller is very responsive, well accommodating. Product received in
          good quality. Price is very budget friendly.
        </Text>
        <Image
          style={[styles.icons8Like4812, styles.icons8Layout1]}
          contentFit="cover"
          source={require("../assets/icons8like48-1.png")}
        />
        <Image
          style={[styles.icons8Dots4812, styles.icons8Position]}
          contentFit="cover"
          source={require("../assets/icons8dots48-1.png")}
        />
        <Text style={[styles.text2, styles.textTypo]}>01-01-2024 17:03</Text>
        <Image
          style={[styles.n2Icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/n-2.png")}
        />
        <Image
          style={[styles.pic41Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/pic4-1.png")}
        />
      </View>
      <View style={styles.upper}>
        <Image
          style={styles.backArrowIcon}
          contentFit="cover"
          source={require("../assets/back-arrow.png")}
        />
        <Text style={styles.ratings}>Ratings</Text>
      </View>
      <ContainerOptionForm
        dimensionLabel={require("../assets/mask-group1.png")}
        carDimensions={require("../assets/mask-group2.png")}
        onHomePress={() => navigation.navigate("HomeScreen")}
        onNOTIFICATIONPress={() => navigation.navigate("NotificationPage")}
        onPersonalInfoPress={() => navigation.navigate("PersonalPage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hazelpPosition: {
    display: "none",
    width: 341,
    left: 22,
    position: "absolute",
  },
  stars1IconLayout: {
    height: 30,
    width: 183,
    left: 39,
    position: "absolute",
  },
  hazelp1Typo: {
    height: 31,
    width: 140,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  theTypo: {
    height: 75,
    width: 290,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 51,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icons8Layout1: {
    height: 21,
    width: 20,
    left: 287,
  },
  icons8Layout: {
    height: 14,
    width: 21,
    left: 320,
  },
  textTypo: {
    height: 18,
    width: 105,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    height: 84,
    width: 63,
    left: 51,
    position: "absolute",
  },
  icons8Position: {
    top: 9,
    position: "absolute",
  },
  iconPosition: {
    width: 39,
    left: 0,
    position: "absolute",
  },
  stars1Icon: {
    top: 32,
  },
  pic81Icon: {
    borderRadius: 92,
    width: 36,
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  denzelc1: {
    top: 1,
    left: 13,
    width: 140,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
  },
  excellentQualityVery: {
    top: 49,
  },
  icons8Like481: {
    top: 6,
    position: "absolute",
  },
  icons8Dots481: {
    top: 10,
    position: "absolute",
  },
  text: {
    top: 210,
    left: 39,
    height: 18,
    width: 105,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: FontSize.size_3xs,
  },
  n2Icon: {
    top: 117,
  },
  denzelc: {
    top: 144,
    height: 228,
  },
  stars1Icon1: {
    top: 35,
  },
  gracieJane1: {
    left: 17,
    top: 0,
  },
  theSellerIs: {
    top: 69,
  },
  icons8Like4811: {
    height: 21,
    width: 20,
    left: 287,
  },
  icons8Dots4811: {
    top: 13,
    position: "absolute",
  },
  text1: {
    top: 252,
    left: 36,
  },
  n2Icon1: {
    top: 156,
  },
  pic31Icon: {
    top: 4,
    borderRadius: 136,
    height: 32,
  },
  gracieJane: {
    top: 394,
    height: 270,
  },
  stars1Icon2: {
    top: 31,
  },
  hazelp1: {
    left: 13,
    width: 140,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    top: 0,
  },
  theSellerIs1: {
    top: 48,
  },
  icons8Like4812: {
    top: 5,
    position: "absolute",
  },
  icons8Dots4812: {
    height: 14,
    width: 21,
    left: 320,
  },
  text2: {
    top: 209,
    left: 39,
    height: 18,
    width: 105,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: FontSize.size_3xs,
  },
  n2Icon2: {
    top: 124,
  },
  pic41Icon: {
    top: 3,
    borderRadius: 90,
    height: 33,
  },
  hazelp: {
    top: 686,
    height: 227,
  },
  backArrowIcon: {
    width: 25,
    height: 25,
  },
  ratings: {
    fontSize: FontSize.size_16xl,
    letterSpacing: 2.5,
    lineHeight: 40,
    fontFamily: FontFamily.abelRegular,
    color: "#fdfdfd",
    width: 170,
    height: 33,
    marginLeft: 57,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  upper: {
    backgroundColor: Color.colorSteelblue_200,
    width: 420,
    flexDirection: "row",
    paddingHorizontal: Padding.p_4xl,
    paddingTop: Padding.p_55xl,
    paddingBottom: Padding.p_4xs,
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  ratingSellingItemPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1008,
  },
});

export default RatingSellingItemPage;
