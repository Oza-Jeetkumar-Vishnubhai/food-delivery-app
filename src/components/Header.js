import React from "react";
import {useNavigation} from "@react-navigation/native"
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters } from "../global/styles";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ title,type }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={{paddingLeft:20}}>
        <AntDesign
          name={type}
          size={28}
          color={colors.headerText}
          onPress={() => {navigation.navigate("SignInwelcomeScreen")}}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    alignItems:"center"
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 30,
  },
});
