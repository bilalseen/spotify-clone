import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  nowPlayingText: {
    color: "#b4b6b8",
    textTransform: "uppercase",
    fontSize: 11,
  },
  searchResultText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  playbackControlsContainer: {
    position: "absolute",
    width: "100%",
    bottom: 50,
    gap: 10,
  },
  songInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  songDetails: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
  songImage: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 5,
  },
  songNameText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },
  artistNameText: {
    color: "#b4b6b8",
    fontSize: 14,
  },
  progressBarContainer: {
    gap: 5,
  },
  progressBar: {
    backgroundColor: "#1a1d1d",
    height: 3,
    width: "100%",
    borderRadius: 10,
  },
  timeLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeText: {
    color: "#b4b6b8",
  },
  playbackButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  controlButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconSizeSmall: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
  iconSizeSmallPlus: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  iconSizeMedium: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  iconSizeMediumPlus: {
    width: 42,
    height: 42,
    resizeMode: "contain",
  },
  iconSizeLarge: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});
