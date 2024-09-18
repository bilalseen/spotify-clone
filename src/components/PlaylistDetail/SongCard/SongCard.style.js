import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  contentContainer: {
    flexDirection: "row",
    gap: 10,
  },
  coverImage: {
      width: 50,
      height: 50,
  },
  textContainer: {
    gap: 5,
    justifyContent: "center",
    width: "70%",
  },
  title: {
    color: "#fff",
  },
  artist: {
    color: "#a2a1a0",
  },
});
