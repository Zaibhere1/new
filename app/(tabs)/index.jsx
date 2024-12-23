import { Link, Stack } from "expo-router";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      {/* <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
        }}
      /> */}
      <ImageBackground
        style={styles.Image}
        source={require("@/assets/images/new.png")}
      >
        <Text style={styles.text}>Welcome to the Home Page</Text>
        <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttontext}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: "100%",
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "rgba(243, 230, 230, 0.5)",
    textAlign: "center",
  },
  buttontext: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "rgba(243, 230, 230, 0.5)",
    textAlign: "center",
    textDecorationLine: "underline",
  },

  button: {
    backgroundColor: "rgba(243, 230, 230, 0.5)",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: "50%",
    alignSelf: "center",
  },
});

export default Index;
