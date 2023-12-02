import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React ,{useContext} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
const Product = () => {
  const route = useRoute();
//   console.log(route.params);
  const navigation = useNavigation();
  const clothing = Array.isArray(route.params?.clothing) ? route.params.clothing : [];
  
  return (
    <>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#36454f", marginTop: 50 }}
      >
        <Image
          style={{ width: "100%", height: 170 }}
          source={{ uri: route.params.image }}
        />

        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 20, left: 20 }}
          name="arrow-back-outline"
          size={28}
          color="white"
        />

        <Ionicons
          onPress={() => navigation.navigate('ARPage')} // Replace 'ARPage' with your AR page's route name
          style={{ position: "absolute", top: 20, right: 20 }}
          name="camera-outline" // This is an example icon name, adjust as needed
          size={28}
          color="white"
        />


{clothing.map((item, index) => (          
  <Pressable
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            key={index}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold",width:170, }}>
                {item.name}
              </Text>

              <Text style={{ marginTop: 4, fontSize: 18, color: "gray" }}>
                x{item.sets}
              </Text>
            </View>

            
          </Pressable>
        ))}
      </ScrollView>


    </>
  );
};

export default Product;

const styles = StyleSheet.create({});
