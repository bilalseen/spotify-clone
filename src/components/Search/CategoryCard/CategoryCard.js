import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./CategoryCard.style";
import { Image } from "react-native";

export default function CategoryCard({ imageSource, title }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: imageSource }} style={styles.cardImage} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
