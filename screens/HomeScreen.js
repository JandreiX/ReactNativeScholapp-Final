import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
// Import your custom global styles here

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.HomeScreen}>
            <Pressable
                style={styles.pr1}
                onPress={() => navigation.navigate("ProductPage")}
            >
                <Text style={[styles.price, styles.priceTypo]}>₱250.00</Text>
                <Text style={[styles.productn, styles.productnPosition]}>
                    Gender and Society (A Modular Approach)
                </Text>
                <Image
                    style={[styles.maskGroupIcon, styles.productnPosition]}
                    contentFit="cover"
                    source={require("../assets/mask-group4.png")}
                />
            </Pressable>
            <View style={styles.HomeScreenInner}>
                <View style={styles.mainbWrapper}>
                    <View style={styles.mainb}>
                        <View style={styles.homeParent}>
                            <Pressable
                                onPress={() => navigation.navigate("MenuBtnProfilePage")}
                                style={[styles.menuButtonContainer]}
                            >
                                <FontAwesome name="bars" size={24} color="black" />
                            </Pressable>
                            <Text style={[styles.scholapp, styles.priceTypo]}>SCHOLAPP</Text>
                            <Pressable
                                style={[styles.cart, styles.homeFlexBox]}
                                onPress={() => navigation.navigate("PurchasingCartPage")}
                            >
                                <Image
                                    style={styles.cartIcon}
                                    contentFit="cover"
                                    source={require("../assets/cart.png")}
                                />
                            </Pressable>
                            <Pressable
                                style={styles.search}
                                onPress={() => navigation.navigate("SearchSuggestionPage")}
                            >
                                <Image
                                    style={styles.icon}
                                    contentFit="cover"
                                    source={require("../assets/search.png")}
                                />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.upperbo, styles.upperboPosition]} />
            <View style={styles.option}>
                <Pressable
                    style={styles.home1}
                    onPress={() => navigation.navigate("HomeScreen")}
                >
                    <Image
                        style={styles.maskGroupIcon1}
                        contentFit="cover"
                        source={require("../assets/mask-group.png")}
                    />
                    <Text style={[styles.home2, styles.me1Typo]}>HOME</Text>
                </Pressable>
                <Pressable
                    style={[styles.notification, styles.notificationLayout]}
                    onPress={() => navigation.navigate("NotificationPage")}
                >
                    <Image
                        style={styles.maskGroupIcon2}
                        contentFit="cover"
                        source={require("../assets/mask-group5.png")}
                    />
                    <Text style={[styles.notification1, styles.me1Typo]}>
                        NOTIFICATION
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.personalInfo, styles.notificationLayout]}
                    onPress={() => navigation.navigate("PersonalPage")}
                >
                    <View style={styles.me}>
                        <Image
                            style={styles.maskGroupIcon3}
                            contentFit="cover"
                            source={require("../assets/mask-group6.png")}
                        />
                        <Text style={[styles.me1, styles.me1Typo]}>ME</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    menuImageBtn: {
        position: "relative",
        flex: 1,
        height: 30,
    },
    priceTypo: {
        textAlign: "left",
        fontSize: FontSize.size_16xl,
        fontFamily: FontFamily.abelRegular,
    },
    productnPosition: {
        left: 27,
        position: "absolute",
    },
    homeFlexBox: {
        alignItems: "center",
        flex: 1,
        
    },
    upperboPosition: {
        top: 20,
        left: 0,
        position: "absolute",
    },
    me1Typo: {
        textAlign: "center",
        color: Color.colorWhite,
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.abelRegular,
    },

    notificationLayout: {
        paddingTop: 10,
        marginLeft: 58,
        opacity: 0.7,
        height: 82,
        width: 91,
    },
    price: {
        top: 408,
        left: 176,
        fontSize: 36,
        position: "absolute",
    },
    productn: {
        top: 352,
        fontSize: 20,
        width: 231,
        textAlign: "left",
    },
    maskGroupIcon: {
        top: 36,
        width: 245,
        height: 300,
    },
    pr1: {
        top: 179,
        left: 45,
        borderRadius: 4,
        backgroundColor: "#dcdcdc",
        borderStyle: "solid",
        borderColor: "#a9a9a9",
        borderWidth: 1,
        width: 300,
        height: 450,
        position: "absolute",
    },
    home: {
        justifyContent: "center",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.colorSteelblue_200,
        borderRadius: Border.br_8xs,
    },

    menuButtonContainer: {
        flexDirection: "row", // Ensure horizontal alignment
        alignItems: "center", // Center items vertically
        paddingHorizontal: 10, // Add padding for spacing
        height: 40, // Set a fixed height if needed
    },
    
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

    scholapp: {
        fontSize: 24,
        marginLeft: 20,
        paddingRight: 10,
    },
    cartIcon: {
        width: 35,
        height: 30,
    },
    cart: {
        borderRadius: 11,
        height: 37,
        justifyContent: "center",
        paddingHorizontal: 12,
        paddingVertical: 0,
        marginLeft: 12,
        backgroundColor: "#ffffff",
    },
    icon: {
        height: "100%",
        width: "100%",
    },
    search: {
        width: 45,
        marginLeft: 12,
        height: 40,
    },
    homeParent: {
        top: -1,
        zIndex: 0,
        left: 0,
        position: "absolute",
        flexDirection: "row",
    },
    mainb: {
        alignSelf: "stretch",
        height: 0,
        padding: 3,
        flexDirection: "row",
    },
    mainbWrapper: {
        paddingTop: 20,
        padding: 3,
        flex: 1,
    },
    HomeScreenInner: {
        top: 55,
        left: 2,
        width: 380,
        padding: 3,
        flexDirection: "row",
        position: "absolute",
    },
    upperbo: {
        top: 0,
        width: 390,
        height: 52,
        backgroundColor: "#ffffff",
    },
    maskGroupIcon1: {
        height: 33,
        width: 33,
    },
    home2: {
        width: 42,
        height: 11,
    },
    home1: {
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 24,
        opacity: 0.7,
        height: 70,
        width: 91,
        backgroundColor: Color.colorSteelblue_200,
        borderRadius: Border.br_8xs,
        borderRadius: 8,
        alignItems: "center",
    },
    maskGroupIcon2: {
        paddingTop: 10,
        width: 29,
        height: 33,
    },
    notification1: {
        width: 72,
    },
    notification: {
        paddingLeft: 10,
        paddingRight: 9,
        paddingBottom: 3,
        paddingTop: 3,
        marginLeft: 58,
        alignItems: "center",
    },
    maskGroupIcon3: {
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
        paddingVertical: 3,
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
    HomeScreen: {
        height: 844,
        width: "100%",
        flex: 1,
        backgroundColor: "#ffffff",
    },
});

export default HomeScreen;