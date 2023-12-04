import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView ,TextInput} from "react-native";
import { Colors } from "../config/Colors";
import TextComponent from "./TextComponent";
import { Fonts } from "../config/Fonts";
import SelectDropdown from 'react-native-select-dropdown';
const Dropdown = (props) =>{
    return(
        <View>
             <Text style={styles.label}>{props?.label}</Text>
        <SelectDropdown
        dropdownStyle={{backgroundColor: Colors.WHITE, borderRadius: 10}}
                    defaultButtonText={props?.placeholder}
                    buttonStyle={styles.inputContainer}
                    buttonTextStyle={{
                        color: Colors.ChatInput,
                        fontSize: 13,
                        textAlign: 'left',
                        marginLeft: -5,
                        padding: 10,
                    }}
                    data={props?.data}
                    selectedRowTextStyle={{ color: Colors.BLUE, fontSize: 13 }}
                    rowTextStyle={{ color: Colors.BLACK, fontSize: 13 }}
                    onSelect={props?.onSelect}
                    // onSelect={(selectedItem, index) => {
                    //     setFinSpeed(selectedItem.name)
                    //     //   setposition(selectedItem);
                    // }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return (
                            <TextComponent
                                style={{ color: Colors.BLACK, fontSize: 13, }}
                                text={selectedItem.name}
                            />
                        );
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.name;
                    }}
                    renderDropdownIcon={props?.renderDropdownIcon}
                    // renderDropdownIcon={isOpened => {
                    //     return (
                    //         <MaterialIcons name={isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={20} color={Colors.LGREY} />
                    //     );
                    // }}
                />
        </View>
    )
};
export default Dropdown;
const styles = StyleSheet.create({
    label: {
      fontWeight: "bold",
      color: Colors.BLACK,
      fontSize: Fonts.h6,
    },
    inputContainer: {
      width: '97%',
      marginVertical: 15,
      marginHorizontal: 5,
      borderWidth: 0.5,
      borderColor: Colors.LLGREY,
      borderRadius : 5,
      backgroundColor: Colors.WHITE,
      height: 60
    }
    
  });