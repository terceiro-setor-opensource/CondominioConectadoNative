import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/theme";

import styles from "./styles";

interface IProps {
  iconName: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
}

const IconCard = (props: IProps) => {
  const { iconName, title, description } = props;

  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={36} color={Colors.orange} />
      <Text style={styles.text}>
        <Text style={styles.textStrong}>{title} </Text>
        {description}
      </Text>
    </View>
  );
};

export default IconCard;
