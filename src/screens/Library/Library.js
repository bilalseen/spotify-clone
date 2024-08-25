import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getArtistDetails } from "../../services/spotifyService";

import styles from "./Library.style";

export default function Library() {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      const data = await getArtistDetails("3xs0LEzcPXtgNfMNcHzLIP");
      setArtist(data);
    };
    fetchArtist();
  }, []);

  if (!artist) return <Text>Loading...</Text>;
  return (
    <View>
      <Text>Library</Text>
    </View>
  );
}
