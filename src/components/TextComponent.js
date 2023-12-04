import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../config/Colors'

const TextComponent = (props) => {
    return (
        <Text
            numberOfLines={props?.numberOfLines}
            style={[styles.text, props?.style]}
            allowFontScaling={false}>
            {props?.text}
        </Text>
    )
}

export default TextComponent

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: Colors.LGREY,
    },
})