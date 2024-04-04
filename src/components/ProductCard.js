import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "native-base";
import { colors } from "../global/styles";

const ProductCard = ({ productName, price, image }) => (
  <View style={styles.view1}>
    <View style={styles.view2}>
      <View style={styles.view3}>
        <Text style={styles.text1}>{productName}</Text>
        <Text style={styles.text1}>ZAR{price}</Text>
      </View>
      <View style={styles.view4}>
        <Image source={{ uri: image }} alt="alt"/>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "white",
    elevation: 4,
    shadowOpacity: 0.4,
    shadowColor: "black",
    margin: 5,
    width: 210,
    padding: 10,
  },
  view2: {
    flexDirection: "row",
    // padding:0
  },
  view3: {
    width: 110,
    justifyContent: "space-between",
  },
  view4: {
    width: 75,
    height: 65,
  },
  text1: {
    color: colors.grey1,
    fontSize: 15,
  },
});

export default ProductCard;
