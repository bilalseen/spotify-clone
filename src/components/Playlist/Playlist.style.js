import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.45,
    height: Dimensions.get("window").width * 0.14,
    backgroundColor: "#2a2a2a",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    margin: 5,
  },
  image: {
    flex: 1,
    width: "35%",
    height: "100%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  titleContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  text: {
    textAlign: "left",
    color: "white",
    fontWeight: "500",
    fontSize: 12,
  },
});
