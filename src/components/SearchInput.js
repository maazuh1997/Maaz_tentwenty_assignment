import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../config/Colors';
import Feather from 'react-native-vector-icons/Feather';
import { Fonts } from '../config/Fonts';
import SearchIcon from '../assets/SearchIcon.png';
import CloseIcon from '../assets/CloseIcon.png';

const SearchInput = (props) => {
    return (
        <View style={styles.input_container}>
            <Image source={SearchIcon} style={{ width: 26, height: 26, tintColor: Colors.BLACK }} />
            <TextInput placeholder={props?.placeholder} style={styles.input} value={props?.value} onChangeText={props?.onChangeText} />

            <TouchableOpacity onPress={props?.onCloseIconPress}>
                <Image source={CloseIcon} style={{ width: 26, height: 26, tintColor: Colors.BLACK }} />
            </TouchableOpacity>

        </View >
    );
}

export default SearchInput;

const styles = StyleSheet.create({
    input_container: {
        width: '100%',
        backgroundColor: Colors.LLLGREY,
        paddingHorizontal: 15,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 25
    },
    input: {
        marginLeft: 15,
        fontSize: Fonts.h5,
        width: '80%'
    }

});

