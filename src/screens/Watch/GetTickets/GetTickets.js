import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../../config/Colors';
import Header from '../../../components/Header';
import { IMG_URL } from '../../../config/Apis';
import moment from 'moment';
import { Fonts } from '../../../config/Fonts';
import Button from '../../../components/Button';
import TextComponent from '../../../components/TextComponent';
import SeatArrangement from '../../../assets/SeatArrangement.png';
import { useNavigation } from '@react-navigation/native';
import { showAlert } from '../../../Store/Actions/GeneralActions';
import { useDispatch } from 'react-redux';


const GetTickets = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const data = props?.route?.params?.data;
  const [selectedDate, setSelectedDate] = useState("2021-3-05")
  const [selectedHall, setSelectedHall] = useState()

  const RandomDates = [
    {
      id: 1,
      date: "2021-3-05",
    },
    {
      id: 2,
      date: "2021-3-06",
    },
    {
      id: 3,
      date: "2021-3-07",
    },
    {
      id: 4,
      date: "2021-3-08",
    },
    {
      id: 5,
      date: "2021-3-09",
    },
    {
      id: 6,
      date: "2021-3-10",
    },

  ]
  const RandomHalls = [
    {
      id: 1,
      time: '12:30',
      hall: 'Cinetech + Hall 1',
      price: '50',
      bonus: '2500'
    },
    {
      id: 2,
      time: '12:30',
      hall: 'Cinetech + Hall 2',
      price: '80',
      bonus: '2500'
    },
    {
      id: 3,
      time: '12:50',
      hall: 'Cinetech + Hall 3',
      price: '20',
      bonus: '2500'
    },
    {
      id: 4,
      time: '1:30',
      hall: 'Cinetech + Hall 4',
      price: '50',
      bonus: '2500'
    },
    {
      id: 5,
      time: '3:30',
      hall: 'Cinetech + Hall 5',
      price: '70',
      bonus: '2500'
    },
    {
      id: 6,
      time: '7:30',
      hall: 'Cinetech + Hall 6',
      price: '100',
      bonus: '2500'
    },

  ]

  const renderDates = ({ item }) => {
    let selected = item?.date === selectedDate
    return (
      <TouchableOpacity
        onPress={() => setSelectedDate(item?.date)}
        style={{
          justifyContent: "center",
          backgroundColor: selected ? Colors.LBLUE : Colors.LGREY,
          marginHorizontal: 5,
          marginVertical: 10,
          paddingHorizontal: 15,
          paddingVertical: 8,
          borderRadius: 20
        }}
      >
        <TextComponent
          text={moment(item?.date).format('D MMM')}
          style={{
            fontSize: Fonts.h6,
            color: selected ? Colors.WHITE : Colors.BLACK,
            fontFamily: "Poppins-Light",
          }}
        />
      </TouchableOpacity>
    );
  };
  const renderHalls = ({ item }) => {
    let selected = item?.id === selectedHall?.id
    return (
      <TouchableOpacity
        onPress={() => setSelectedHall(item)}
        style={{
          marginHorizontal: 5,
          marginVertical: 10,
          borderRadius: 20,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
          <TextComponent
            text={item?.time}
            style={{ fontSize: Fonts.h6, color: Colors.BLACK, fontWeight: 'bold' }} />
          <TextComponent
            text={item?.hall}
            style={{ fontSize: Fonts.h6, color: Colors.LLGREY, marginHorizontal: 10 }} />
        </View>
        <View style={{ borderRadius: 20, borderWidth: 2, borderColor: selected ? Colors.LBLUE : Colors.LGREY, width: 250, height: 200, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={SeatArrangement} style={{ width: 200, height: 150, resizeMode: 'cover' }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <TextComponent
            text={'From'}
            style={{ fontSize: Fonts.h6, color: Colors.LLGREY, marginHorizontal: 5 }} />
          <TextComponent
            text={`${item?.price}$`}
            style={{ fontSize: Fonts.h6, color: Colors.BLACK, fontWeight: 'bold' }} />
          <TextComponent
            text={'or'}
            style={{ fontSize: Fonts.h6, color: Colors.LLGREY, marginHorizontal: 5 }} />
          <TextComponent
            text={`${item?.bonus} bonus`}
            style={{ fontSize: Fonts.h6, color: Colors.BLACK, fontWeight: 'bold' }} />

        </View>
      </TouchableOpacity>
    );
  };

  const onPressSelectSeats = () => {
    let selectedData = {
      date: selectedDate,
      hall: selectedHall,
    }
    if (!selectedDate) {
      dispatch(showAlert({
        message: 'Please select Date to proceed.',
        type: 'Error',
      }))
    }
    if (!selectedHall) {
      dispatch(showAlert({
        message: 'Please select Hall to proceed.',
        type: 'Error',
      }))
    }
    else {
      navigation.navigate('GetTicketsProceed', { data: data, selectedData })
    }

  }


  return (
    <View style={styles.container}>

      <Header
        // drawerIcon={true}
        ArrowBack
        name={data?.original_title}
        date={`In Theaters ${moment(data?.release_date).format('MMMM D, YYYY')}`}
        headerStyle={{ padding: 20 }}
      />

      <View style={styles.mainView}>
        <TextComponent
          text={'Date'}
          style={{ fontSize: Fonts.h4, color: Colors.BLACK, }}
        />

        <View>
          <FlatList
            data={RandomDates}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderDates}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <FlatList
            data={RandomHalls}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderHalls}
          />
        </View>
      </View>

      <View style={styles.footerView}>
        <View style={styles.footerButton}>
          <Button
            title={'Select Seats'}
            style={{ width: '80%' }}
            onPress={() => onPressSelectSeats()}
          />
        </View>
      </View>



    </View>
  );
};

export default GetTickets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    // padding: 20,
  },
  mainView: {
    padding: 20,
    marginTop: '10%'
  },
  footerView: {
    position: 'absolute',
    bottom: 5,
    width: '100%'
  },
  footerButton: {
    width: '100%',
    alignItems: 'center'
  },
});
