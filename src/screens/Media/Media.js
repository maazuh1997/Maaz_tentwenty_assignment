import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Colors } from '../../config/Colors';
import TextComponent from '../../components/TextComponent';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { Fonts } from '../../config/Fonts';


const Media = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();




  return (
    <View style={styles.container}>
        <Header
          drawerIcon={true}
          title={'Media Library'}
          headerStyle={{ padding: 20 }}
          // SearchIcon
          // onSearchIconPress={() => setHeader(false)}
        />
       
    </View>
  );
};

export default Media;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    // padding: 20,
  },
  
});
