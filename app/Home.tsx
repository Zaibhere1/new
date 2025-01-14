import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Navbar from "./component/Navbar";

const Home = () => {
  const handlePress = () => {
    console.log("Button pressed");
  };
  return (
    <Navbar>
      <View className="justify-center">
        <View className="flex flex-col bg-gray-100 gap-2">
          <View className="bg-indigo-500 p-6">
            <Text className="text-3xl text-white font-semibold">
              Welcome to Home
            </Text>
            <Text className="text-white mt-2">
              This is a simple home page example using NativeWind
            </Text>
          </View>

          <View className="justify-center items-center mt-8">
            <Image
              className="w-64placeholder h-64 rounded-lg"
              source={{ uri: "https://via.placeholder.com/300" }}
            />
            <Text className="text-lg text-gray-800 mt-4">
              A Beautiful Image
            </Text>
          </View>

          <View className="p-6 pt-10">
            <TouchableOpacity
              className="bg-indigo-600 py-3 rounded-full"
              onPress={handlePress}
            >
              <Text className="text-white text-center text-lg font-medium">
                Press Me
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Navbar>
  );
};

export default Home;
