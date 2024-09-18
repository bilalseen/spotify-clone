import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 50,
    gap: 20,
  },
  linearGradient: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 2,
  },
  backButton: {
    width: "100%",
  },
});

export default styles;
