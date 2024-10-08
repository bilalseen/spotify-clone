import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./PlaybackControl.style";
import { useDispatch, useSelector } from "react-redux";
import { pause, play, setLiked } from "../../../redux/slices/PlayerSlice";

export default function PlaybackControl({ navigation }) {
  const player = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePlayerState = () => {
    dispatch(player.isPlaying ? pause() : play());
  };

  const handleLikeState = () => {
    dispatch(setLiked());
  };

  const handleNavigate = () => {
    navigation.navigate("PlaybackControl");
  };

  const renderControlIcon = (iconPath) => (
    <Image
      source={iconPath}
      style={{ width: 24, height: 24, resizeMode: "contain" }}
    />
  );

  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <View style={styles.trackInfoContainer}>
        <Image source={{ uri: player.songImage }} style={styles.image} />
        <View>
          <Text style={styles.trackName}>
            {player.songName}
            {player.isPlayingOnAnotherDevice && " • " + player.artistName}
          </Text>
          {player.isPlayingOnAnotherDevice ? (
            <View style={styles.deviceContainer}>
              <Image
                source={require("../../../assets/images/icons/playbackControl/bluetooth.png")}
                style={{ width: 16, height: 16, resizeMode: "contain" }}
              />
              <Text style={styles.deviceText}>SEN</Text>
            </View>
          ) : (
            <Text style={styles.artistName}>{player.artistName}</Text>
          )}
        </View>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          {renderControlIcon(
            require("../../../assets/images/icons/playbackControl/phone.png")
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLikeState}>
          {player.isLiked
            ? renderControlIcon(
                require("../../../assets/images/icons/playbackControl/liked.png")
              )
            : renderControlIcon(
                require("../../../assets/images/icons/playbackControl/unliked.png")
              )}
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePlayerState}>
          {player.isPlaying
            ? renderControlIcon(
                require("../../../assets/images/icons/playbackControl/pause.png")
              )
            : renderControlIcon(
                require("../../../assets/images/icons/playbackControl/play.png")
              )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
