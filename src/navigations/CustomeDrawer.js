import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TextComponent from '../components/TextComponent';
import { Colors } from '../config/Colors';
import { Fonts } from '../config/Fonts';


const CustomeDrawer = (props) => {
    const navigation = useNavigation();
    
   
    return (
        <View style={{ flex: 1 }}>
           
            <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            
        </View>
    )
    //
}
export default CustomeDrawer
const styles = StyleSheet.create({
    roundBtn: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical: 15,
        marginHorizontal: 10
    },
    button_text: {
        color: Colors.LLGREY,
        fontSize: Fonts.h6,
        fontWeight: 'bold',
        marginLeft: '5%',
    },
})