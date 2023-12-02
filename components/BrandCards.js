import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import Clothing from "../data/ClothingData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BrandCards = ({ brands }) => {
  const navigation = useNavigation();

  // Filter ClothingData based on the brands passed as props
  const filteredClothingData = Clothing.filter(item => brands.includes(item.name));

  return (
    <View>
      {filteredClothingData.map((item, key) => (
        <Pressable
          onPress={() => navigation.navigate("Product", {
            image: item.image,
            exercises: item.exercises,
            id: item.id,
          })}
          style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
          key={key}
        >
          <Image
            style={{ width: "95%", height: 140, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{ position: "absolute", color: "white", bottom: 15, left: 20 }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default BrandCards;

const styles = StyleSheet.create({});
