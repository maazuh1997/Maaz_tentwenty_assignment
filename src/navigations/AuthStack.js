import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import GetStarted from '../screens/GetStarted/GetStarted';


const Stack = createNativeStackNavigator();

const AuthStack = () => {

  const headerShown = { headerShown: false }

  return (
    <Stack.Navigator initialroutname={'Authentication'} >
      
      {/* <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={headerShown}
      /> */}
     
    </Stack.Navigator>
  );
};

export default AuthStack;
