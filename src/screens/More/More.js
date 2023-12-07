import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
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
      <Header
        drawerIcon={true}
        title={'More'}
        headerStyle={{ padding: 20 }}
      // SearchIcon
      // onSearchIconPress={() => setHeader(false)}
      />

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
  
});
