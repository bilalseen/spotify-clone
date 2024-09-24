import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 10,
    paddingTop: 100,
    alignItems: "center",
  },
  linearGradient: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  coverImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 2,
  },
  detailsContainer: {
    gap: 10,
    paddingVertical: 10,
  },
  playlistTitle: {
    fontWeight: "600",
    fontSize: 20,
    color: "#fff",
  },
  playlistDescription: {
    color: "#a2a1a0",
  },
  ownerContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  ownerAvatar: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  ownerName: {
    color: "#fff",
    fontWeight: "600",
  },
  saveInfoContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  saveInfoText: {
    color: "#a2a1a0",
    fontSize: 12,
    fontWeight: "600",
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  controlButtons: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  playButtonContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  separator: {
    height: 15,
  },
  cardListContainer: {
    paddingBottom: 150,
  },
});
