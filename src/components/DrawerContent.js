import React, { useState, useEffect, useContext } from "react";
import { View, Text, Pressable, Alert, Switch } from "native-base";
import { Linking, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar, Button, Icon } from "@rneui/base";
import { colors } from "../global/styles";

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{ backgroundColor: colors.buttons }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 5,
              paddingLeft: 10,
            }}
          >
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: colors.cardBackground,
                  fontSize: 18,
                }}
              >
                Jeet Oza
              </Text>
              <Text style={{ color: colors.cardBackground, fontSize: 14 }}>
                onlyjet31@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              marginHorizontal: 20,
              justifyContent: "space-between",
              paddingBottom: 5,
            }}
          >
            <View
              style={{
                marginLeft: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.cardBackground,
                  fontWeight: "bold",
                }}
              >
                1
              </Text>
              <Text style={{ fontSize: 14, color: colors.cardBackground }}>
                My Favourite
              </Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.cardBackground,
                  fontWeight: "bold",
                }}
              >
                0
              </Text>
              <Text style={{ fontSize: 14, color: colors.cardBackground }}>
                My Cart
              </Text>
            </View>
          </View>
        </View>

        {/* Default drawer items */}
        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({ color, size }) => (
            <Icon
              name="credit-card-outline"
              type="material-community"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Promotions"
          icon={({ color, size }) => (
            <Icon
              name="tag-heart"
              type="material-community"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Settings"
          icon={({ color, size }) => (
            <Icon
              name="cog-outline"
              type="material-community"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Help"
          icon={({ color, size }) => (
            <Icon
              name="lifebuoy"
              type="material-community"
              color={color}
              size={size}
            />
          )}
        />

        <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }}>
          <Text style={styles.preferences}>Preferences</Text>
          <View style={styles.switchText}>
            <Text style={styles.darkthemeText}>Dark Theme</Text>
            <View style={{ paddingRight: 10 }}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor="#f4f3f4"
              />
            </View>
          </View>
        </View>

        </DrawerContentScrollView>
        <DrawerItem
          style={{}}
          label="Sign Out"
          icon={({ color, size }) => (
            <Icon
              name="logout-variant"
              type="material-community"
              color={color}
              size={size}
            />
          )}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avatar: {
    borderWidth: 4,
    borderColor: colors.pagebackground,
  },

  preferences: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },

  switchText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkthemeText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: "bold",
  },
});

export default DrawerContent;
