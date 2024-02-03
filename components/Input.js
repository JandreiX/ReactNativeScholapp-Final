import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { COLORS, SIZES } from '../constants';

const Input = (props) => {
    const onChangeText = (text) => {
        props.onInputChanged(props.id, text);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.inputContainer, { borderColor: props.errorText ? COLORS.red : COLORS.black }]}>
                <TextInput
                    {...props}
                    onChangeText={onChangeText}
                    style={styles.input}
                    placeholder={props.placeholder}
                    placeholderTextColor={props.placeholderTextColor}
                    autoCapitalize='none'
                />
            </View>
            {props.errorText && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{props.errorText}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding2,
        borderRadius: 12,
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    input: {
        color: COLORS.black,
        flex: 1,
        fontFamily: 'regular',
        paddingTop: 0,
        fontSize: 18
    },
    errorContainer: {
        marginVertical: 4,
    },
    errorText: {
        color: COLORS.red,
        fontSize: 14, // Increase the font size for better visibility
        fontWeight: 'bold', // Make the text bold for emphasis
    },

});

export default Input;