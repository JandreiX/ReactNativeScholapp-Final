import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const MyComponent = () => {
    const [text, setText] = useState('');

    const handleChangeText = (value) => {
        setText(value);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter your text here"
                value={text}
                onChangeText={handleChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
});

export default MyComponent;
