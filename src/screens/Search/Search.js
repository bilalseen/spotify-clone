import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";

import { styles } from "./Search.style";
import { useSelector } from "react-redux";
import LucideIcons from "../../components/global/LucideIcons";

import CategoryList from "../../sections/Search/CategoryList/CategoryList";
import SearchData from "../../data/Search/SearchData.json";
import ExploreCard from "../../components/Search/ExploreCard";
import PlaybackControl from "../../components/Player/PlaybackControl";

export default function Search({ navigation }) {
  const profile = useSelector((state) => state.profile);

  const renderHeader = () => (
    <View style={{ gap: 20, marginVertical: 10 }}>
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

  return (
    <View style={styles.container}>
      <PlaybackControl navigation={navigation} />
      <View style={{ width: "100%", paddingHorizontal: 10 }}>
        <FlatList
          data={SearchData.explore}
          numColumns={2}
          ListHeaderComponent={renderHeader}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 10,
          }}
          renderItem={({ item }) => (
            <ExploreCard
              image={item.imageUrl}
              title={item.title}
              bcgkColor={item.color}
            />
          )}
        />
      </View>
    </View>
  );
}
