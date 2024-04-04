import React from "react";
import { View, Text, FlatList } from "native-base";
import { ImageBackground, StyleSheet, Dimensions } from "react-native";
import SearchComponent from "../components/SearchComponent";
import { filterData2 } from "../global/Data";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { colors } from "../global/styles";
const SCREEN_WIDTH = Dimensions.get("window").width;

const SearchScreen = ({navigation}) => {
  return (
    <>
      <View style={{}}>
        <SearchComponent />
        <View>
          <FlatList
            style={{}}
            data={filterData2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={()=>{navigation.navigate("searchResultScreen",{item:item.name})}}
              >
                {/* {console.log(item)} */}
                <View style={styles.imageView}>
                  <ImageBackground
                    source={{
                      uri: "https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
                    }}
                    style={styles.image}
                  >
                    <View style={styles.textView}>
                      <Text style={{ color: colors.cardBackground }}>
                        {item.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <Text style={styles.listHeader}>Top Categories</Text>
            }
            ListFooterComponent={<Footer />}
          />
        </View>
      </View>
    </>
  );
};

const Footer = () => {
  return (
    <View style={{ marginTop: 10, marginBottom: 30 }}>
      <View>
        <FlatList
          style={{}}
          data={filterData2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              // onPress={navigation.navigate("searchResultScreen")}
            >
              {/* {console.log(item)} */}
              <View style={styles.imageView}>
                <ImageBackground
                  source={{
                    uri: "https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
                  }}
                  style={styles.image}
                >
                  <View style={styles.textView}>
                    <Text style={{ color: colors.cardBackground }}>
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <Text style={styles.listHeader}>More Categories</Text>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
    backgroundColor: "red",
  },

  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },

  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },

  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52,0.3)",
  },
});

export default SearchScreen;
