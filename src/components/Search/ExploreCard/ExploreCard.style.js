import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.45,
    height: Dimensions.get("window").width * 0.25,
    borderRadius: 10,
    padding: 10,
    zIndex: 1,
    overflow: "hidden",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    maxWidth: 100,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 5,
    transform: [{ rotate: "20deg" }],
    position: "absolute",
    right: -10,
    bottom: 0,
    zIndex: -1,
  },
});

export default styles;
