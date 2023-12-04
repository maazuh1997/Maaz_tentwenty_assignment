import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import TextComponent from './TextComponent';
import { useNavigation } from "@react-navigation/native";
import { Fonts } from "../config/Fonts";
import { Colors } from "../config/Colors";
import scheduleImg from '../assets/schedule.png';
import { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const OptionPanel = (props) => {
    const navigation = useNavigation();
    const [panelOpen, setPanelOpen] = useState(false)
    const [child, setChild] = useState(false)
    // const data = [
    //     {
    //         id: 1,
    //         name: 'Business Financing',
    //         url: 'BusinessFinancing',
    //         child: false
    //     }
    // ];
    const renderChildData = ({item})=>{
        return(
            <View>
            <TouchableOpacity style={{width: '65%', alignSelf: "center", flexDirection: 'row', alignItems: 'center', marginVertical: 5}}onPress={()=>navigation.navigate(item?.url) } >
                <FontAwesome name={'square'} size={10} color={Colors.BLUE}/>
                <TextComponent
                text={item?.name}
                style={{ fontSize: Fonts.h5, color:  Colors.BLUE, fontFamily: 'Inter-Medium',marginLeft: 5 }}
              />

            </TouchableOpacity>
            
            </View>
        )
    }
    const renderSubScreen = ({item})=>{
        return(
            <View>
            <TouchableOpacity style={{width: '85%', alignSelf: "center", flexDirection: 'row', alignItems: 'center', marginVertical: 5, borderColor: item?.child && child ? Colors.BLUE : null, borderWidth: item?.child && child ? 1 : null, borderRadius: 10, padding: 5}} onPress={ item?.child ? ()=>setChild(!child) : ()=>navigation.navigate(item?.url) }>
                
                <FontAwesome name={'square'} size={15} color={Colors.BLUE}/>
                {item?.image ? 
                <Image source={item?.image} style={{height: 20, width: 20, tintColor: Colors.BLUE, resizeMode: 'contain', marginLeft: 10}}/>
                : null
                }
                <TextComponent
                text={item?.name}
                style={{ fontWeight: 'bold', fontSize: Fonts.h5, color:  Colors.BLUE, fontFamily: 'Inter-Medium',marginLeft: 5 }}
              />
            </TouchableOpacity>
            {item?.child && child ? 
            <FlatList
                    style={{ marginVertical: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={item?.child}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderChildData}
                />
            : null}
            </View>
        )
    }

    return(
        <View>
        <TouchableOpacity style={panelOpen ? styles?.openItemCon :  styles.itemCon}
        onPress={()=>setPanelOpen(!panelOpen)}
         >
              <Image source={props?.source} style={panelOpen ? styles.openImage : styles?.image} />
              <TextComponent
                text={props?.title}
                style={{ fontWeight: 'bold', fontSize: Fonts.h5, paddingVertical: 2, color:panelOpen ? Colors.WHITE : Colors.BLUE, fontFamily: 'Inter-Medium', width: '75%' }}
              />
            </TouchableOpacity>
            {panelOpen? 
            <FlatList
                    style={{ marginVertical: 10 }}
                    showsVerticalScrollIndicator={false}
                    data={props?.data}
                    keyExtractor={props?.keyExtractor}
                    renderItem={renderSubScreen}
                />
            : null}
        </View>
    )
};
export default OptionPanel;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.WHITE,
      padding: 20,
  
    },
    main_container: {
      // flex: 1,
      backgroundColor: Colors.WHITE,
      marginTop: 15,
      marginHorizontal: 5
    },
    toggle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 30,
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 20,
      resizeMode: 'contain',
      tintColor: Colors.BLUE
    },
    openImage: {
        width: 50,
        height: 50,
        marginRight: 20,
        resizeMode: 'contain',
        tintColor: Colors.WHITE
    },
    itemCon: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      elevation: 5,
      backgroundColor: 'white',
      borderRadius: 20,
      marginVertical: 15,
    },
    openItemCon: {
        isplay: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      elevation: 5,
      backgroundColor: Colors.BLUE,
      borderRadius: 20,
      marginVertical: 15,
    },
    codeText: {
      fontWeight: 'bold',
      fontSize: Fonts.h5,
      color: Colors.BLACK,
      width: '80%',
      alignSelf: 'center',
      textAlign: 'center',
      marginVertical: 20,
    },
  });
  