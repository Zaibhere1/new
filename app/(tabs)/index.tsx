import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { useAppNavigation } from "../component/navigations";

const Index = () => {
  const navigation = useAppNavigation();

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <ImageBackground
        source={require("@/assets/images/new.png")}
        className="w-full h-full flex-1 justify-center"
      >
        <Text className="text-black text-2xl font-bold bg-gray-200/50 text-center">
          Welcome to the Zattrack
        </Text>
        <Pressable
          onPress={() => navigation.navigate("LogIn")}
          className="bg-gray-200/50 p-4 rounded-md m-4 w-1/2 self-center"
        >
          <Text className="text-black text-xl font-bold bg-gray-200/50 text-center underline underline-offset-8 ">
            login
          </Text>
        </Pressable>
        r
        <Pressable
          onPress={() => navigation.navigate("SignUp")}
          className="bg-gray-200/50 p-4 rounded-md m-4 w-1/2 self-center"
        >
          <Text className="text-black text-xl font-bold bg-gray-200/50 text-center underline underline-offset-8 ">
            Signup
          </Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Index;
