import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./NewReleases.style";
import LucideIcons from "../LucideIcons";
import HomeData from "../../data/Home/HomeData.json";

export default function NewReleases() {
  console.log(HomeData.newReleases);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImage}
          source={{ uri: HomeData.newReleases.artistProfileImage }}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>New Releases:</Text>
          <Text style={styles.headerArtist}>{HomeData.newReleases.artist}</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={{ uri: HomeData.newReleases.coverImage }}
        />
        <View style={styles.cardContentContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Card Title</Text>
            <Text style={styles.cardExplanation}>Card Explanation</Text>
          </View>
          <View style={styles.cardIconsContainer}>
            <LucideIcons name="CirclePlus" color={"#fff"} size={26} />
            <LucideIcons name="Play" size={26} color={"#fff"} />
          </View>
        </View>
      </View>
    </View>
  );
}
