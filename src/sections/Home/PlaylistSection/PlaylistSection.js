import { View, Text, FlatList } from "react-native";
import React from "react";

import styles from "./PlaylistSection.style";

import PlaylistCard from "../../../components/Home/PlaylistCard";
import { useSelector } from "react-redux";

export default function PlaylistSection({ data }) {
  const libraryListingType = useSelector((state) => state.library.listingType);

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
        numColumns={libraryListingType === "Grid" ? 3 : 1}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
}
