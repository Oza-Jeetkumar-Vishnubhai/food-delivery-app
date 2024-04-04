import { View, Text, ScrollView, FlatList, Image } from "native-base";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const BusinessConsoleScreen = () => {

  return (
    <View style={styles.container}>
    <Text>Business Console</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center"
  }
});

export default BusinessConsoleScreen;
