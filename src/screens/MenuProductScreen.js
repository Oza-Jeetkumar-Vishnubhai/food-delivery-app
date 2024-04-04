import { View, Text } from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { colors } from "../global/styles";
import { menu, restaurantsData } from "../global/Data";
import {
  Route1,
  Route2,
  Route3,
  Route4,
  Route5,
  Route6,
  Route7,
  Route8,
} from "./MenuTabs";
import { Icon } from "@rneui/themed";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const SCREEN_WIDTH = Dimensions.get("window").width;
const initialLayout = SCREEN_WIDTH;


const MenuProductScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(menu);
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
  const renderScene = ({ route,navigation }) => {
    console.log(route)
    switch (route.key) {
      case 1:
        return <Route1 name={navigation} />;
      case 2:
        return <Route2 name={navigation} />;
      case 3:
        return <Route3 name={navigation} />;
      case 4:
        return <Route4 name={navigation} />;
      case 5:
        return <Route5 name={navigation} />;
      case 6:
        return <Route6 name={navigation} />;
      case 7:
        return <Route7 name={navigation} />;
      case 8:
        return <Route8 name={navigation} />;
      default:
        return null;
    }
  };
  return (
    <View style={{flex:1}}>
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
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
          tabBarPosition="top"
        />
        {/* <Text>jbsckbs</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: "space-between",
    // alignItems: "center",
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

export default MenuProductScreen;
