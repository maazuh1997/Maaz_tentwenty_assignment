import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../config/Colors';
import { Fonts } from '../config/Fonts';

const TopTab = (props) => {

    return (
        <View style={styles.container}>
            {
                props?.options?.map((item, index) => {
                    return (
                        <TouchableOpacity key={item?.name} style={[styles.tab, { backgroundColor: item?.name == props?.focused ? 'white' : null }]} onPress={() => props?.onActivePress(item)}>
                            <Text style={[styles.text, { color: item?.name == props?.focused ? Colors.BLACK : Colors.DGREY }]}>{item?.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}

export default TopTab;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.LLLGREY,
        width: '100%',
        padding: 5,
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 20
    },
    tab: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10
    },
    text: {
        color: Colors.BLACK,
        fontSize: Fonts.h6,
    },

});

