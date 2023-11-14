import { StyleSheet, Text, View, Pressable, Image, Button, ScrollView } from "react-native";
import React from "react";
import Clothing from "../data/ClothingData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Cards = () => {
  const ClothingData = Clothing;
  const navigation = useNavigation();
  return (
    <View>
      {ClothingData.map((item, key) => (
        <Pressable
        onPress={() => navigation.navigate("Product",{

          //Images for Shirts, Sweaters etc
          image:item.image,

          // Below displays Shirts, Sweater etc in txt
          excersises:item.excersises,
          
          id:item.id,
        })}
          style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
          key={key}
        >
          <Image
            style={{ width: "95%", height: 140, borderRadius: 7}}
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
            style={{ position: "absolute", color: "white", bottom: 15,left:20 }}
            name="lightning-bolt"
            size={24}
            color="black"
          />



        </Pressable>
      ))}
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({});
