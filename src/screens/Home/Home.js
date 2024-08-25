import { View, StatusBar, FlatList, ScrollView } from "react-native";
import React from "react";

import { styles } from "./Home.style";
import Header from "../../components/Home/Header";
import Playlist from "../../components/Home/Playlist";
import NewReleases from "../../components/Home/NewReleases";
import HomeData from "../../data/Home/HomeData.json";

import PlaylistSection from "../../sections/Home/PlaylistSection";
import PlaybackControl from "../../components/Player/PlaybackControl";

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
                isItPlaying={false}
                playlistState={item.id == 4 ? true : false}
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
