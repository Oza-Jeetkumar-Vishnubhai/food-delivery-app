import React from "react";
import { View, Text, FlatList } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import MenuCard from "../components/MenuCard";
import { productData, menuDetailedData } from "../global/Data";

export const Route1 = ({ name }) => {
  return (
    <View styke={{ flex: 1 }}>
      <View style={styles.view2}>
        <FlatList
          style={{ backgroundColor: "white" }}
          data={menuDetailedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <MenuCard
                  productName={item.meal}
                  price={item.price}
                  productDetails={item.details}
                  image={"https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"}
                />
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
        <MenuCard />
      </View>
    </View>
  );
};

export const Route2 = () => {
  <View style={styles.scene}></View>;
};
export const Route3 = () => {
  <View style={styles.scene}></View>;
};
export const Route4 = () => {
  <View style={styles.scene}></View>;
};
export const Route5 = () => {
  <View style={styles.scene}></View>;
};
export const Route6 = () => {
  <View style={styles.scene}></View>;
};
export const Route7 = () => {
  <View style={styles.scene}></View>;
};
export const Route8 = () => {
  <View style={styles.scene}></View>;
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: "#673ab7",
  },

  view2: { marginTop: 5, paddingBottom: 20 },

  scene2: { backgroundColor: "#673ab7" },
});
