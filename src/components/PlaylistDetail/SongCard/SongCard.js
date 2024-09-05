import { View, Text, Image } from "react-native";
import React from "react";
import LucideIcons from "../../global/LucideIcons";
import styles from "./SongCard.style";

export default function SongCard({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={{ uri: item.coverImage }} style={styles.coverImage} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.artist}>
            {item.artist}
          </Text>
        </View>
      </View>
      <LucideIcons name="EllipsisVertical" size={22} color={"#a2a1a0"} />
    </View>
  );
}
