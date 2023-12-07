import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomerBottomTab from './CustomerBottomTab';
import MovieDetails from '../screens/Watch/MovieDetails/MovieDetails';
import GetTickets from '../screens/Watch/GetTickets/GetTickets';
import GetTicketsProceed from '../screens/Watch/GetTickets/GetTicketsProceed';

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
      <Stack.Screen name="GetTicketsProceed" component={GetTicketsProceed}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
};

export default AppStack;
