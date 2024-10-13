import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 15,
    width: Dimensions.get("window").width,
    paddingLeft: 15,
    paddingRight: 60,
  },
  image: {
    width: 36,
  },
  text: {
    color: Colors.black,
    flexWrap: "wrap",
    maxWidth: Dimensions.get("window").width - 80,
  },
  textStrong: {
    fontWeight: "bold",
  },
});
