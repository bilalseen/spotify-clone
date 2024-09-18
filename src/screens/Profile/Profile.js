import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./Profile.style";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import LucideIcons from "../../components/global/LucideIcons";
import ListCard from "../../components/Profile/ListCard";
import listData from "../../data/Profile/ProfileData.json";
export default function Profile({ navigation }) {
  const profile = useSelector((state) => state.profile);

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  const gradientColors = [
    "#d14c33",
    "#a23d2c",
    "#391d19",
    "#121112",
    "#121112",
    "#121112",
    "#121112",
    "#121112",
    "#121112",
    "#121112",
    "#121112",
    "#121112",
  ];

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={gradientColors} style={styles.linearGradient} />
      <StatusBar backgroundColor="transparent" style="dark" />
      <TouchableOpacity onPress={handleNavigateBack} style={styles.backButton}>
        <LucideIcons name="ArrowLeft" size={26} color="#fff" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          //   backgroundColor: "gray",
          width: "100%",
          gap: 20,
        }}
      >
        <Image
          source={{ uri: profile.profileImage }}
          style={{ width: 120, height: 120, borderRadius: 60 }}
        />
        <View style={{ gap: 5 }}>
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "600" }}>
            {profile.firstName}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Text style={{ color: "#fff", fontWeight: "600" }}>
              {profile.followers}
            </Text>
            <Text style={{ color: "#aca19f", fontSize: 12 }}>takipci</Text>
            <Text style={{ color: "#fff", fontWeight: "600" }}>
              •{profile.following}
            </Text>
            <Text style={{ color: "#aca19f", fontSize: 12 }}>
              takip ediliyor
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
      >
        <TouchableOpacity
          style={{
            borderColor: "#aca19f",
            borderWidth: 1,
            borderRadius: 50,
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Text style={{ color: "#f9f9f9", fontWeight: "600", fontSize: 12 }}>
            Düzenle
          </Text>
        </TouchableOpacity>
        <LucideIcons name="EllipsisVertical" size={26} color="#aca19f" />
      </View>
      <View style={{ justifyContent: "flex-start", width: "100%", gap: 20 }}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
          Çalma Listeleri
        </Text>
        {listData.playlists.map((item, key) => (
          <ListCard item={item} key={item.id} />
        ))}
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              borderColor: "#aca19f",
              borderWidth: 1,
              borderRadius: 50,
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
          >
            <Text style={{ color: "#f9f9f9", fontWeight: "600", fontSize: 13 }}>
              Çalma listelerinin tümünü gör
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
          En son çalınan sanatçılar
        </Text>
        {listData.recentlyPlayedArtist.map((item, key) => (
          <ListCard item={item} key={key} />
        ))}
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              borderColor: "#aca19f",
              borderWidth: 1,
              borderRadius: 50,
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
          >
            <Text style={{ color: "#f9f9f9", fontWeight: "600", fontSize: 13 }}>
              Sanatçıların tümünü gör
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
