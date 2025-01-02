import React from "react";
import { Image, Text, View } from "react-native";
import Navbar from "./component/Navbar";

const Profile: React.FC = () => {
  return (
    <Navbar>
      <View className="flex flex-col  items-center">
        <Image
          className="h-1/2 w-1/2 rounded-full"
          source={require("@/assets/images/avatar.png")}
        />
        <Text className="text-black pt-5"> Shahzaib Ashraf</Text>
      </View>
    </Navbar>
  );
};

export default Profile;
