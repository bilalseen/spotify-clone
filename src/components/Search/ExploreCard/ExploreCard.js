import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ExploreCard.style";

const ExploreCard = ({ image, bcgkColor, title }) => {
  return (
    <View style={[styles.container, { backgroundColor: bcgkColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

export default ExploreCard;
