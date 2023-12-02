import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./StackNavigator";
import { UserProvider } from './data/UserContext';

export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <View style={styles.container}>
        <StackNavigator />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4BDAC",
  },
});
