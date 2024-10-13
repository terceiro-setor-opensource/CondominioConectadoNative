import { StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";
import { ButtonStyles } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 268,
    height: 240,
    objectFit: "contain",
    marginTop: 30,
  },
  infoContainer: {
    gap: 30,
    alignItems: "center",
  },
  text: {
    color: Colors.black,
  },
  loginButton: {
    ...ButtonStyles.primary,
    width: 326,
    marginBottom: 15,
    marginTop: 30,
  },
  registerButton: {
    ...ButtonStyles.secondary,
    width: 326,
  },
});
