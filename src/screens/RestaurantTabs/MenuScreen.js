import React from "react";
import { View, Text } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { menuData, specialData } from "../../global/Data";
import { Icon } from "@rneui/themed";
import { colors } from "../../global/styles";

const MenuScreen = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        {specialData.map((item) => (
          <View key={item.key} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.view2}>
                    <Icon 
                        name="star"
                        type="material-community"
                        size={20}
                        color="gold"
                    />
                    <Text style={styles.text1}>{item.title}</Text>
                </View>

            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View>
        {menuData.map((item) => (
          <View key={item.key} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.view2}>
                    <Text style={styles.text1}>{item.title}</Text>
                </View>

            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({

    container:{
        flex:1,
        marginTop:20
    },
      view1:{ paddingHorizontal:10, },
    
      view2:{flexDirection:"row",
            alignItems:"center",
            borderBottomWidth:1,
            padding:10,
            borderBottomColor:colors.grey5
           },
        
        text1:{
            color:colors.grey3,
            fontSize:18,
            fontWeight:"bold"
        }
    
    
    })
    

export default MenuScreen;
