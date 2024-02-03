import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SearchSuggestionPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.searchSuggestionPage, styles.searchFlexBox]}>
      <View style={styles.pr1}>
        <View style={styles.maskGroup}>
          <Text style={[styles.productn, styles.priceFlexBox]}>
            Gender and Society (A Modular Approach)
          </Text>
          <Image
            style={styles.n1Icon}
            contentFit="cover"
            source={require("../assets/n-1.png")}
          />
        </View>
        <Text style={[styles.price, styles.priceFlexBox]}>₱250.00</Text>
      </View>
      <View style={[styles.tr, styles.trPosition]} />
      <View style={styles.searchSuggestionPageInner}>
        <View style={[styles.searchBarWrapper, styles.searchFlexBox]}>
          <View style={styles.searchBar}>
            <Pressable
              style={styles.search}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/search3.png")}
              />
            </Pressable>
            <Text style={[styles.search1, styles.search1Typo]}>search</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchFlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  priceFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  trPosition: {
    left: 0,
    position: "absolute",
  },
  search1Typo: {
    fontFamily: FontFamily.abelRegular,
    fontSize: FontSize.size_lg,
  },
  productn: {
    top: 316,
    width: 224,
    fontFamily: FontFamily.abelRegular,
    fontSize: FontSize.size_lg,
    left: 0,
    position: "absolute",
  },
  n1Icon: {
    top: 2,
    left: -6,
    width: 245,
    height: 298,
    position: "absolute",
  },
  maskGroup: {
    height: 362,
    alignSelf: "stretch",
  },
  price: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.aBeeZeeRegular,
    marginTop: 20,
    alignSelf: "stretch",
  },
  pr1: {
    top: 182,
    left: 46,
    backgroundColor: Color.colorGainsboro_400,
    width: 292,
    height: 443,
    justifyContent: "center",
    paddingLeft: Padding.p_8xl,
    paddingTop: Padding.p_mini,
    paddingRight: Padding.p_9xl,
    paddingBottom: Padding.p_mini,
    opacity: 0.7,
    alignItems: "center",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  tr: {
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.43)",
    width: 391,
    height: 856,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  search: {
    width: 29,
    height: 25,
  },
  search1: {
    letterSpacing: 0.9,
    color: "rgba(0, 0, 0, 0.7)",
    textAlign: "center",
    marginLeft: 7,
  },
  searchBar: {
    borderRadius: Border.br_6xs,
    backgroundColor: "#efefef",
    width: 371,
    height: 47,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBarWrapper: {
    backgroundColor: Color.colorDarkslategray,
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
    borderRadius: Border.br_mini,
  },
  searchSuggestionPageInner: {
    top: -27,
    left: -10,
    width: 411,
    height: 176,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  searchSuggestionPage: {
    backgroundColor: Color.colorWhite,
    height: 856,
    width: "100%",
  },
});

export default SearchSuggestionPage;
