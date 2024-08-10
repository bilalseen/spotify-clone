import { View, StatusBar, FlatList, ScrollView } from "react-native";
import React from "react";

import { styles } from "./Home.style";
import Header from "../../components/Header";
import Playlist from "../../components/Playlist/Playlist";
import NewReleases from "../../components/NewReleases";
import HomeData from "../../data/Home/HomeData.json";

import PlaylistSection from "../../components/sections/PlaylistSection";
import PlaybackControl from "../../components/PlaybackControl";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <PlaybackControl />
      <ScrollView>
        <Header />
        <View style={styles.playlistContainer}>
          <FlatList
            numColumns={2}
            data={HomeData.playlists}
            renderItem={({ item }) => (
              <Playlist
                name={item.name}
                coverImage={item.coverImage}
                isItPlaying={item.id == 4 ? true : false}
                playlistState={false}
              />
            )}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={styles.columnWrapperStyle}
          />
        </View>
        <NewReleases newReleasesData={HomeData.newReleases} />
        <PlaylistSection data={HomeData.forYou} />
        <PlaylistSection data={HomeData.mostPlayedMixes} />
        <PlaylistSection data={HomeData.recentlyPlayed} />
      </ScrollView>
    </View>
  );
}
