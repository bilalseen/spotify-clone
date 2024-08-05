import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./Header.style";
import Tag from "../Tag";
import { useSelector } from "react-redux";

export default function Header() {
  const profile = useSelector((state) => state.profile);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: profile.profileImage }}
        style={styles.profileImage}
      />
      <Tag text={"Tümü"} isItActive={true} />
      <Tag text={"Müzik"} isItActive={false} />
      <Tag text={"Podcast'ler"} isItActive={false} />
    </View>
  );
}
