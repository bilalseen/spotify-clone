import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import styles from "./PlaylistCard.style";
import LucideIcons from "../../global/LucideIcons";

const PlaylistCard = ({
  imageSource,
  title,
  cardType,
  subtitle,
  songCount,
  pinned,
  creator,
  mode,
  iconName,
}) => {
  return (
    <View style={styles.cardContainer}>
      {mode ? (
        <View
          style={[
            styles.cardImage,
            cardType === "Episode" && { borderRadius: 5 },
          ]}
        >
          <LucideIcons name={iconName} size={26} color="#a6a5a6" />
        </View>
      ) : (
        <Image
          source={{ uri: imageSource }}
          style={[
            styles.playlistImage,
            cardType === "Podcast" && { borderRadius: 5 },
            cardType === "Artist" && { borderRadius: 50 },
          ]}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        {!mode && (
          <View style={styles.infoContainer}>
            {pinned && <LucideIcons name="Pin" size={14} color="#2cf165" />}
            {cardType === "Artist" ? (
              <Text style={styles.songCountText}>{cardType}</Text>
            ) : (
              <Text style={styles.songCountText}>
                {cardType} • {songCount} {subtitle} {creator}
              </Text>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default PlaylistCard;
