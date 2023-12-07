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
import moment from 'moment';
import { Fonts } from '../../../config/Fonts';
import Button from '../../../components/Button';
import { GeneralMiddleware } from '../../../Store/Middlewares/GeneralMiddleware';
import TextComponent from '../../../components/TextComponent';



const MovieDetails = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = props?.route?.params?.data;
  const [genres, setGenres] = useState([])

  useEffect(() => {
    getMoviesGenre();

  }, []);

  const getMoviesGenre = () => {
    dispatch(GeneralMiddleware.getGenres())
      .then((Data) => {
        let result = Data?.genres
        found = result?.filter((val, index) => {
          return data?.genre_ids.includes(val?.id)
        })
        setGenres(found)
      })
  }

  const renderGenres = ({ item }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          backgroundColor: RandomColors[Math.floor(Math.random() * RandomColors.length)],
          marginHorizontal: 5,
          marginVertical: 10,
          paddingHorizontal: 15,
          paddingVertical: 8,
          borderRadius: 20
        }}
      >
        <TextComponent
          text={item?.name}
          style={{
            fontSize: Fonts.h6,
            color: Colors.WHITE,
            fontFamily: "Poppins-Light",
          }}
        />
      </View>
    );
  };

  const RandomColors = [
    '#2E2739',
    '#60C3F2',
    '#76707D',
    '#EDEDED',
    '#73a1eb',
    '#FFCCCB',
    '#90EE90',
  ]

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={data?.poster_path ? { uri: IMG_URL + data?.poster_path } : null} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
      </View>

      <View style={styles.headerView}>
        <Header
          // drawerIcon={true}
          ColorWhite
          ArrowBack
          title={'Watch'}
          headerStyle={{ padding: 20 }}
        />
      </View>

      <View style={styles.headerCenterView}>
        <View style={styles.headerCenterViewData}>
          <Text style={styles.headerCenterViewTextStyle}>{`In Theaters ${moment(data?.release_date).format('MMMM D, YYYY')}`}</Text>

          <View style={styles.headerCenterViewButton}>
            <View style={styles.buttonsView}>
              <Button
                title={'Get Tickets'}
                onPress={() => navigation.navigate('GetTickets', { data: data })}
              />
            </View>
            <View>
              <Button
                title={'Watch Trailer'}
                buttonNB
                buttonIcon
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomView}>
        <ScrollView style={{ flex: 1 }}>
          <TextComponent
            text={'Genres'}
            style={{ fontSize: Fonts.h4, color: Colors.BLACK, fontFamily: "Poppins-Medium", }}
          />
          <View>
            <FlatList
              data={genres}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderGenres}
            />
          </View>

          <TextComponent
            text={'Overview'}
            style={{ fontSize: Fonts.h4, color: Colors.BLACK, fontFamily: "Poppins-Medium", }}
          />
          <TextComponent
            text={data?.overview}
            style={{ fontSize: Fonts.h7, color: Colors.LLGREY, paddingHorizontal: 5, marginVertical: 10, fontFamily: "Poppins-Light", }}
          />
        </ScrollView>
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
  containerImage: {
    flex: 0.6,
  },
  headerView: {
    position: 'absolute'
  },
  headerCenterView: {
    position: 'absolute',
    top: '30%',
    width: '100%',

  },
  headerCenterViewData: {
    width: '100%',
    alignItems: 'center'
  },
  headerCenterViewTextStyle: {
    color: Colors.WHITE,
    fontSize: Fonts.h4,
    fontFamily: "Poppins-Medium",
  },
  buttonsView: {
    marginVertical: 10,
  },
  headerCenterViewButton: {
    width: '70%',
  },
  bottomView: {
    padding: 20,
    flex: 0.4,
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
