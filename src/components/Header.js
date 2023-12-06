import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../config/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons'
import PlaceholderImg from '../assets/avatar.png'
import { Fonts } from '../config/Fonts';
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '../assets/ArrowBack.png';
import SearchIcon from '../assets/SearchIcon.png';
const Header = (props) => {
    const navigation = useNavigation()
    return (
        <View style={[styles.container, props?.headerStyle]}>

            <View style={{ flexDirection: 'row' }}>
                {props.ArrowBack ?
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={ArrowBack} style={{ width: 26, height: 26, tintColor: props.ColorWhite ? Colors.WHITE : Colors.BLACK }} />
                    </TouchableOpacity> : null
                }
                <View style={{ marginLeft: 10 }}>
                    <Text style={[styles.heading, { color: props.ColorWhite ? Colors.WHITE : Colors.BLACK }]}>{props.title}</Text>
                </View>
            </View>
            {props.name ?
                <View style={{ flexDirection: 'column' }}>
                    <Text style={[styles.text, { color: Colors.BLACK }]}>{props.name}</Text>
                    <Text style={[styles.text, { color: Colors.LBLUE, fontSize: Fonts.h7 }]}>{props.date}</Text>
                </View>
                : null}


            {props.name ?
                <View />
                : null}


            {props?.SearchIcon ?
                <View style={{ width: 35, alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={props?.onSearchIconPress}>
                        <Image source={SearchIcon} style={{ width: 26, height: 26, tintColor: props.ColorWhite ? Colors.WHITE : Colors.BLACK }} />
                    </TouchableOpacity>
                </View> : null
            }
        </View>
    );
}
export default Header;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    heading: {
        fontSize: Fonts.h5,
        color: Colors.BLACK,
        // marginLeft: 30
        fontWeight: 'bold',
    },
    text: {
        fontSize: Fonts.h6,
        color: Colors.BLACK,
        // marginLeft: 30
        fontWeight: 'bold',
        textAlign: 'center'
    },
});