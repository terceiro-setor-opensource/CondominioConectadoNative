import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { Link } from "expo-router";
import styles from "@/page-styles/login";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // Exibir alerta de sucesso
    Alert.alert("Sucesso", "Login efetuado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("@/assets/images/logo.png")}
      />
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      <Link href="/register" style={styles.registerLink}>
        Não tenho uma conta
      </Link>
    </View>
  );
}