import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Touchable,
  TouchableOpacity,
  FlatList,
  Platform,
  RefreshControl,
  Linking,
  // Modal
} from 'react-native';
import { Colors } from '../../config/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TextComponent from '../../components/TextComponent';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { Fonts } from '../../config/Fonts';


const More = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();




  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: Colors.BLUE,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          marginBottom: 20,
          elevation: 10,
        }}>
        <Header
          drawerIcon={true}
          headerStyle={{ backgroundColor: Colors.BLUE, padding: 20 }}
          tint
        />
        <View
          style={{
            paddingHorizontal: 40,
            paddingVertical: 20,
          }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TextComponent
              text={'Hello, '}
              style={{
                fontSize: Fonts.h3,
                color: Colors.WHITE,
                // fontFamily: "Inter-Medium",
              }}
            />
            <TextComponent
              text={'User'}
              style={{
                fontSize: Fonts.h3,
                color: Colors.WHITE,
                fontFamily: 'Inter-Medium',
              }}
            />
          </View>
          <TextComponent
            text={'Good Morning!'}
            style={{
              fontSize: Fonts.h4,
              color: Colors.WHITE,
              // fontFamily: "Inter-Medium",
            }}
          />
        </View>
      </View>
      <View style={styles.container}>
        <ScrollView
          // refreshControl={
          //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // }
          >



        </ScrollView>
      </View>

    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    // padding: 20,
  },
  mainItem: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 15,
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
  },
  loanMainItem: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
});
