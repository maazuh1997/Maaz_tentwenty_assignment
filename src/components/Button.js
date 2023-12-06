import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../config/Colors';
import { Fonts } from '../config/Fonts';
import PlayIcon from '../assets/playIcon.png';

const Button = (props) => {
    return (
        <TouchableOpacity disabled={props?.disabled} style={[props?.buttonNB ? styles.buttonNB : styles.buttonWB, props?.style]} onPress={props?.onPress}>
            {props?.buttonIcon ? <Image source={PlayIcon} style={{ width: 20, height: 20, tintColor: Colors.WHITE, marginHorizontal: 10 }} /> : null}
            <Text style={[styles.button_text, props?.Textstyle]}>{props?.title}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    buttonNB: {
        borderColor: Colors.LBLUE,
        borderWidth: 2,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingVertical: 15,
        flexDirection: 'row'
    },
    buttonWB: {
        backgroundColor: Colors.LBLUE,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingVertical: 15,
        flexDirection: 'row'
    },
    button_text: {
        color: Colors.WHITE,
        fontSize: Fonts.h5
    }
});

