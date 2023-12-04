import { BackHandler, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { Colors } from '../../config/Colors'
import { Fonts } from '../../config/Fonts'
import TextComponent from '../../components/TextComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { HideLoading, ShowLoading } from '../../Store/Actions/GeneralActions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Storage from '../../Utils/AsyncStorage'
import { userData } from '../../Store/Actions/AuthAction'
import WebView from 'react-native-webview'
import Button from '../../components/Button'

const Onboarding = () => {
    const user = useSelector(state => state.AuthReducer.user);
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", BackPress)
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", BackPress)
        }
    }, [])

    const BackPress = () => {
        return true;
    }

    const onMessage = async (message) => {
        dispatch(HideLoading())
        let data = {
            ...user,
            onboarding_url: ""
        }
        // await Storage.set('@user', JSON.stringify(data));
        dispatch(userData(data));
        setTimeout(() => {
            navigation.goBack()
        }, 1000);
    }
    return (
        <View style={styles.container}>
            <View style={{ alignSelf: 'center' }}>
                <TextComponent text={'Onboarding'} style={styles.heading} />
            </View>

            <WebView source={{ uri: user?.onboarding_url }}
                style={{ marginTop: 10, flex: 1 }}
                onLoadStart={() => dispatch(ShowLoading())}
                onLoadEnd={() => dispatch(HideLoading())}
                onMessage={(e) => onMessage(e)}
            />
            {/* <Button title={'Done'} style={{ borderRadius: 10, width: '50%' }} onPress={(e) => onMessage(e)} /> */}

        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.WHITE,
        flex: 1,
        padding: 20
    },
    heading: {
        fontSize: Fonts.h3,
        color: Colors.BLACK,
        marginLeft: 30
    }
})