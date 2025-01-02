import React from "react";
import { Text, View } from "react-native";
import Navbar from "./component/Navbar";

const About = () => {
  return (
    <Navbar>
      <View className="text-black">
        <Text> This is About Page </Text>
      </View>
    </Navbar>
  );
};

export default About;
