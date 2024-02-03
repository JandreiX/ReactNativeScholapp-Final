  import * as React from "react";
  import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
  import { Image } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import { FontFamily, Color, FontSize } from "../GlobalStyles";

  const UserSellingPage = () => {
    const navigation = useNavigation();

    return (
      <View style={styles.userSellingPage}>
        <View style={styles.userSellingPageChild} />
        <Pressable
          style={[styles.pub, styles.pubLayout]}
          onPress={() => navigation.navigate("PersonalPage")}
        >
          <Image
            style={[styles.pubChild, styles.pubLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-115.png")}
          />
          <Text style={[styles.publish, styles.publishTypo]}>PUBLISH</Text>
        </Pressable>
        <View style={styles.photos}>
          <Text style={[styles.photos1, styles.publishTypo]}>Photos</Text>
          <Image
            style={styles.addPic}
            contentFit="cover"
            source={require("../assets/add-pic.png")}
          />
        </View>
        <View style={[styles.price, styles.pdLayout]}>
          <Text style={[styles.text, styles.textPosition]}>₱</Text>
          <Image
            style={[styles.priceChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-24.png")}
          />
          <View style={[styles.priceItem, styles.textPosition]} />
          <TextInput style={[styles.price1, styles.productTypo ]} 
            placeholder="Price"
            placeholderTextColor={Color.colorGray_600}
          />
          </View>
        <View style={[styles.category, styles.savedLayout]}>
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require("../assets/image-6.png")}
          />
          <Image
            style={[styles.categoryChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-24.png")}
          />
          <View style={styles.categoryItem} />
          <TextInput style={styles.category1} 
            placeholder="Category"
            placeholderTextColor={Color.colorGray_600}
          />
        </View>
        <View style={[styles.pd, styles.pdLayout]}>
          <Image
            style={[styles.pdChild, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-24.png")}
          />
          <TextInput 
            style={[styles.enterProductDescription, styles.enterTypo]}
            placeholder="Enter Product Name"
            placeholderTextColor={Color.colorGray_600}
          />
          <Text style={[styles.productDescription, styles.productTypo]}>
            Product Description
          </Text>
        </View>
        <View style={[styles.pn, styles.pdLayout]}>
        <Image
          style={[styles.pnChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/line-24.png")}
        />
        <Text style={[styles.productDescription, styles.productTypo]}>
          Product Name
        </Text>
        <TextInput
          style={[styles.productDescription, styles.productTypo, styles.inputTextLabel]}
          placeholder="Enter Product Name"
          placeholderTextColor={Color.colorGray_600}
        />
      </View>
        <Image
          style={styles.backArrowIcon}
          contentFit="cover"
          source={require("../assets/back-arrow.png")}
        />
        <Pressable
          style={[styles.saved, styles.savedLayout]}
          onPress={() => navigation.navigate("PersonalPage")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/saved.png")}
          />
        </Pressable>
        <Text style={[styles.sellProduct, styles.productTypo]}>SELL PRODUCT</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    pubLayout: {
      height: 86,
      width: 450,
      left: 0,
      position: "absolute",
    },
    publishTypo: {
      textAlign: "center",
      fontFamily: FontFamily.abelRegular,
    },
    pdLayout: {
      width: 300,
      left: 38,
    },
    textPosition: {
      height: 35,
      top: 0,
      position: "absolute",
    },
    childLayout: {
      maxHeight: "100%",
      width: 300,
      left: 0,
      position: "absolute",
    },
    productTypo: {
      textAlign: "left",
      fontFamily: FontFamily.abelRegular,
      position: "absolute",
    },
    savedLayout: {
      height: 38,
      position: "absolute",
    },
    enterTypo: {
      color: Color.colorGray_600,
      fontSize: FontSize.size_sm,
      left: 8,
      textAlign: "left",
      fontFamily: FontFamily.abelRegular,
      position: "absolute",
    },
    
    userSellingPageChild: {
      backgroundColor: Color.colorSteelblue_200,
      height: 160,
      width: 450,
      left: 0,
      top: 0,
      position: "absolute",
    },
    pubChild: {
      top: 60,
      width: 450,
      height: 86,

    },
    publish: {
      top: 80,
      fontSize: FontSize.size_6xl,
      letterSpacing: 0.8,
      color: Color.colorWhite,
      display: "flex",
      left: 103,
      fontSize: FontSize.size_16xl,
      letterSpacing: 1.1,
      display: "flex",
      alignItems: "center",
      fontFamily: FontFamily.abelRegular,
      width: 184,
      height: 44,
      position: "absolute",
    },
    pub: {
      top: 758,
    },
    photos1: {
      fontSize: FontSize.size_6xl,
      letterSpacing: 0.8,
      color: Color.colorBlack,
    },
    addPic: {
      height: 143,
      marginTop: 4,
      width: 326,
    },
    photos: {
      top: 529,
      left: 32,
      height: 178,
      width: 326,
      position: "absolute",
    },
    text: {
      left: 5,
      fontSize: FontSize.size_11xl,
      width: 27,
      color: Color.colorGray_200,
      height: 35,
      textAlign: "center",
      fontFamily: FontFamily.abelRegular,
    },
    priceChild: {
      top: 39,
    },
    priceItem: {
      left: 37,
      width: 236,
      backgroundColor: Color.colorWhite,
    },
    price1: {
      top: 9,
      fontSize: FontSize.size_base,
      height: 18,
      width: 38,
      left: 42,
      textAlign: "left",
      color: Color.colorGray_200,
    },
    price: {
      top: 467,
      height: 39,
      position: "absolute",
    },
    image6Icon: {
      width: 23,
      opacity: 0.75,
      left: 8,
      height: 27,
      top: 0,
      position: "absolute",
    },
    categoryChild: {
      top: 38,
    },
    categoryItem: {
      left: 40,
      width: 229,
      height: 27,
      top: 0,
      position: "absolute",
      backgroundColor: Color.colorWhite,
    },
    category1: {
      top: 6,
      fontSize: FontSize.size_sm,
      opacity: 0.75,
      textAlign: "left",
      left: 42,
      color: Color.colorBlack,
      fontFamily: FontFamily.abelRegular,
      position: "absolute",
    },
    category: {
      top: 401,
      width: 300,
      left: 38,
    },
    pdChild: {
      top: 57,
    },
    enterProductDescription: {
      top: 36,
      width: 176,
      height: 16,
    },
    productDescription: {
      fontSize: FontSize.size_lg,
      letterSpacing: 0.5,
      color: Color.colorBlack,
      textAlign: "left",
      left: 0,
      top: 0,
    },
    pd: {
      top: 322,
      height: 57,
      position: "absolute",
    },
    pnChild: {
      top: 54,
    },
    enterProductName: {
      top: 33,
      width: 139,
      height: 19,
    },
    inputTextLabel: {
        bottom: -15,
        padding: 10,
    },
    pn: {
      top: 249,
      height: 54,
      position: "absolute",
    },
    backArrowIcon: {
      top: 106,
      left: 23,
      width: 25,
      height: 25,
      position: "absolute",
    },
    icon: {
      height: "100%",
      width: "100%",
    },
    saved: {
      left: 331,
      top: 102,
      width: 38,
    },
    sellProduct: {
      top: 185,
      fontSize: FontSize.size_21xl,
      left: 38,
      textAlign: "left",
      color: Color.colorBlack,
    },
    userSellingPage: {
      flex: 1,
      height: 844,
      overflow: "hidden",
      width: "100%",
      backgroundColor: Color.colorWhite,
    },
  });

  export default UserSellingPage;