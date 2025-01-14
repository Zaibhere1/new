import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Navbar from "./component/Navbar";

const AboutUs = () => {
  return (
    <Navbar>
      <ScrollView className="flex-1 bg-gray-100 p-4">
        <View className="bg-blue-600 p-6 rounded-lg">
          <Text className="text-white text-2xl font-bold text-center">
            About Us
          </Text>
        </View>

        <View className="mt-4">
          <Image
            source={{ uri: "https://example.com/car-tracking-image.jpg" }}
            className="w-full h-48 rounded-lg"
          />

          <Text className="text-lg text-gray-800 font-semibold mt-4">
            Who We Are
          </Text>
          <Text className="text-gray-600 mt-2 leading-relaxed">
            At <Text className="font-bold"> Zattrack</Text>, we specialize in
            providing cutting-edge car tracking solutions for individuals and
            businesses. Our mission is to ensure the safety, efficiency, and
            control of your vehicles through real-time monitoring and advanced
            analytics.
          </Text>

          <Text className="text-lg text-gray-800 font-semibold mt-6">
            Our Vision
          </Text>
          <Text className="text-gray-600 mt-2 leading-relaxed">
            To revolutionize the automotive industry by offering reliable
            tracking systems that empower users to make data-driven decisions.
          </Text>

          <Text className="text-lg text-gray-800 font-semibold mt-6">
            Why Choose Us?
          </Text>
          <Text className="text-gray-600 mt-2 leading-relaxed">
            - Real-time GPS tracking for improved fleet management.
            {"\n"}- Advanced security features for vehicle safety.
            {"\n"}- 24/7 customer support to assist you anytime.
          </Text>
        </View>

        {/* Footer Section */}
        <View className="mt-8 bg-blue-600 p-4 rounded-lg">
          <Text className="text-white text-center">
            Contact us at{" "}
            <Text className="font-bold">support@trackpro.com</Text>
          </Text>
        </View>
      </ScrollView>
    </Navbar>
  );
};

export default AboutUs;
