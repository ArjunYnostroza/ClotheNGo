import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();
  
    const handleLogin = () => {
      // For now, directly navigating to HomeScreen without authentication check
      navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
          {/* Logo Placeholder */}
          <Image 
            source={require('../logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#888"
          /> 

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry={true}
          />

          <TouchableOpacity 
              style={styles.buttonStyle} 
              onPress={handleLogin}  // use the handleLogin function here
          >
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4BDAC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  // Add styles for buttonStyle and buttonText if needed
});
