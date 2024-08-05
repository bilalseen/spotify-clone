import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.04,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2a2a2a",
    paddingHorizontal: Dimensions.get("window").width * 0.04,
    borderRadius: 50,
  },
  containerActive: {
    backgroundColor: "#1ed760",
  },
  text: {
    color: "white",
    fontSize: 12,
  },
  textActive: {
    color: "black",
  },
});

export default styles;
