import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Colors } from '../config/Colors';
import { Fonts } from '../config/Fonts';

const Input = (props) => {
    return (
        <View style={[styles.mainCon, props?.inputStyle]}>
            {props?.label ? 
            <Text style={[styles.label, props?.labelStyle]}>{props?.label}</Text>
        : null}
            <View style={[styles.inputContainer, { ...props.style }]}>

            {
                props?.leftIcon ?
                    <TouchableOpacity>
                        {props?.leftIcon}
                    </TouchableOpacity>
                    : null
            }
            
            <TextInput
                style={[styles.input, { width: props?.rightIcon ? '85%' : '92%' }, props?.stylesInputText]}
                onChangeText={props?.onChangeText}
                value={props?.value}
                placeholder={props?.placeholder}
                secureTextEntry={props?.secureTextEntry}
                maxLength={props?.maxLength}
                keyboardType={props?.keyboardType}
                placeholderTextColor={Colors.ChatInput}
                editable={props?.editable}
            />

            {
                props?.rightIcon ?
                    <TouchableOpacity style={styles.rightIcon} onPress={props?.onRightIconPress}>
                        {props?.rightIcon}
                    </TouchableOpacity>
                    : null
            }

        </View>
        </View>
        
    );
}

export default Input;

const styles = StyleSheet.create({
    mainCon:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        fontWeight: "bold",
        color: Colors.BLACK,
        fontSize: Fonts.h6
    },
    inputContainer: {
        width: '97%',
        marginVertical: 15,
        marginHorizontal: 5,
        borderWidth: 0.5,
        borderColor: Colors.LLGREY,
        // borderBottomWidth: 1.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius : 5,
        paddingHorizontal: 10
    },
    input: {
        color: Colors.BLACK,
        padding: 15,
        
    },
    rightIcon : {
        // marginHorizontal: 10
    }

});

