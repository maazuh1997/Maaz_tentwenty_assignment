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
import { Colors } from '../../config/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TextComponent from '../../components/TextComponent';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { Fonts } from '../../config/Fonts';
import SearchInput from '../../components/SearchInput';
import { GeneralMiddleware } from '../../Store/Middlewares/GeneralMiddleware';
import { IMG_URL } from '../../config/Apis';


const Watch = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [header, setHeader] = useState(true)
  const [search, setSearch] = useState('')
  const [moviesData, setmoviesData] = useState([])

  const MoviesData = useSelector(state => state.GeneralReducer.getMoviesData);

  console.log({ MoviesData })
  useEffect(() => {
    getMoviesData();

  }, []);

  const getMoviesData = () => {
    dispatch(GeneralMiddleware.getMovies())
  }


  const renderList = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', { data: item })} style={{ alignItems: 'center', marginVertical: 10 }}>
        <Image source={item?.poster_path ? { uri: IMG_URL + item?.poster_path } : null} style={{ width: '90%', height: 200, borderRadius: 10 }} />
        <View style={{ position: 'absolute', bottom: 20, justifyContent: 'flex-start' }}>
          <Text style={{ color: Colors.WHITE, fontWeight: 'bold', textAlign: 'left', fontSize: Fonts.h3 }}>{item?.original_title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {header ?
        <Header
          drawerIcon={true}
          title={'Watch'}
          headerStyle={{ padding: 20 }}
          SearchIcon
          onSearchIconPress={() => setHeader(false)}
        />
        :
        <SearchInput
          placeholder={'TV shows, movies and more'}
          onCloseIconPress={() => setHeader(true)}
          onChangeText={e => setSearch(e)}
          value={search}
        />
      }
      <View style={{ flex: 1, }}>
        <FlatList
          data={MoviesData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderList}
        />
      </View>

    </View>
  );
};

export default Watch;

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
