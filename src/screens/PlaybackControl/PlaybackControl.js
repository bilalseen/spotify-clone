import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./PlaybackControl.style";
import LucideIcons from "../../components/global/LucideIcons";
import { useDispatch, useSelector } from "react-redux";
import { setLiked, setShuffle } from "../../redux/slices/PlayerSlice";

export default function PlaybackControl({ navigation }) {
  const player = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const handleLikeState = () => {
    dispatch(setLiked());
  };

  const handleShuffleState = () => {
    dispatch(setShuffle());
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <LucideIcons name="ChevronDown" size={30} color="#fff" />
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.nowPlayingText}>
            arama sonuçlarından çalınıyor
          </Text>
          <Text style={styles.searchResultText}>
            Aramada "twenty+one+pilots"
          </Text>
        </View>
        <LucideIcons name="EllipsisVertical" size={24} color="#fff" />
      </View>
      <View style={styles.playbackControlsContainer}>
        <View style={styles.songInfoContainer}>
          <View style={styles.songDetails}>
            <Image
              source={{ uri: player.songImage }}
              style={styles.songImage}
            />
            <View>
              <Text style={styles.songNameText}>{player.songName}</Text>
              <Text style={styles.artistNameText}>{player.artistName}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handleLikeState}>
            <Image
              source={
                player.isLiked
                  ? require("../../assets/images/icons/playbackControl/liked.png")
                  : require("../../assets/images/icons/playbackControl/unliked.png")
              }
              style={styles.iconMedium}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
          <View style={styles.timeLabels}>
            <Text style={styles.timeText}>0:01</Text>
            <Text style={styles.timeText}>3:34</Text>
          </View>
        </View>
        <View style={styles.playbackButtonsContainer}>
          <TouchableOpacity onPress={handleShuffleState}>
            <Image
              source={
                player.shuffleOn
                  ? require("../../assets/images/icons/playbackControl/shuffle-on.png")
                  : require("../../assets/images/icons/playbackControl/shuffle-off.png")
              }
              style={styles.iconMedium}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <LucideIcons name="SkipBack" size={24} color="#fff" />
            <Image
              source={
                player.isPlaying
                  ? require("../../assets/images/icons/Play/Pause-1.png")
                  : require("../../assets/images/icons/Play/Play-1.png")
              }
              style={styles.iconLarge}
            />
            <LucideIcons name="SkipForward" size={24} color="#fff" />
          </View>
          <LucideIcons name="Repeat" size={24} color="#fff" />
        </View>
        <View style={styles.controlButtonsContainer}>
          <Image
            source={require("../../assets/images/icons/playbackControl/phone.png")}
            style={styles.iconSmall}
          />
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Image
              source={require("../../assets/images/icons/playbackControl/share.png")}
              style={styles.iconSmall}
            />
            <Image
              source={require("../../assets/images/icons/playbackControl/replay-off.png")}
              style={styles.iconSmall}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
