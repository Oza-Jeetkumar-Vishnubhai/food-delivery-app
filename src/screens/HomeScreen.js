import { View, Text, ScrollView, FlatList, Image } from "native-base";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import React, { useEffect, useState } from "react";
import { colors } from "../global/styles";
import { Icon } from "@rneui/themed";
import { filterData, restaurantsData } from "../global/Data";
import FoodCard from "../components/FoodCard";
import CountDown from "react-native-countdown-component";

const SCREEN_WIDTH = Dimensions.get("window").width;

const HomeScreen = ({navigation}) => {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");

  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{ backgroundColor: colors.cardBackground, paddingBottom: 5 }}
        >
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}
              >
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // setDelivery(false);
                navigation.navigate("RestaurantMapScreen")
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}
              >
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.filterView}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: colors.grey5,
                borderRadius: 15,
                paddingVertical: 3,
              }}
            >
              <View style={styles.addressView}>
                <Icon
                  type="material-community"
                  name="map-marker"
                  color={colors.grey1}
                  size={26}
                />
                <Text style={{ marginLeft: 5 }}>22 Bessie street</Text>
              </View>
              <View style={styles.clockView}>
                <Icon
                  type="material-community"
                  name="clock-time-four"
                  color={colors.grey1}
                  size={26}
                />
                <Text style={{ marginLeft: 5 }}>Now</Text>
              </View>
            </View>
            <View>
              <Icon type="material-community" name="tune" />
            </View>
          </View>

          <View style={styles.headertextView}>
            <Text style={styles.headerText}>Categories</Text>
          </View>

          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={filterData}
              keyExtractor={(item) => item.id}
              extraData={indexCheck} //no need
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    setIndexCheck(item.id);
                  }}
                >
                  <View
                    style={
                      indexCheck === item.id
                        ? { ...styles.smallCardSelected }
                        : { ...styles.smallCard }
                    }
                  >
                    <Image
                      style={{ height: 60, width: 60, borderRadius: 30 }}
                      source={item.image}
                      alt="items"
                    />
                    <Text
                      style={
                        indexCheck === item.id
                          ? { color: colors.cardBackground }
                          : { color: colors.grey2 }
                      }
                    >
                      {item.name}
                    </Text>
                  </View>
                </Pressable>
              )}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                marginTop: 10,
                marginRight: 5,
                marginLeft: 15,
                fontSize: 16,
              }}
            >
              Options Changing In
            </Text>
            <CountDown
              until={3600}
              size={14}
              digitStyle={{ backgroundColor: colors.lightgreen }}
              digitTxtStyle={{ color: colors.cardBackground }}
              timeToShow={["M", "S"]}
              timeLabels={{ m: "Min", s: "Sec" }}
            />
          </View>

          <View style={styles.headertextView}>
            <Text style={styles.headerText}>Free delivery now</Text>
          </View>

          <View>
            <FlatList
              style={{ marginTop: 10, marginBottom: 10 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={restaurantsData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={{ marginRight: 5 }}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.8}
                    images={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              )}
            />
          </View>

          <View style={styles.headertextView}>
            <Text style={styles.headerText}>Promotions Available</Text>
          </View>

          <View>
            <FlatList
              style={{ marginTop: 10, marginBottom: 10 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={restaurantsData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={{ marginRight: 5 }}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.8}
                    images={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              )}
            />
          </View>

          <View style={styles.headertextView}>
            <Text style={styles.headerText}>Restraurants in your area</Text>
          </View>

          <View style={{ width: SCREEN_WIDTH, paddingTop: 10}}>
            {delivery && restaurantsData.map((item) => (
              <View key={item.id} style={{ paddingBottom: 20 }}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.95}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      { delivery &&
        <View style={styles.mapButton}>
        <TouchableOpacity onPress={()=>{navigation.navigate("RestaurantMapScreen")}}>
              <Icon name="place" type="material" color={colors.buttons}s/>
              <Text style={{color:colors.grey2}}>Map</Text>
        </TouchableOpacity>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 10,
  },
  clockView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: colors.cardBackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  addressView: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  headerText: {
    fontSize: 22,
    color: colors.grey2,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  headertextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  mapButton:{
    backgroundColor:"red",
    borderRadius:30,
    width:60,
    height:60,
    elevation:10,
    position:"absolute",
    right:15,
    bottom:10,
    justifyContent:"center",
    alignItems:"center"
  }
});

export default HomeScreen;
