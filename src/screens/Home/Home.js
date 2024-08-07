import { View, Text, StatusBar, FlatList, Dimensions } from "react-native";
import React from "react";

import { styles } from "./Home.style";
import Header from "../../components/Header";
import Playlist from "../../components/Playlist/Playlist";
import NewReleases from "../../components/NewReleases";
import HomeData from "../../data/Home/HomeData.json";

export default function Home() {
  const windowHeight = Dimensions.get("window").height;

  const ItemSeparator = () => {
    return <View style={{ height: 10 }} />;
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <View
        style={{
          height: "auto",
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        <FlatList
          numColumns={2}
          data={HomeData.playlists}
          renderItem={({ item }) => (
            <Playlist
              name={item.name}
              coverImage={item.coverImage}
              isItPlaying={false}
              playlistState={item.id == 3 ? true : false}
            />
          )}
          keyExtractor={(item) => item.id}
          // ItemSeparatorComponent={ItemSeparator}
          columnWrapperStyle={{
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        />
      </View>
      <NewReleases newReleasesData={HomeData.newReleases} />
    </View>
  );
}
