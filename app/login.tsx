import { Text, View } from "react-native";
import { Link } from "expo-router";

import styles from "@/page-styles/login";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Link href="/" style={styles.button}>
        Go to Home screen
      </Link>
    </View>
  );
}
