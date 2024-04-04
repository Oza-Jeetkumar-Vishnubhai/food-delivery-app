import React from "react";
import {
  createStackNavigator,
  //   TransitionPreset,
} from "@react-navigation/stack";
import SigninWelcomeScreen from "../screens/authScreens/SigninWelcomeScreen";
import SigninScreen from "../screens/authScreens/SigninScreen";
import RestaurantMapScreen from "../screens/RestaurantMapScreen";
import DrawerNavigator from "./DrawerNavigator";
import ClientTabs from "./ClientTabs";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="SignInwelcomeScreen"
          component={SigninWelcomeScreen}
          options={{
            headerShown: false,
            // ...TransitionPresets.RevealFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SigninScreen}
          options={{
            headerShown: false,
            // ...TransitionPresets.RevealFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{
            headerShown: false,
            // ...TransitionPresets.RevealFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="RestaurantMapScreen"
          component={RestaurantMapScreen}
          options={{
            headerShown: false,
            // ...TransitionPresets.RevealFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
  );
};

export default AuthStack;
