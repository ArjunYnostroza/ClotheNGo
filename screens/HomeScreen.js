import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import BrandCards from "../components/BrandCards";

const HomeScreen = () => {

  return (
    <ScrollView style={{ marginTop: 0, backgroundColor: "#C4BDAC" }}>
      <View
        style={{
          backgroundColor: "#C4BDAC",
          padding: 10,
          width: "100%",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
        </Text>
        
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require('../logo.png')} // Change this to the path of your image
            style={{ width: 300, height: 100 }} // Change these values as needed
          />
        </View>
        <BrandCards />
      
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
