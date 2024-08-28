import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./Header.style";
import { useSelector } from "react-redux";
import Tag from "../../global/Tag";
import LucideIcons from "../../global/LucideIcons";

export default function Header() {
  const profile = useSelector((state) => state.profile);

  const TagDivider = () => {
    return <View style={{ width: 10 }} />;
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileSection}>
        <View style={styles.profileInfo}>
          <TouchableOpacity>
            <Image
              source={{ uri: profile.profileImage }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Text style={styles.profileText}>Kitaplığın</Text>
        </View>
        <View style={styles.iconGroup}>
          <TouchableOpacity>
            <LucideIcons name="Search" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <LucideIcons name="Plus" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal={true}>
        <Tag text={"Çalma Listeleri"} isItActive={false} />
        <TagDivider />
        <Tag text={"Podcast'ler"} isItActive={false} />
        <TagDivider />
        <Tag text={"Albümler"} isItActive={false} />
        <TagDivider />
        <Tag text={"Sanatçılar"} isItActive={false} />
      </ScrollView>
    </View>
  );
}
