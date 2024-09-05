import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./PlaylistDetails.style";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import LucideIcons from "../../components/global/LucideIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import SongCard from "../../components/PlaylistDetail/SongCard/SongCard";
import PlaybackControl from "../../components/Player/PlaybackControl";

export default function PlaylistDetails({ route, navigation }) {
  const { item } = route.params;

  const [playlistShuffled, setPlaylistShuffled] = useState(false);
  const [playlistLiked, setPlaylistLiked] = useState(false);

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const calculatedDuration = () => {
    const duration = item.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    return `${minutes} sa. ${seconds} dk`;
  };

  const gradientColors = [
    "#6a6455",
    "#413f36",
    "#21211e",
    "#121212",
    "#121212",
    "#121212",
    "#121212",
  ];

  const renderHeader = () => (
    <>
      <TouchableOpacity onPress={handleNavigateBack} style={styles.backButton}>
        <LucideIcons name="ArrowLeft" size={22} color="#fff" />
      </TouchableOpacity>

      <Image source={{ uri: item.coverImage }} style={styles.coverImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.playlistTitle}>{item.name}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode="clip"
          style={styles.playlistDescription}
        >
          {item.description}
        </Text>
        <View style={styles.ownerContainer}>
          <Image source={{ uri: item.coverImage }} style={styles.ownerAvatar} />
          <Text style={styles.ownerName}>{item.owner}</Text>
        </View>
        {item.owner !== "user" && (
          <View style={styles.saveInfoContainer}>
            <LucideIcons name="Globe" size={16} color="#a2a1a0" />
            <Text style={styles.saveInfoText}>
              {item.saveCount} kaydetme • {calculatedDuration()}
            </Text>
          </View>
        )}
      </View>
    </>
  );

  const renderControls = () => (
    <View style={styles.controlsContainer}>
      <View style={styles.controlButtons}>
        <TouchableOpacity onPress={() => setPlaylistLiked(!playlistLiked)}>
          <LucideIcons
            name="Heart"
            size={22}
            color={playlistLiked ? "#2cf263" : "#a2a1a0"}
          />
        </TouchableOpacity>
        <View
          style={{
            borderColor: "#a2a1a0",
            borderWidth: 2,
            borderRadius: 50,
          }}
        >
          <LucideIcons name="ArrowDown" size={18} color="#a2a1a0" />
        </View>
        <LucideIcons name="EllipsisVertical" size={22} color="#a2a1a0" />
      </View>

      <View style={styles.playButtonContainer}>
        <TouchableOpacity
          onPress={() => setPlaylistShuffled(!playlistShuffled)}
        >
          <LucideIcons
            name="Shuffle"
            size={25}
            color={playlistShuffled ? "#2cf263" : "#a2a1a0"}
          />
        </TouchableOpacity>
        <Ionicons name="play-circle" size={60} color="#2cf263" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar />
      <PlaybackControl />
      <LinearGradient colors={gradientColors} style={styles.linearGradient} />

      <FlatList
        ListHeaderComponent={
          <>
            {renderHeader()}
            {renderControls()}
          </>
        }
        data={item.songs}
        keyExtractor={(song) => song.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <SongCard item={item} />}
      />
    </View>
  );
}
