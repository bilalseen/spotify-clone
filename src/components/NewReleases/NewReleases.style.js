import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    // backgroundColor: "blue",
    gap: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerTextContainer: {},
  headerTitle: {
    color: "#7a7a7a",
    fontSize: 14,
  },
  headerArtist: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
  },
  cardContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "red",
    flexDirection: "row",
    borderRadius: 10,
  },
  cardImage: {
    width: "40%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContentContainer: {
    justifyContent: "space-between",
    backgroundColor: "#2a2a2a",
    width: "60%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
  },
  cardTextContainer: {},
  cardTitle: {
    color: "#fff",
    fontWeight: "600",
  },
  cardExplanation: {
    color: "#a7a7a7",
    fontWeight: "600",
  },
  cardIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardIcon: {},
});

export default styles;
