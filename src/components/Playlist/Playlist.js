import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./Playlist.style";

import LucideIcons from "../LucideIcons/LucideIcons";

export default function Playlist({
  name,
  coverImage,
  isItPlaying,
  playlistState,
  F,
}) {
  const capitalizeWords = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <TouchableOpacity style={styles.container}>
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
    </TouchableOpacity>
  );
}
