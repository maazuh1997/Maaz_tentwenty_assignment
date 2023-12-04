import React from 'react'
import { View, Text, Modal as RNModal, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import Button from './Button'
import { Colors } from '../config/Colors'
import { Fonts } from '../config/Fonts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Modal = props => {
    return (
        <RNModal
            animationType="slide"
            transparent={true}
            visible={props?.visible} >
            {/* {props?.onClose ?
                <TouchableOpacity onPress={props?.onClose} style={style.cross}  >
                    <MaterialCommunityIcons name='close-thick' color={Colors.BLACK} size={20} />
                </TouchableOpacity>
                : null} */}
            <View style={style.Main_Container}>
                <View style={[style.Sub_Container, { ...props.styles }]}>
                     {props?.onClose ?
                <TouchableOpacity onPress={props?.onClose} style={style.cross}  >
                    <MaterialCommunityIcons name='chevron-left' color={Colors.BLACK} size={30} />
                </TouchableOpacity>
                : null}
                    {props?.title ? <Text style={style.heading} >{props?.title}</Text> : null}
                    {props?.description ? <Text style={style.text} >{props?.description}</Text> : null}

                    {props?.children}

                    {props?.ButtonTitle ? <Button title={props?.ButtonTitle} onPress={props?.onButtonPress} disabled={props?.disabled} style={{ marginVertical: 15 }} /> : null}
                </View>
            </View>
        </RNModal>
    )
}



const style = StyleSheet.create({
    Main_Container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Sub_Container: {
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        elevation: 10,
        width: '90%',
        padding: 20
    },
    heading: {
        fontSize: Fonts.h3,
        marginVertical: 5,
        marginTop: 10,
        fontWeight: 'bold',
        color: Colors.BLUE
    },
    text: {
        color: Colors.LGREY,
        marginVertical: 5,
    },
    cross: {
        alignSelf: 'flex-start',
        left: -10,
        // zIndex: 1
    }
})

export default Modal;