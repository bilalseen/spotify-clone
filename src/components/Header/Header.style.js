import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.1,
    paddingHorizontal: Dimensions.get("window").width * 0.04,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "white",
    flexDirection: "row",
    gap: 10,
  },
  profileImage: {
    width: Dimensions.get("window").height * 0.04,
    height: Dimensions.get("window").height * 0.04,
    borderRadius: 50,
  },
});

export default styles;
