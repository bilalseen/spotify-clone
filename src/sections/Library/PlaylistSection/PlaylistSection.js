import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import LucideIcons from "../../../components/global/LucideIcons";
import PlaylistCard from "../../../components/Library/PlaylistCard";

export default function PlaylistSection() {
  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={{ height: "100%", width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <LucideIcons name="ArrowUpDown" size={14} color="#fff" />
            <Text style={{ color: "#fff", fontWeight: "600", fontSize: 12 }}>
              Recently Played
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <LucideIcons name="LayoutGrid" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <PlaylistCard
          imageSource={"https://misc.scdn.co/liked-songs/liked-songs-64.png"}
          title={"Liked Songs"}
          cardType={"Playlist"}
          songCount={626}
          pinned={true}
        />
        <PlaylistCard
          imageSource={"https://misc.scdn.co/your-episodes/SE-64.png"}
          title={"New Episodes"}
          cardType={"Podcast"}
          songCount={"Awake"}
          pinned={true}
        />
        <PlaylistCard
          imageSource={
            "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da841b0d4a6cc4dd59ad5b4ef5b7"
          }
          title={"Chill Pop Vibes"}
          cardType={"Playlist"}
          songCount={"Awake"}
        />
        <PlaylistCard
          imageSource={
            "https://i.scdn.co/image/ab6761610000101f344beb04f04ba51022c5230f"
          }
          title={"Güneş"}
          cardType={"Artist"}
        />
        <PlaylistCard
          imageSource={
            "https://i.scdn.co/image/ab6765630000955f3b711f5e9bf79caee0021fbc"
          }
          title={"Adapty"}
          cardType={"Podcast"}
          creator={"Awake"}
        />
        <PlaylistCard
          imageSource={
            "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb/3/tr/default"
          }
          title={"Daily Mix 3"}
          cardType={"Playlist"}
          songCount={"Made for Bilal"}
        />
        <PlaylistCard
          imageSource={
            "https://i.scdn.co/image/ab6761610000101f78821f3031828c252574f089"
          }
          title={"Suzan Hacıgarip"}
          cardType={"Artist"}
        />
        <PlaylistCard
          imageSource={
            "https://i.scdn.co/image/ab6761610000101f3f447822b2e28116a560c443"
          }
          title={"Roseburg"}
          cardType={"Artist"}
        />
        <PlaylistCard
          imageSource={
            "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/track/3bidbhpOYeV4knp8AIu8Xn/tr"
          }
          title={"Can't Hold Us (feat. Ray Dalton) Radio"}
          cardType={"Playlist"}
          creator={"Spotify"}
        />
        <PlaylistCard
          imageSource={
            "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO4lAAFJ-default.jpg"
          }
          title={"This is Rosalia"}
          cardType={"Playlist"}
          creator={"Spotify"}
        />
        <PlaylistCard
          imageSource={
            "https://i2o.scdn.co/image/ab67706c0000cfa3b51c90a1c6c83daae020a941"
          }
          title={"wh"}
          cardType={"Playlist"}
          creator={"Bilal"}
        />
        <PlaylistCard iconName={"Plus"} title={"Add Artist"} mode={"Add"} />
        <PlaylistCard
          iconName={"Plus"}
          title={"Add Podcast"}
          mode={"Add"}
          cardType={"Episode"}
        />
      </View>
    </ScrollView>
  );
}
