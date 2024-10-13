export const Colors = {
  white: "#ffffff",
  lightBlue: "#8ECAE6",
  blue: "#219EBC",
  darkBlue: "#023047",
  orange: "#FB8500",
  black: "#000000",
};

import { StyleSheet } from "react-native";

const baseButton = {
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 50,
  fontSize: 20,
  color: Colors.white,
  paddingTop: 15,
  paddingBottom: 15,
};

export const ButtonStyles = StyleSheet.create({
  primary: {
    ...baseButton,
    backgroundColor: Colors.orange,
    textAlign: "center",
  },
  secondary: {
    ...baseButton,
    backgroundColor: Colors.darkBlue,
    textAlign: "center",
  },
  buttonLink: {
    display: "flex",
    flex: 1,
    height: "100%",
  },
});
