import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { Link } from "expo-router";
import styles from "@/page-styles/login";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!login || !senha) {
      Alert.alert("Erro", "Por favor, preencha os campos de login e senha.");
      return;
    }
    Alert.alert("Sucesso", "Login efetuado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/assets/images/logo_grande.png")}
      />
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
        placeholderTextColor="#B0B0B0"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#B0B0B0"
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.buttonAcessar}>Acessar</Text>
      </TouchableOpacity>
      <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
      <View style={styles.separador} />
      <Link href="/register" style={styles.naoTenhoConta}>
        Não tenho uma conta
      </Link>
    </View>
  );
}