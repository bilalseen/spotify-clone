import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#681311",
    position: "absolute",
    bottom: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  trackInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  trackName: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  artistName: {
    color: "#c0bec0",
    fontSize: 12,
  },
  deviceText: {
    color: "#1fd660",
    fontSize: 12,
  },
  deviceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  controlsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});

export default styles;
