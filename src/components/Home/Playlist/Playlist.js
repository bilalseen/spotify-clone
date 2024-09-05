import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./Playlist.style";

import LucideIcons from "../../global/LucideIcons";

export default function Playlist({
  item,
  isItPlaying,
  playlistState,
  navigation,
}) {
  const handleNavigate = () => {
    navigation.navigate("PlaylistDetails", {
      item: item,
    });
  };

  const capitalizeWords = (string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <Image source={{ uri: item.coverImage }} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{capitalizeWords(item.name)}</Text>
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
