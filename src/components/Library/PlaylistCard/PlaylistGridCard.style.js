import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    width: "30%",
    height: Dimensions.get("window").width * 0.15,
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    marginVertical: 50,
  },
  playlistImage: {
    width: 100,
    height: 100,
  },
  cardImage: {
    width: 100,
    height: 100,
    backgroundColor: "#282729",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    justifyContent: "flex-start",
  },
  titleText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  songCountText: {
    color: "#a8a7a8",
    fontSize: 12,
  },
});

export default styles;
