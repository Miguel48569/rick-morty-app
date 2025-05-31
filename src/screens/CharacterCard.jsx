import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./stylesFeed";

export default function CharacterCard({ item, onPressDetails }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.species}>{item.species}</Text>
      <TouchableOpacity
        style={{
          marginTop: 8,
          backgroundColor: "#2980B9",
          borderRadius: 8,
          paddingVertical: 6,
          paddingHorizontal: 16,
          alignSelf: "center",
        }}
        onPress={onPressDetails}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
          Detalhes
        </Text>
      </TouchableOpacity>
    </View>
  );
}
