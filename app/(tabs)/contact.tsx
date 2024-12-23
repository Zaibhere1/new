import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Track Your World, Simplified</Text>
        <Text style={styles.heroSubtitle}>
          Your all-in-one tracking solution.
        </Text>
        <Image
          source={require("@/assets/images/new.png")}
          style={styles.heroImage}
        />
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Feature Highlights */}
      <View style={styles.featureSection}>
        {/* ... Feature card components ... */}
      </View>

      {/* Testimonials */}
      <View style={styles.testimonialSection}>
        {/* ... Testimonial card components ... */}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2023 ZatTrack. All rights reserved.
        </Text>
      </View>
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
  heroSection: {
    alignItems: "center",
    padding: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  heroImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  getStartedButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  featuresection: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  testimonialSection: {
    alignItems: "center",
    padding: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  footerText: {
    fontSize: 12,
    color: "#888",
  },
  featureSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 20,
  },
});

export default HomePage;
