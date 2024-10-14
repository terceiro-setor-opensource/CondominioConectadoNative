import { ScrollView, View, Image } from "react-native";
import { Link } from "expo-router";
import IconCard from "@/components/IconCard";

import styles from "@/page-styles/home";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("@/assets/images/logo.png")}
        />
        <View style={styles.infoContainer}>
          <IconCard
            iconName="earth-sharp"
            title="Conecte-se com sua comunidade:"
            description="Encontre e anuncie
            produtos com facilidade, conectando-se diretamente com seus vizinhos.
            Sem mais confusão em grupos de WhatsApp!"
          />
          <IconCard
            iconName="phone-portrait-outline"
            title="Anúncios rápidos e fáceis:"
            description="Publique seus produtos com imagens e detalhes em minutos. 
            Simples, prático e acessível a todos os moradores do condomínio."
          />
          <IconCard
            iconName="lock-closed-outline"
            title="Acesso exclusivo para moradores:"
            description="Navegue pelos anúncios mais recentes e encontre o que precisa sem sair do condomínio. 
            Segurança e comodidade na palma da sua mão."
          />
          <IconCard
            iconName="location-outline"
            title="Contatos diretos e seguros:"
            description="Veja os detalhes dos produtos e entre em contato direto com o anunciante. 
            Tudo de forma rápida, segura e organizada."
          />
        </View>
        <Link href="/login" style={styles.loginButton}>
          Faça login
        </Link>
        <Link href="/register" style={styles.registerButton}>
          Crie sua conta
        </Link>
      </View>
    </ScrollView>
  );
}