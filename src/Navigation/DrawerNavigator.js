import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "@rneui/themed";
import { colors } from "../global/styles";
import ClientTabs from "./ClientTabs";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import { View } from "native-base";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />}>
      {/* stack navigator */}
      <Drawer.Screen
        name="ClientTabs"
        component={ClientTabs}
        options={{
          title: "Client",
          headerShown:false,
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home"
              type="material-community"
              color={focused ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />
      
      <Drawer.Screen
        name="BusinessConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          title: "Business Console",
          headerShown:false,
          drawerIcon: ({focused, size}) => (
            <Icon
              name="business"
              type="material"
              color={focused ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
