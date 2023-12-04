import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, Modal, ActivityIndicator, SafeAreaView } from 'react-native';
import { Colors } from '../config/Colors';

const AppNavigation = () => {

  const islogin = useSelector(state => state.AuthReducer.isLogin)
  const loading = useSelector(state => state.GeneralReducer.loading);
  const dispatch = useDispatch()

  // useEffect(() => {

  //   isAuthentication()
  // }, [islogin])


  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>

       <AppStack />



        {/* {islogin == undefined ? SplashScreen.show() : islogin ? <AppStack /> : <AuthStack />} */}

        <Modal visible={loading} transparent>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={'large'} color={Colors.WHITE} />
            <Text style={{ color: '#fff', margin: 10 }}>Please wait</Text>
          </View>
        </Modal>

      </NavigationContainer>
    </SafeAreaView>
  );
};


export default AppNavigation;
