import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.8,
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#B4B4B4",
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  text: {
    flex: 6,
    // backgroundColor: "blue",
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});

export default styles;
