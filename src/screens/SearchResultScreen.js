import React from "react";
import { View, Text, FlatList } from "native-base";
import { StyleSheet } from "react-native";
import SearchResultCard from "../components/SearchResultCard";
import { restaurantsData } from "../global/Data";
import { Dimensions } from "react-native";
import { colors } from "../global/styles";
import FoodCard from "../components/FoodCard";

const SCREEN_WIDTH = Dimensions.get("screen").width;

const SearchResultScreen = ({ navigation,route }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item,index }) => (
          <SearchResultCard
            screenWidth={SCREEN_WIDTH}
            images="https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            averageReview={item.averageReview}
            numberOfReview={item.numberOfReview}
            restaurantName={item.restaurantName}
            farAway={item.farAway}
            businessAddress={item.businessAddress}
            productData={item.productData}
            OnPressRestaurantCard={()=>{navigation.navigate("restaurantHomeScreen",{id:index,restaurant:item.restaurantName})}}
          />
        )}
        ListHeaderComponent={
          <View>
            <Text>{restaurantsData.length} Results for </Text>
          </View>
        }
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  listHeader: {
    color: colors.grey1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: "bold",
  },
});

export default SearchResultScreen;
