import { StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.black,
    fontSize: 30,
    marginBottom: 30,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: Colors.orange,
  },
});
