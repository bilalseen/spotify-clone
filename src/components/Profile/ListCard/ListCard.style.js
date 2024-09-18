import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  leftContainer: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  textContainer: {
    justifyContent: "center",
    width: "70%",
  },
  title: {
    color: "#fff",
  },
  saveCount: {
    color: "#a2a1a0",
  },
});
