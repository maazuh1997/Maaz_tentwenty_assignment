import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native'
import CustomeDrawer from './CustomeDrawer';
import CustomerBottomTab from './CustomerBottomTab';
import { useSelector } from 'react-redux';
import { Colors } from '../config/Colors';
import accountant from '../assets/accountant.png';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  // const userRole = useSelector(state => state.AuthReducer.user?.user)

  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: Colors.WHITE,
        borderTopRightRadius: 15,
        // borderBottomLeftRadius: 15
      },

      drawerLabelStyle: {
        color: Colors.DGREY,
        fontFamily: 'Inter-Regular',
        fontSize: 15
      },
      drawerPosition: "left"
    }}
      // initialRouteName='Options'
      drawerContent={(props) => <CustomeDrawer {...props} />}
      >

      <Drawer.Screen name="Home" component={CustomerBottomTab}
        options={{
          headerShown: false,
          drawerIcon: () => <Image source={accountant} style={{ width: 20, height: 20 }} />,
          drawerItemStyle: { display: 'none', }
        }}
      />


    </Drawer.Navigator>
  )
}

export default MyDrawer;