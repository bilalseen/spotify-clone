import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    gap: 50,
  },
  background: {
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.6,
    zIndex: -2,
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: -1,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingTop: 200,
  },
  spotifyIcon: {
    width: 50,
    height: 50,
  },
  text: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    width: Dimensions.get("window").width * 0.8,
  },
  actionButton: {
    gap: 10,
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
});
