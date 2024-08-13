import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./PlaylistCard.style";

export default function ProgramCard({ item }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        item.type == "artist" && {
          alignItems: "center",
        },
      ]}
    >
      <Image
        style={[
          styles.cardImage,
          item.type == "artist" && { borderRadius: 100 },
        ]}
        source={{
          uri: item.coverImage,
        }}
      />
      <Text
        style={[
          styles.cardTitle,
          item.type == "artist" && { textAlign: "center" },
        ]}
        numberOfLines={2}
      >
        {item.type == "artist" ? item.name : item.description}
      </Text>
    </TouchableOpacity>
  );
}
