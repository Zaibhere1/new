import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppNavigation } from "./navigations";

export interface NavbarProps {
  showBackButton?: boolean;
  children: React.ReactNode;
  navigation?: NativeStackNavigationProp<any>;
}

const Navbar = ({ showBackButton = true, children }: NavbarProps) => {
  const navigation = useAppNavigation();
  return (
    <View className="flex-row h-full">
      <View className="w-1/5 bg-blue-600 p-1 pt-8 flex flex-col">
        {showBackButton && (
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="mb-2"
          >
            <Text className="text-white text-base ">Back</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="mb-2"
        >
          <Text className="text-white text-base py-3 ">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          className="mb-2"
        >
          <Text className="text-white text-base py-3">Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          className="mb-2"
        >
          <Text className="text-white text-base py-3">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("About")}
          className="mb-2"
        >
          <Text className="text-white text-base py-3">About</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 bg-gray-100 p-4">{children}</View>
    </View>
  );
};

export default Navbar;
