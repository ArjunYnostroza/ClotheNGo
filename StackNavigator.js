import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/Product";
import SplashScreen from "./screens/SplashScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Product" component={WorkoutScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
