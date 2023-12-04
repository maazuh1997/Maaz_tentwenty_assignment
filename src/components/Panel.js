import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Linking, Alert } from "react-native";
import TextComponent from "./TextComponent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../config/Colors";
import { Fonts } from "../config/Fonts";
import Clipboard from '@react-native-clipboard/clipboard';
import { useDispatch } from "react-redux";
import { showAlert } from "../Store/Actions/GeneralActions";

const Panel = (props) => {

  const [panel, setPanel] = useState(false);
const dispatch = useDispatch();

  const copyToClipboard = (text) => {
    dispatch(showAlert({
      title: 'url',
      message: 'Copied'
    }))
    setTimeout(() => {
      Clipboard.setString(text);
    }, 1000);    
  };

  return (
    <View style={panel == true ? styles.mainItem : styles.mainItemOne}>
      <View style={styles.head}>
        <TextComponent
          text={props?.item?.name}
          style={{
            fontSize: Fonts.h4,
            paddingVertical: 2,
            color: panel == true ? Colors.WHITE : Colors.BLUE,
            fontFamily: "Inter-Medium",
            fontWeight: "bold",
          }}
        />
        <TouchableOpacity>
          {panel == false ? (
            <MaterialCommunityIcons
              onPress={() => setPanel(true)}
              name={"chevron-right"}
              size={30}
              color={Colors.BLACK}
            />
          ) : (
            <MaterialCommunityIcons
              onPress={() => setPanel(false)}
              name={"chevron-down"}
              size={30}
              color={Colors.WHITE}
            />
          )}
        </TouchableOpacity>
      </View>
      {panel == true ? (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "70%",
            }}
          >
            <TouchableOpacity 
            onPress={() => copyToClipboard(props?.item?.url)}
            >
              <MaterialCommunityIcons
                name={"content-copy"}
                size={20}
                color={Colors.WHITE}

              />
            </TouchableOpacity>
            <TextComponent
              text={props?.item?.url}
              style={{
                fontSize: Fonts.h7,
                paddingVertical: 2,
                color: Colors.WHITE,
                fontFamily: "Inter-Medium",
                marginLeft: 10,
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL(props?.item?.url).catch(err => console.error("Couldn't load page", err))}
            style={{
              width: "20%",
              backgroundColor: Colors.WHITE,
              borderRadius: 7,
              padding: 3,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text style={{ textAlign: "center", color: Colors.BLUE, fontSize: Fonts.h7 }}>
              Visit link
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  mainItem: {
    backgroundColor: Colors.BLUE,
    // marginHorizontal: 20,
    borderRadius: 20,
    padding: 25,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 40,
    elevation: 10,
    marginVertical: 15,
  },
  mainItemOne: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: 5,
    borderRadius: 20,
    padding: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 40,
    elevation: 5,
    marginVertical: 15,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Panel;
