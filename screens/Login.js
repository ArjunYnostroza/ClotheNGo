import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Accounts = [
      { username: "User1", password: "Password1" },
      { username: "User2", password: "Password2" },
      // Add more accounts as needed
  ];

  const handleLogin = () => {
      const account = Accounts.find(acc => acc.username === username && acc.password === password);

      if (account) {
          navigation.navigate('Home');
      } else {
          Alert.alert("Login Failed", "Invalid username or password");
      }
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
          onChangeText={setUsername}
          value={username}
        /> 

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity 
            style={styles.buttonStyle} 
            onPress={handleLogin}
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
