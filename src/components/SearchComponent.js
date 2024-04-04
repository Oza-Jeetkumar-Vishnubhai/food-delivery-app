import React from "react";
import { View, Text, FlatList, keyboardDismissHandlerManager } from "native-base";
import { StyleSheet, TouchableWithoutFeedback, Modal,TextInput, TouchableOpacity,Keyboard } from "react-native";
import { Icon } from "@rneui/base";
import { useState } from "react";
import { colors } from "../global/styles";
import * as Animatable from "react-native-animatable";
import { useRef } from "react";
import { filterData } from "../global/Data";
import { useNavigation } from "@react-navigation/native";

const SearchComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocus, setTextInputFocus] = useState(true);
  const textInput = useRef(0);
  const [data,setData] = useState(filterData)
  const navigation = useNavigation()


  const contains = ({name},query)=>{
    if(name.includes(query))return true;
    return false;
  }

  const handleSearch = (text)=>{
    const datas = filterData.filter(data=>{
      return contains(data,text)
    })
    setData([...datas])
  }  

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.searchArea}>
          <Icon
            name="search"
            type="material-comunity"
            size={32}
            iconStyle={{ marginLeft: 5 }}
          />
          <Text>What are you looking for</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="fade" transparent={false}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.TextInput}>
              <Animatable.View animation={textInputFocus?"fadeInRight":"fadeInLeft"} duration={400}>
                <Icon
                  name={textInputFocus ? "arrow-back" : "search"}
                  onPress = {()=>{
                    setTextInputFocus(true)
                    setModalVisible(false)
                        }}
                  style={styles.icon2}
                  type="material"
                  iconStyle={{ marginRight: 5 }}
                />
              </Animatable.View>
              <TextInput 
                style={{width:"90%"}}
                placeholder=""
                autoFocus={true}
                ref={textInput}
                onFocus={()=>{setTextInputFocus(true)}}
                onBlur={()=>{setTextInputFocus(false)}}
                onChangeText={handleSearch}
              />
              <Animatable.View animation={!textInputFocus?"fadeInRight":"fadeInLeft"} duration={400}>
                <Icon 
                  name={textInputFocus ? "cancel" : null}
                  onPress={() => {
                    textInput.current.clear();
                    // handleSearch()
                  }}
                  style={{marginRight:10}}
                  type="material"
                  iconStyle={{ color:colors.grey3 }}
                />
              </Animatable.View>
            </View>
          </View>
          <FlatList 
            data={data}
            renderItem={({item})=>(
              <TouchableOpacity
                onPress={()=>{
                  // Keyboard.dismiss
                  navigation.navigate("searchResultScreen",{item:item.name})
                  setModalVisible(false)
                  setTextInputFocus(false)
                }}
              >
                <View style={styles.view2}>
                  <Text style={{fontSize:15,color:colors.grey2}}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  searchArea: {
    flexDirection: "row",
    backgroundColor: colors.grey5,
    marginTop: 10,
    height: 50,
    alignItems: "center",
    width: "94%",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 12,
  },
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchIcon: { fontSize: 24, padding: 5, color: colors.grey2 },
  view1: {
    height: 70,
    justifyContent: "center",

    paddingHorizontal: 10,
  },
  view2: {
    padding: 15,
  },
  icon2: { fontSize: 24, padding: 5, color: colors.grey2 },
  modal: {
    flex: 1
  },
});

export default SearchComponent;
