import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, Modal, ActivityIndicator, SafeAreaView } from 'react-native';
import { Colors } from '../config/Colors';
import { Snackbar } from 'react-native-paper';
import { hideAlert } from '../Store/Actions/GeneralActions';

const AppNavigation = () => {

  const loading = useSelector(state => state.GeneralReducer.loading);
  const showAlert = useSelector(state => state.GeneralReducer.showAlert);
  const alert = useSelector(state => state.GeneralReducer.alertOptions);

  const dispatch = useDispatch()

  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>

       <AppStack />
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

        <Snackbar
          onDismiss={() => dispatch(hideAlert())}
          duration={4000}
          style={{ backgroundColor: Colors.LBLUE, color: Colors.WHITE }}
          visible={showAlert}>
          {alert?.message}
        </Snackbar>

      </NavigationContainer>
    </SafeAreaView>
  );
};


export default AppNavigation;
