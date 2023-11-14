import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StackNavigator />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4BDAC",
  },
});
