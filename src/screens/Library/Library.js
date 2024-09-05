import { View } from "react-native";
import React from "react";

import styles from "./Library.style";
import Header from "../../components/Library/Header";
import PlaylistSection from "../../sections/Library/PlaylistSection/PlaylistSection";
import PlaybackControl from "../../components/Player/PlaybackControl";

export default function Library({ navigation }) {
  return (
    <View style={styles.container}>
      <PlaybackControl navigation={navigation} />
      <Header />
      <View style={styles.divider}></View>
      <PlaylistSection />
    </View>
  );
}
