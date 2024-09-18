import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { styles } from "./ListCard.style";

export default function ListCard({ item }) {
  const profile = useSelector((state) => state.profile);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={{ uri: item.imageSource }}
          style={[
            styles.image,
            item.cardType === "Artist" && { borderRadius: 50 },
          ]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.saveCount}>
            {item.cardType === "Artist"
              ? item.followers + " takipçi"
              : item.saveCount + " kaydetme"}
          </Text>
        </View>
      </View>
    </View>
  );
}
