import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAppNavigation } from "./component/navigations";
import { Ionicons } from "@expo/vector-icons";

const LogIn = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useAppNavigation();
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };
  const handleLogIn = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center px-4">
      <View className="w-full space-y-4 gap-5">
        <TextInput
          placeholder="Email"
          placeholderTextColor="#9ca3af"
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm"
        />
        <View className="relative">
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#9ca3af"
            secureTextEntry={!showPassword}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-2"
          >
            {showPassword ? (
              <Ionicons name="eye" size={24} color="black" />
            ) : (
              <Ionicons name="eye-off" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleLogIn}
          className="w-full bg-blue-600 py-3 rounded-lg items-center"
        >
          <Text className="text-white text-lg font-semibold">Login</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between w-full mt-4">
        <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
          <Text className="text-sm text-blue-600">Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text className="text-sm text-blue-600">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogIn;
