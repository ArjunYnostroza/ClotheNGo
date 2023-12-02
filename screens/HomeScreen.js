import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BrandCards from '../components/BrandCards';

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const { username } = route.params || { username: null };

  const userBrands = {
    Joseeeeee: ["Adidas", "Supreme", "Golf Wang"],
    Steven: ["Nike"],
    Bryan: ["Adidas", "North Face"],
    Arjun: ["Nike", "Adidas", "Supreme"],
    Admin: ["Nike", "Adidas", "Supreme", "Golf Wang", "North Face"],

    // Add more mappings as needed
  };

  const brandsForUser = username ? userBrands[username] || [] : [];

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require('../logo.png')}
            style={styles.logo}
          />
        </View>

        <BrandCards brands={brandsForUser} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#C4BDAC",
  },
  scrollView: {
    backgroundColor: "#C4BDAC",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  logoutButton: {
    // Additional styling if needed
  },
  logoutText: {
    color: 'white',
    // Additional styling if needed
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 100,
  },
  // ... other styles
});
