import React, { useState } from "react";
import { View, Text, Switch, ScrollView, TouchableOpacity } from "react-native";
import Navbar from "./component/Navbar";

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [gpsTrackingEnabled, setGpsTrackingEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled((prev) => !prev);
  };
  const toggleGpsTracking = () => setGpsTrackingEnabled((prev) => !prev);
  const toggleDarkMode = () => setDarkModeEnabled((prev) => !prev);

  return (
    <Navbar>
      <ScrollView className="flex-1 bg-gray-100 p-4">
        {/* Header */}
        <View className="bg-blue-600 p-6 rounded-lg">
          <Text className="text-white text-2xl font-bold text-center">
            Settings
          </Text>
        </View>
        {/* Settings Options */}
        <View className="mt-6">
          {/* Notifications */}
          <View className="flex-row items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4">
            <Text className="text-lg text-gray-800 font-medium">
              Enable Notifications
            </Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
              trackColor={{
                true: notificationsEnabled ? "#4CAF50" : "#F4F3F4 ",
              }}
              thumbColor={notificationsEnabled ? "#FFFFFF" : "#FFFFFF"}
            />
          </View>

          {/* GPS Tracking */}
          <View className="flex-row items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4">
            <Text className="text-lg text-gray-800 font-medium">
              Enable GPS Tracking
            </Text>
            <Switch
              value={gpsTrackingEnabled}
              onValueChange={toggleGpsTracking}
              trackColor={{ false: "#767577", true: "#4CAF50" }}
              thumbColor={gpsTrackingEnabled ? "#FFFFFF" : "#F4F3F4"}
            />
          </View>

          {/* Dark Mode */}
          <View className="flex-row items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-4">
            <Text className="text-lg text-gray-800 font-medium">
              Enable Dark Mode
            </Text>
            <Switch
              value={darkModeEnabled}
              onValueChange={toggleDarkMode}
              trackColor={{ false: "#767577", true: "#4CAF50" }}
              thumbColor={darkModeEnabled ? "#FFFFFF" : "#F4F3F4"}
            />
          </View>
        </View>
        {/* Save Settings */}
        <TouchableOpacity className="bg-blue-600 p-4 rounded-lg mt-6">
          <Text className="text-white text-center text-lg font-bold">
            Save Changes
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </Navbar>
  );
};

export default Settings;
