import { View, Text, FlatList } from "react-native";
import React from "react";

import styles from "./PlaylistSection.style";

import PlaylistCard from "../../PlaylistCard";

export default function PlaylistSection({ data }) {
  const ItemSeparator = () => {
    return <View style={{ width: 10 }} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <FlatList
        data={data.playlists}
        renderItem={({ item }) => <PlaylistCard item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
}
