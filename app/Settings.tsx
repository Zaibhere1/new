import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";
import Navbar from "./component/Navbar";

const Settings = () => {
  return (
    <Navbar>
      <View className="text-white">
        <ThemedText>this my setting page</ThemedText>
      </View>
    </Navbar>
  );
};

export default Settings;
