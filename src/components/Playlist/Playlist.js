import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

import { styles } from "./Playlist.style";

import LucideIcons from "../LucideIcons/LucideIcons";

export default function Playlist({
  name,
  coverImage,
  isItPlaying,
  playlistState,
}) {
  const capitalizeWords = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: coverImage }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{capitalizeWords(name)}</Text>
        {isItPlaying && (
          <LucideIcons name="AudioLines" color={"#1fd660"} size={14} />
        )}
        {playlistState && (
          <LucideIcons name="Ellipsis" color={"#1fd660"} size={14} />
        )}
      </View>
    </View>
  );
}
