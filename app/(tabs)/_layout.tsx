import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import "@/global.css";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerTitleAlign: "center",
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarActiveBackgroundColor: "trasnparent",
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },

          default: {},
        }),
      }}
    >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home-outline" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color="white" />
            ),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "white",
        }}
      />
      <Tabs.Screen
        name="SignUp"
        options={{
          title: "SignUp",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "people-circle" : "people-circle-outline"}
              size={24}
              color={focused ? "black" : "white"}
            />
          ),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "white",
        }}
      /> */}
    </Tabs>
  );
}
