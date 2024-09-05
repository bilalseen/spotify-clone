import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import React from "react";
import LucideIcons from "../../../components/global/LucideIcons";
import PlaylistCard from "../../../components/Library/PlaylistCard";
import playlistData from "../../../data/Library/LibraryData.json";
import { useDispatch, useSelector } from "react-redux";

export default function PlaylistSection() {
  const library = useSelector((state) => state.library);
  const dispatch = useDispatch();

  const toggleListingType = () => {
    dispatch(toggleListingType());
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          onPress={() => console.log("filter pressed")}
        >
          <LucideIcons name="ArrowUpDown" size={14} color="#fff" />
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 12 }}>
            Recently Played
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("grid pressed")}>
          <LucideIcons
            name={library.listingType === "List" ? "LayoutGrid" : "List"}
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={playlistData.playlists}
        key={library.listingType}
        keyExtractor={(item) => item.id}
        numColumns={library.listingType === "Grid" ? 3 : 1}
        renderItem={({ item }) => (
          <PlaylistCard
            imageSource={item.imageSource}
            title={item.title}
            cardType={item.cardType}
            songCount={item.songCount}
            pinned={item.pinned}
            creator={item.creator}
            iconName={item.iconName}
            mode={item.mode}
            listingType={library.listingType}
          />
        )}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
