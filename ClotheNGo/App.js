import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { FitnessContext } from "./Context";

import SplashScreen from './SplashScreen';
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleScreenPress = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <SplashScreen onPress={handleScreenPress} />;
  }

  return (
    <View style={styles.container}>
      <StackNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4BDAC",
  },
});
