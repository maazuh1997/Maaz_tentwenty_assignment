import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../../config/Colors';
import Header from '../../../components/Header';
import moment from 'moment';
import { Fonts } from '../../../config/Fonts';
import Button from '../../../components/Button';
import TextComponent from '../../../components/TextComponent';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import ZoomableSeat from '../../../assets/ZoomableSeat.png';
import SeatOptionIcon from '../../../assets/SeatOptionIcon.png';
import CloseBoldIcon from '../../../assets/CloseBoldIcon.png';
import { showAlert } from '../../../Store/Actions/GeneralActions';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';


const GetTicketsProceed = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = props?.route?.params?.data;
  const selectedData = props?.route?.params?.selectedData;
  const [viewClose, setViewClose] = useState(true)


  const onPressProceed = () => {
    dispatch(showAlert({
      message: 'Booking Successfull.',
      type: 'Success',
    }))
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>

      <Header
        // drawerIcon={true}
        ArrowBack
        name={data?.original_title}
        date={`${moment(selectedData?.date).format('MMMM D, YYYY')} | ${selectedData?.hall?.time} ${selectedData?.hall?.hall?.slice(selectedData?.hall?.hall?.indexOf('+') + 1)}`}
        headerStyle={{ padding: 20 }}
      />

      <View style={{ flex: 0.6 }}>
        {/* Zoomabale View */}
        <View style={{ flexShrink: 1, height: '100%', width: '100%', backgroundColor: Colors.LGREY }}>
          <ReactNativeZoomableView
            maxZoom={30}
            contentWidth={'100%'}
            contentHeight={'100%'}
          >
            <Image
              style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              source={ZoomableSeat}
            />
          </ReactNativeZoomableView>
        </View>
        {/* Zoomabale View */}
      </View>

      <View style={styles.mainView}>
        <ScrollView style={{ flex: 1, marginBottom: '20%' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: Colors.GOLD }}
                source={SeatOptionIcon}
              />
              <TextComponent
                text={'Selected'}
                style={{ fontSize: Fonts.h6, fontFamily: 'Poppins-Light', color: Colors.BLACK, marginHorizontal: 10 }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 40 }}>
              <Image
                style={{ width: 30, height: 30, resizeMode: 'contain' }}
                source={SeatOptionIcon}
              />
              <TextComponent
                text={'Not available'}
                style={{ fontSize: Fonts.h6, fontFamily: 'Poppins-Light', color: Colors.BLACK, marginHorizontal: 10 }}
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginVertical: 40 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: Colors.LPURPLE }}
                source={SeatOptionIcon}
              />
              <TextComponent
                text={'VIP (150$)'}
                style={{ fontSize: Fonts.h6, fontFamily: 'Poppins-Light', color: Colors.BLACK, marginHorizontal: 10 }}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 40 }}>
              <Image
                style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: Colors.LBLUE }}
                source={SeatOptionIcon}
              />
              <TextComponent
                text={'Regular (50 $)'}
                style={{ fontSize: Fonts.h6, fontFamily: 'Poppins-Light', color: Colors.BLACK, marginHorizontal: 10 }}
              />
            </View>
          </View>

          {viewClose ?
            <View style={{ flexDirection: 'row', }}>
              <View style={{ backgroundColor: Colors.LGREY, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 120 }}>
                <Text style={{ fontSize: Fonts.h5, fontFamily: 'Poppins-Medium', color: Colors.BLACK, }}>
                  4/ <Text style={{ fontSize: Fonts.h7, fontFamily: 'Poppins-Light', color: Colors.BLACK, }}>3 row</Text>
                </Text>
                <TouchableOpacity onPress={() => setViewClose(false)}>
                  <Image
                    style={{ width: 15, height: 15, resizeMode: 'contain', tintColor: Colors.BLACK, }}
                    source={CloseBoldIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            : null}
        </ScrollView>
      </View >

      <View style={styles.footerView}>
        <View style={styles.footerViewTextView}>
          <Text style={{ fontSize: Fonts.h7, fontFamily: 'Poppins-Light', color: Colors.BLACK, }}>Total Price</Text>
          <Text style={{ fontSize: Fonts.h5, fontFamily: 'Poppins-Medium', color: Colors.BLACK, }}>
            $ 50
          </Text>
        </View>
        <View style={styles.footerButton}>
          <Button
            title={'Proceed to pay'}
            style={{ width: '100%' }}
            onPress={() => onPressProceed()}
          />
        </View>
      </View>



    </View >
  );
};

export default GetTicketsProceed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    // padding: 20,
  },
  mainView: {
    flex: 0.4,
    padding: 20,
  },
  footerView: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footerButton: {
    width: '60%',
    alignItems: 'center',
    marginHorizontal: 5
  },
  footerViewTextView:
  {
    backgroundColor: Colors.LGREY,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'column',
    alignContent: 'center',
    marginHorizontal: 5
  }
});
