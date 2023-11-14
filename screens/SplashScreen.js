import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.container}>
      <Image source={require('../logo.png')} style={{ width: 300, height: 100 }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C4BDAC',
    },
    text: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

export default SplashScreen;
