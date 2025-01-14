import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { useAppNavigation } from "./component/navigations"; // Assuming you have a navigation setup

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigation = useAppNavigation();

  const handlePasswordReset = () => {
    if (email === "") {
      Alert.alert("Error", "Please enter your email address.");
    } else {
      Alert.alert("Success", "Password reset link sent to your email.");
      navigation.navigate("LogIn");
    }
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center px-6 py-4">
      <View className="w-full max-w-md space-y-4 gap-8">
        <Text className="text-2xl font-semibold text-gray-800 text-center">
          Forgot Password?
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#9ca3af"
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-800 shadow-sm "
        />

        <TouchableOpacity
          onPress={handlePasswordReset}
          className="w-full bg-blue-600 py-3 rounded-lg items-center"
        >
          <Text className="text-white text-lg font-semibold">
            Reset Password
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center w-full mt-4">
          <Text className="text-sm text-gray-700">
            Remembered your password?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
            <Text className="text-sm text-blue-600"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
