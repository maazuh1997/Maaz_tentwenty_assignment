import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../config/Colors';
import { Fonts } from '../config/Fonts';
import ball from '../assets/ball.png'

const FancyTopTab = (props) => {

    return (
        <View style={styles.container}>
            {
                props?.options?.map((item, index) => {
                    return (
                        <>
                            <TouchableOpacity key={index} style={[styles.tab, { backgroundColor: item?.name == props?.focused ? 'rgba(138, 13, 244, 1)' : null }]} onPress={() => props?.onActivePress(item)}>
                                <Text style={[styles.text, { color: item?.name == props?.focused ? Colors.WHITE : Colors.LGREY }]}>{item?.name}</Text>
                                <View style={[styles.ball_bgview, { display: item?.name == props?.focused ? 'flex' : 'none' }]}>
                                    <Image source={ball} style={styles.active_ball} />
                                </View>
                            </TouchableOpacity>
                        </>
                    )
                })
            }
        </View>
    );
}

export default FancyTopTab;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.LLLGREY,
        width: '100%',
        padding: 8,
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 20
    },
    tab: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingVertical: 15,
        borderRadius: 10
    },
    text: {
        color: Colors.BLACK,
        fontSize: Fonts.h6,
        fontWeight: 'bold'
    },
    active_ball: {
        width: 12,
        height: 12,
        resizeMode: 'contain'
    },
    ball_bgview: {
        width: 18,
        height: 18,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.LLLGREY,
        position: 'absolute',
        bottom: -8
    }

});
