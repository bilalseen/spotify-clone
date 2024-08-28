import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: "auto",
    justifyContent: "flex-start",
    gap: 10,
    paddingHorizontal: 10,
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  profileInfo: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  profileText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
  iconGroup: {
    flexDirection: "row",
    gap: 20,
  },
});

export default styles;
