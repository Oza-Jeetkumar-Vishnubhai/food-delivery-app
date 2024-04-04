import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MyAcountScreen from "../screens/MyAcountScreen";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import {Icon} from "@rneui/themed"
import { colors } from "../global/styles";
import ClientStack from "./ClientStack";

const Tab = createBottomTabNavigator();

const ClientTabs = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:colors.buttons
      }}>
        <Tab.Screen name="homeScreen" component={HomeScreen} options={{
            tabBarLabel : "Home",
            headerShown:false,
            tabBarIcon : ({color,size})=>(
                <Icon name='home' type="material" color={color} size={size}/>
            )
        }}
        />
        <Tab.Screen name="searchScreen" component={ClientStack} options={{
            tabBarLabel : "Search",
            headerShown:false,
            tabBarIcon : ({color,size})=>(
                <Icon name='search' type="material" color={color} size={size}/>
            )
        }}/>
        <Tab.Screen name="myOrderScreen" component={MyOrdersScreen} options={{
            tabBarLabel : "My Orders",
            headerShown:false,
            tabBarIcon : ({color,size})=>(
                <Icon name='view-list' type="material" color={color} size={size}/>
            )
        }}/>
        <Tab.Screen name="myAcountScreen" component={MyAcountScreen} options={{
            tabBarLabel : "My Acount",
            headerShown:false,
            tabBarIcon : ({color,size})=>(
                <Icon name='person' type="material" color={color} size={size}/>
            )
        }}/>
      </Tab.Navigator>
    </>
  );
};

export default ClientTabs;
