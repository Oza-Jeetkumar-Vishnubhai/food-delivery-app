import React, { useState } from "react";
import { View, Text, ScrollView } from "native-base";
import { Dimensions, StyleSheet, TouchableOpacity, Modal } from "react-native";
import RestaurantHeader from "../components/RestaurantHeader";
import { colors, fonts } from "../global/styles";
import { menu, restaurantsData } from "../global/Data";
import { Icon } from "@rneui/themed";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import MenuScreen from "./RestaurantTabs/MenuScreen";


const SCREEN_WIDTH = Dimensions.get("window").width;

const RestaurantHomeScreen = ({ navigation, route }) => {
  const { id, restaurant } = route.params;
  const initialLayout = SCREEN_WIDTH;

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "MENU" },
    { key: "second", title: "INFO" },
    { key: "third", title: "REVIEWS" },
    { key: "fourth", title: "GALLERY" },
  ]);


  const [modalVisible, setModalVisible] = useState(false);

  const menuPressed = () => {
    // setModalVisible(true);
    navigation.navigate("menuProductScreen")
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.cardBackground }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  const renderScene = () => <View></View>;
 

  return (
    <View style={styles.container}>
      <ScrollView>
        <RestaurantHeader id={id} navigation={navigation} />
        {restaurantsData[id].discount && (
          <View style={styles.view1}>
            <Text style={styles.text1}>
              GET {restaurantsData[id].discount}% OFF ON FOOD TOTAL
            </Text>
          </View>
        )}
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Text style={styles.text2}>
              {restaurantsData[id].restaurantName}
            </Text>
            <Text style={styles.text3}>{restaurantsData[id].foodType}</Text>
            <View style={styles.view4}>
              <Icon
                name="star"
                type="material-community"
                size={15}
                color={colors.grey3}
              />
              <Text style={styles.text4}>
                {restaurantsData[id].averageReview}
              </Text>
              <Text style={styles.text5}>
                {restaurantsData[id].numberOfReview}
              </Text>
              <Icon
                name="map-marker"
                type="material-community"
                size={15}
                color={colors.grey3}
              />
              <Text style={styles.text5}>
                {restaurantsData[id].farAway}m away
              </Text>
            </View>
          </View>
          <View style={styles.view5}>
            <Text style={styles.text6}>Collect</Text>
            <View style={styles.view7}>
              <Text style={styles.text7}>
                {restaurantsData[id].collectTime}
              </Text>
              <Text style={styles.text8}>min</Text>
            </View>
          </View>
          <View style={styles.view8}>
            <Text style={styles.text6}>Delivery</Text>
            <View style={styles.view9}>
              <Text style={styles.text9}>
                {restaurantsData[id].deliveryTime}
              </Text>
              <Text style={styles.text11}>min</Text>
            </View>
          </View>
        </View>
        <View style={styles.view10}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>
        {index === 0 && <MenuScreen onPress={menuPressed} />}
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.view11}>
          <View style={styles.view12}>
            <Text style={styles.text13}>View Cart</Text>
            <View style={styles.view13}>
              <Text style={styles.text13}>0</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.view14}>
          <Icon
            name="arrow-left"
            type="material-community"
            color={colors.black}
            size={25}
            onPress={() => setModalVisible(false)}
          />
          <Text style={styles.text14}>Menu</Text>
        </View>
        {/* <View style={{flex:1}}>
          <TabView
            navigationState={{ index2, routes2 }}
            renderScene={renderScene}
            onIndexChange={setIndex2}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar2}
            tabBarPosition="top"
          />
        </View> */}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex:1 },

  view1: {
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  text1: { color: "green", fontSize: 14, fontWeight: "bold" },

  view2: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },

  view3: { flex: 8 },

  text2: { fontSize: 20, fontWeight: "bold", color: colors.grey1 },

  text3: { fontSize: 15, color: colors.grey3 },

  view4: { flexDirection: "row", alignItems: "center", marginTop: 5 },

  text4: {
    fontFamily: fonts.android.bold,
    fontSize: 13,
    color: colors.grey3,
    marginLeft: 2,
  },

  text5: {
    fontFamily: fonts.android.bold,
    fontSize: 13,
    color: colors.grey3,
    marginLeft: 2,
    marginRight: 5,
  },
  text6: {
    fontFamily: fonts.android.bold,
    fontSize: 13,
    color: colors.grey3,
    marginLeft: 0,
  },

  view5: { flex: 3, alignItems: "center" },

  text6: { fontSize: 15, fontWeight: "bold", color: colors.grey1 },

  view7: {
    width: 40,
    height: 40,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-around",
  },

  text7: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.black,
    marginTop: 5,
  },

  text8: { fontSize: 13, color: colors.black, marginBottom: 5 },

  view8: { flex: 3, alignItems: "center" },

  text9: { fontSize: 15, fontWeight: "bold", color: colors.cardBackground },

  view9: {
    width: 40,
    height: 40,
    backgroundColor: colors.buttons,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-around",
  },

  text10: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.cardBackground,
    marginTop: 5,
  },

  text11: { fontSize: 13, color: colors.cardBackground, marginBottom: 5 },

  view10: { elevation: 10, backgroundColor: colors.pagebackground },

  view11: {
    backgroundColor: colors.buttons,
    height: 50,
    alignContent: "center",
    marginBottom: 0,
    justifyContent: "center",
  },

  view12: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text12: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.cardBackground,
  },

  view13: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: colors.cardBackground,
    borderRadius: 6,
    paddingBottom: 2,
  },

  text13: {
    paddingHorizontal: 3,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.cardBackground,
  },

  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: "space-between",
    alignItems: "center",
  },

  tabContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  tabLabel: { fontWeight: "bold", color: colors.cardBackground },

  tabStyle: { width: SCREEN_WIDTH / 4, maxHeight: 45 },

  view14: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.buttons,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },

  text14: {
    fontWeight: "bold",
    marginLeft: 40,
    color: colors.black,
    fontSize: 18,
  },

  view15: { marginTop: 5, paddingBottom: 20 },
});

export default RestaurantHomeScreen;
