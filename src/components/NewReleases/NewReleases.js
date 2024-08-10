import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./NewReleases.style";
import LucideIcons from "../LucideIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import HomeData from "../../data/Home/HomeData.json";

export default function NewReleases() {
  const data = HomeData.newReleases;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            style={styles.headerImage}
            source={{ uri: data.artistProfileImage }}
          />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Yakınlarda çalınanlar:</Text>
          <Text style={styles.headerArtist}>{data.artist}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={{ uri: HomeData.newReleases.coverImage }}
        />
        <View style={styles.cardContentContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{data.tracks.title}</Text>
            <Text style={styles.cardExplanation}>
              {data.tracks.type} • {data.tracks.artists.map((artist) => artist)}
            </Text>
          </View>
          <View style={styles.cardIconsContainer}>
            <TouchableOpacity>
              <LucideIcons name="CirclePlus" color={"#a7a7a7"} size={26} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="play" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
