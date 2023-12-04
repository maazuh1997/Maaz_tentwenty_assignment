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
  ImageBackground,
  // Modal
} from 'react-native';
import { Colors } from '../../../config/Colors';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/Header';
import { IMG_URL } from '../../../config/Apis';



const MovieDetails = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = props?.route?.params?.data;

  console.log('data', props?.route?.params?.data)

  return (
    <View style={styles.container}>
      <View style={{height:'50%'}}>
        <Image source={data?.poster_path ? { uri: IMG_URL + data?.poster_path } : null} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
      </View>
      <View>
        <Header
          // drawerIcon={true}
          ArrowBack
          title={'Watch'}
          headerStyle={{ padding: 20 }}
        />
      </View>




    </View>
  );
};

export default MovieDetails;

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
  background_image: {
    height: 200,
    width: 200,
  }
});
