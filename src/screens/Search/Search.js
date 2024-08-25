import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./Search.style";
import { useSelector } from "react-redux";
import LucideIcons from "../../components/global/LucideIcons";

import CategoryCard from "../../components/Search/CategoryCard";
import CategoryList from "../../sections/Search/CategoryList/CategoryList";

export default function Search() {
  const profile = useSelector((state) => state.profile);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <TouchableOpacity>
            <Image
              source={{ uri: profile.profileImage }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Ara</Text>
        </View>
        <TouchableOpacity>
          <LucideIcons
            name={"Camera"}
            size={26}
            color={"#fff"}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <LucideIcons
          name={"Search"}
          size={20}
          color={"#000"}
          style={styles.searchIcon}
        />
        <Text style={styles.placeHolderText}>Ne dinlemek istiyorsun?</Text>
      </View>
      <CategoryList />
    </View>
  );
}
