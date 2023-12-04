import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../config/Colors';
import { Fonts } from '../config/Fonts';

const Button = (props) => {
    return (
        <TouchableOpacity disabled={props?.disabled} style={[styles.button, props?.style]} onPress={props?.onPress}>
            <Text style={[styles.button_text, props?.Textstyle]}>{props?.title}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.BLUE,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15
    },
    button_text: {
        color: Colors.WHITE,
        fontSize: Fonts.h5
    }
});

