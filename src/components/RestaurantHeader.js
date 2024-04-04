import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Animated,
} from "react-native";
import { restaurantsData } from "../global/Data";
import { colors } from "../global/styles";
import { Icon } from "@rneui/themed";

export default function RestaurantHeader({ id, navigation }) {
  const index2 = 10;
  const currentValue = new Animated.Value(1);
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);

  const likeHandler = () => {
    if (liked == false) setVisible(true);
    setLiked(!liked);
    setCounter(index2);
  };

  useEffect(()=>{
    if(liked==true)
    {
        Animated.spring(currentValue,{
            toValue:2,
            friction:1,
            useNativeDriver:true
        }).start(()=>{
                Animated.timing(currentValue,{toValue:0,duration:100,useNativeDriver:true}).start(()=>{setVisible(false)});
            })
    }
  },[liked])

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        // source ={{uri:restaurantsData[id].images}}
        source={{
          uri: "https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        }}
      >
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Icon
              name="arrow-left"
              type="material-community"
              color={colors.black}
              size={25}
              onPress={() => navigation.goBack()}
              iconStyle={{ padding: 5 }}
            />
          </View>
          <View style={styles.view2}>
            <Icon
              name={liked && index2 == counter ? "favorite" : "favorite-border"}
              type="material"
              color="red"
              size={25}
              iconStyle={{ padding: 5 }}
              onPress={likeHandler}
            />
          </View>
        </View>
        <View style={styles.view4}>
          {visible && index2 == counter && (
            <Animated.View style={{transform:[{scale:currentValue}],opacity:currentValue}}>
              <Icon name="favorite" size={40} color="red" type="material" />
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 150 },

  view1: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },

  view2: {
    margin: 15,
    width: 40,
    backgroundColor: colors.cardBackground,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  view3: {
    marginTop: 0,
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.cardBackground,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  view4: { marginTop: 0, alignItems: "center", justifyContent: "center" },
});
