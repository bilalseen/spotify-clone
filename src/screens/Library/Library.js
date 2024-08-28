import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React from "react";
import { getArtistDetails } from "../../services/spotifyService";

import styles from "./Library.style";
import Header from "../../components/Library/Header";
import LucideIcons from "../../components/global/LucideIcons";
import PlaylistCard from "../../components/Library/PlaylistCard";
import PlaylistSection from "../../sections/Library/PlaylistSection/PlaylistSection";

export default function Library() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.divider}></View>
      <PlaylistSection />
    </View>
  );
}
