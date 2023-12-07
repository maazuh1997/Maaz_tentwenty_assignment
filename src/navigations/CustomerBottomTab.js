import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import { Image, Platform, Text, View } from "react-native";
import DashboardBT from '../assets/dashboardBT.png'
import watchBT from '../assets/watchBT.png'
import MediaBT from '../assets/MediaBT.png'
import MoreBT from '../assets/MoreBT.png'

import { Colors } from "../config/Colors";
import Watch from "../screens/Watch/Watch";
import Media from "../screens/Media/Media";
import More from "../screens/More/More";

const Tab = createBottomTabNavigator();

const CustomerBottomTab = ({ navigation }) => {

  const headerShown = { headerShown: false }
  return (
    <Tab.Navigator
      labeled={true}
      initialRouteName="Watch"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let image;
          if (route?.name == 'Dashboard') {
            image = DashboardBT;
          }
           else if (route?.name == 'Watch') {
            image = watchBT;
          }
          else if (route?.name == 'Media Library') {
            image = MediaBT;
          }
          else if (route?.name == 'More') {
            image = MoreBT;
          }
          return (
            <Image source={image} resizeMode={'contain'} style={{ height: 20, width: 20, tintColor: color }} />
          );
        },
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.LLGREY,
        tabBarHideOnKeyboard:true,
        tabBarStyle: {
          backgroundColor: Colors.PURPLE,
          height: Platform.OS == 'android' ? 50 : 80,
          justifyContent: 'space-between',
          borderTopLeftRadius:30,
          borderTopRightRadius:30
        },
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text style={{ bottom: 3, fontSize: 12, color: focused ? Colors.WHITE : Colors.LLGREY, fontFamily: 'Poppins-Light' }}>{route?.name}</Text>
          )
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Home} options={headerShown} />
      <Tab.Screen name="Watch" component={Watch} options={headerShown} />
      <Tab.Screen name="Media Library" component={Media} options={headerShown} />
      <Tab.Screen name="More" component={More} options={headerShown} />
      
    </Tab.Navigator>
  );
};

export default CustomerBottomTab;