import { View, Text } from "react-native";
import React from "react";

import styles from "./CategoryList.style";

import CategoryCard from "../../../components/Search/CategoryCard";
import SearchData from "../../../data/Search/SearchData.json";

export default function CategoryList() {
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>Müzik türlerini keşfet</Text>
      <View style={styles.cardContainer}>
        {SearchData.categories.map((item) => (
          <CategoryCard
            key={item.id}
            imageSource={item.imageUrl}
            title={item.title}
          />
        ))}
      </View>
    </View>
  );
}
