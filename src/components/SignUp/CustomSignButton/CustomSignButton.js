import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./CustomSignButton.style";
import LucideIcons from "../../global/LucideIcons";
import { StatusBar } from "react-native";

export default function CustomSignButton({
  iconSource,
  text,
  bckgColor,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: bckgColor, borderWidth: bckgColor ? 0 : 1 },
      ]}
      onPress={onPress}
    >
      {iconSource && <Image source={iconSource} style={styles.icon} />}

      <Text style={[styles.text, { color: bckgColor ? "#000" : "#fff" }]}>
        {text}
      </Text>
      <StatusBar />
    </TouchableOpacity>
  );
}
