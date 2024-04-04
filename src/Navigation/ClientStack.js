import React,{useLayoutEffect} from 'react'
import { View,Text } from 'native-base'
import { createStackNavigator } from '@react-navigation/stack'
import SearchResultScreen from '../screens/SearchResultScreen';
import SearchScreen from '../screens/SearchScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuProductScreen from '../screens/MenuProductScreen';

const Client = createStackNavigator();

const ClientStack = ({navigation,route}) => {

  useLayoutEffect(()=>{
    const focusedRoute = getFocusedRouteNameFromRoute(route);
    console.log(focusedRoute)
    if(focusedRoute == "restaurantHomeScreen" || "menuProductScreen")
    {
      navigation.setOptions({tabBarStyle:{display:"none"}})
    }
    else
    {
      navigation.setOptions({tabBarStyle:{}})
    }
  })

  return (

    <Client.Navigator>
        <Client.Screen name="searchScreen1" component={SearchScreen} options={{headerShown:false}}/>
        <Client.Screen name="searchResultScreen" component={SearchResultScreen} options={{headerShown:false}}/>
        <Client.Screen name="restaurantHomeScreen" component={RestaurantHomeScreen} options={{headerShown:false}}/>
        <Client.Screen name="menuProductScreen" component={MenuProductScreen} options={{headerShown:false}}/>
    </Client.Navigator>

  )
}

export default ClientStack
