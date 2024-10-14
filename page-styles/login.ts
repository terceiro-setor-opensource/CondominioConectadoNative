import { StyleSheet } from "react-native";
// import { Colors } from "@/constants/theme";
import { ButtonStyles } from "@/constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#023047",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonAcessar: {
    ...ButtonStyles.secondary,
    width: 326,
    marginBottom: 5,
    marginTop: 10,
  },
  esqueciSenha: {
    color: "#FB8500",
    marginBottom: 70,
  },
  separador: {
    borderBottomColor: '#FB8500', // cor laranja
    borderBottomWidth: 1, // espessura da linha
    width: '120%', // largura da linha
    alignSelf: 'center', // centraliza a linha
    marginVertical: 10, // espaço vertical
    marginBottom: 10,
  },
  naoTenhoConta: {
    color: "#FB8500",
    textDecorationLine: "underline",
    bottom: 0, 
    alignSelf: 'center',
    marginBottom: 10,
  }
});