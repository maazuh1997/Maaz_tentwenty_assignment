import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDrawer from './Drawer';
import Home from '../screens/Home/Home';
import CustomerBottomTab from './CustomerBottomTab';
import MovieDetails from '../screens/Watch/MovieDetails/MovieDetails';
import GetTickets from '../screens/Watch/GetTickets/GetTickets';

const Stack = createNativeStackNavigator();

const AppStack = () => {

  const headerShown = { headerShown: false }

  return (
    <Stack.Navigator initialRouteName='Home'>

      <Stack.Screen name="Home" component={CustomerBottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Details" component={MovieDetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="GetTickets" component={GetTickets}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
};

export default AppStack;
