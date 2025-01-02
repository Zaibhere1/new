import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

type RootStackParamList = {
  SignUp: undefined;
  Home: undefined;
};
const SignUpView = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleSignUp = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <View className="mb-6 flex flex-row items-center bg-white rounded-full p-4">
        <Image
          className="w-8 h-8"
          source={{
            uri: "https://img.icons8.com/ios-glyphs/512/user-male-circle.png",
          }}
        />
        <TextInput
          className="flex-1 ml-4"
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View className="mb-6 flex flex-row items-center bg-white rounded-full p-4 px-6">
        <Image
          className="w-8 h-8"
          source={{
            uri: "https://img.icons8.com/ios-filled/512/circled-envelope.png",
          }}
        />
        <TextInput
          className="flex-1 ml-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View className="mb-6 flex flex-row items-center bg-white rounded-full p-4">
        <Image
          className="w-8 h-8"
          source={{ uri: "https://img.icons8.com/ios-glyphs/512/key.png" }}
        />
        <TextInput
          className="flex-1 ml-4"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        className="bg-pink-500 rounded-full py-4 px-8 mb-6"
        onPress={handleSignUp}
      >
        <Text className="text-white text-center">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpView;
