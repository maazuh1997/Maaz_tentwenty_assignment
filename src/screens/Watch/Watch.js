import React, { useEffect, useRef, useState } from 'react';
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
import SearchScreenOptionIcon from '../../assets/SearchScreenOptionIcon.png';


const Watch = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [header, setHeader] = useState(true)
  const [search, setSearch] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const timeout = useRef(null);
  const [genres, setGenres] = useState([])
  const MoviesData = useSelector(state => state.GeneralReducer.getMoviesData);
  console.log('genres?.genre_ids', genres?.genres)

  useEffect(() => {
    getMoviesData();
    getMoviesGenre();
  }, []);

  const onRefresh = () => {
    getMoviesData();
    getMoviesGenre();
  };

  const getMoviesData = () => {
    dispatch(GeneralMiddleware.getMovies())
  }

  const onSearch = (text) => {
    let userData = {
      search: text,
    };
    setSearch(text);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      dispatch(GeneralMiddleware.searchMovies(userData))
    }, 1000);
  };

  const getMoviesGenre = () => {
    dispatch(GeneralMiddleware.getGenres())
      .then((data) => {
        setGenres(data)
      })
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

  const renderSearchList = ({ item }) => {
    let found = genres?.genres?.filter((val, index) => {
      return item?.genre_ids.includes(val?.id)
    })
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', { data: item })} style={{ alignItems: 'center', marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <Image source={item?.poster_path ? { uri: IMG_URL + item?.poster_path } : null} style={{ width: '40%', height: 100, borderRadius: 10, resizeMode: 'cover' }} />
        <View style={{ width: '30%' }}>
          <Text style={{ color: Colors.BLACK, fontWeight: 'bold', textAlign: 'left', fontSize: Fonts.h6 }}>{item?.original_title}</Text>
          {found?.map((item, index, array) => {
            return (
              <View style={{ flexDirection: 'row' }}>
                {index === array.length - 1 ?
                  <Text style={{ color: Colors.LLGREY, textAlign: 'left', fontSize: Fonts.h9 }}>{`${item?.name}`}</Text>
                  :
                  <Text style={{ color: Colors.LLGREY, textAlign: 'left', fontSize: Fonts.h9 }}>{`${item?.name},`}</Text>
                }
              </View>
            )
          })}
        </View>
        <Image source={SearchScreenOptionIcon} style={{ width: 26, height: 26, tintColor: Colors.LBLUE }} />

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
          onCloseIconPress={() => { setHeader(true); onSearch('') }}
          onChangeText={e => onSearch(e)}
          value={search}
        />
      }

      {header ?
        <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        } style={{ flex: 1 }}>
          <View style={{ flex: 1, }}>
            <FlatList
              data={MoviesData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderList}
            />
          </View>
        </ScrollView>
        :
        <View style={{ flex: 1, backgroundColor: Colors.LGREY }}>
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <TextComponent
              text={'Top Results'}
              style={{ color: Colors.BLACK, fontSize: Fonts.h6 }}
            />
            <View style={{ borderBottomWidth: 1, borderColor: Colors.LLGREY, marginVertical: 10 }} />
          </View>
          <FlatList
            data={MoviesData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderSearchList}
          />
        </View>
      }

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
