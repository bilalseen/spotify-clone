import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.28,
    height: Dimensions.get("window").width * 0.45,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  cardImage: {
    flex: 1,
    borderRadius: 10,
  },
  text: {
    position: "absolute",
    bottom: 15,
    left: 5,
    right: 5,
    color: "#fff",
    // backgroundColor: "gray",
    width: "100%",
    textAlign: "center",
    fontWeight: "500",
    width: "90%",
  },
});

export default styles;
