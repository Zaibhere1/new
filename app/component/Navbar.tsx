import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface NavbarProps {
  showBackButton?: boolean;
  children: React.ReactNode;
  navigation?: NativeStackNavigationProp<any>;
}
type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  About: undefined;
};

const Navbar = ({ showBackButton = true, children }: NavbarProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="flex-row h-full">
      <View className="w-1/5 bg-purple-600 p-1 flex flex-col">
        {showBackButton && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="mb-2"
          >
            <Text className="text-white text-base ">Back</Text>
          </TouchableOpacity>
        )}

        <Text className="text-white text-xl font-bold mb-2"></Text>

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
