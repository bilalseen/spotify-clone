import { View, StatusBar, FlatList } from "react-native";
import React from "react";

import { styles } from "./Home.style";
import Header from "../../components/Home/Header";
import Playlist from "../../components/Home/Playlist";
import NewReleases from "../../components/Home/NewReleases";
import HomeData from "../../data/Home/HomeData.json";
import PlaylistSection from "../../sections/Home/PlaylistSection";
import PlaybackControl from "../../components/Player/PlaybackControl";

export default function Home({ navigation }) {
  const renderHeader = () => (
    <>
      <Header />
      <View style={styles.playlistContainer}>
        <FlatList
          numColumns={2}
          data={HomeData.playlists}
          renderItem={({ item }) => (
            <Playlist
              item={item}
              name={item.name}
              coverImage={item.coverImage}
              isItPlaying={false}
              playlistState={item.id == 4}
              songs={item.songs}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      </View>
      <NewReleases newReleasesData={HomeData.newReleases} />
    </>
  );

  const renderPlaylistSection = ({ item }) => (
    <PlaylistSection data={item.data} />
  );

  const combinedData = [
    { key: "forYou", data: HomeData.forYou },
    { key: "mostPlayedMixes", data: HomeData.mostPlayedMixes },
    { key: "recentlyPlayed", data: HomeData.recentlyPlayed },
  ];

  return (
    <View style={styles.container}>
      <StatusBar />
      <PlaybackControl navigation={navigation} />
      <FlatList
        ListHeaderComponent={renderHeader}
        data={combinedData}
        keyExtractor={(item) => item.key}
        renderItem={renderPlaylistSection}
      />
    </View>
  );
}
