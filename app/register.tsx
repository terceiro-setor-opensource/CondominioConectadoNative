import { Text, View } from "react-native";
import { Link } from "expo-router";

import styles from "@/page-styles/register";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <Link href="/" style={styles.button}>
        Go to Home screen
      </Link>
    </View>
  );
}
