import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./PlaybackControl.style";
import LucideIcons from "../../global/LucideIcons";
import { useDispatch, useSelector } from "react-redux";
import { pause, play } from "../../../redux/slices/PlayerSlice";

export default function PlaybackControl() {
  const player = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePlayerState = () => {
    dispatch(player.isPlaying ? pause() : play());
  };

  return (
    <View style={styles.container}>
      <View style={styles.trackInfoContainer}>
        <Image
          source={{
            uri: "https://i.scdn.co/image/ab67616d00001e022df0d98a423025032d0db1f7",
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.trackName}>Ride • Twenty One Pilots</Text>
          <View style={styles.deviceContainer}>
            <LucideIcons name="MonitorSmartphone" color={"#1fd660"} size={16} />
            <Text style={styles.deviceText}>SEN</Text>
          </View>
        </View>
      </View>
      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <LucideIcons name="Monitor" color={"#1fd660"} size={26} />
        </TouchableOpacity>
        {player.isAdded ? (
          <TouchableOpacity
            style={{
              backgroundColor: "#1fd660",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              width: 30,
              height: 30,
            }}
          >
            <LucideIcons name="Check" color={"#681311"} size={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <LucideIcons name="CirclePlus" color={"#fff"} size={26} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => handlePlayerState()}>
          <LucideIcons
            name={player.isPlaying ? "Pause" : "Play"}
            color={"#fff"}
            size={26}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
