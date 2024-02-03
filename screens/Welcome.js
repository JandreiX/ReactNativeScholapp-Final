import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { images, FONTS, COLORS, SIZES } from '../constants'
import Button from '../components/Button'

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={images.background}
                style={styles.background}>
                <Image
                    source={images.logo}
                    resizeMode='contain'
                    style={styles.logo}
                />
                <Text style={styles.title}>Scholapp</Text>
                <Text style={styles.subtitle}>Buy and Sell</Text>
                <Text style={styles.subtitle}>Find your academic needs</Text>
                <View style={{ marginTop: 40 }}>
                    <Button
                        title="Login With Email"
                        style={styles.btn}
                        onPress={() => navigation.navigate("Login")}
                    />
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Signup")}
                        >
                            <Text style={{ ...FONTS.h3, color: COLORS.black }}>
                                {" "} Sign Up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        height: SIZES.width * 0.6,
        width: SIZES.width * 0.6
    },
    title: {
        ...FONTS.h1,
        textTransform: "uppercase",
        color: COLORS.black
    },
    subtitle: {
        ...FONTS.body2,
        color: COLORS.black
    },
    btn: {
        width: SIZES.width - 44
    },
    bottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 12
    }
})

export default Welcome;