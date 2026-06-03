import {
  View, Text, Image, StyleSheet, TouchableOpacity,
  SafeAreaView, StatusBar
} from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.brandName}>McDonald's</Text>
        </View>
        <View style={styles.welcomeSection}>
          <Text style={styles.title}>Seja Bem-Vindo!</Text>
          <Text style={styles.subtitle}>Escolha como prefere aproveitar sua refeição. Estamos aqui para
            oferecer praticidade e sabor em cada detalhe!
          </Text>
        </View>
        <View style={styles.cardsRow}>
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => { }}
          >
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons
                name="hamburger"
                size={36}
                color="#000000"
              />
            </View>
            <View style={styles.cardLabelPill}>
              <Text style={styles.cardLabel}>Para comer aqui</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => { }}
          >
            <View style={styles.iconCircle}>
              <Feather
                name="shopping-bag"
                size={34}
                color="#000000"
              />
            </View>
            <View style={styles.cardLabelPill}>
              <Text style={styles.cardLabel}>Para levar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center', // Alinha eixo y (horizontal) 
    justifyContent: 'center', // Alinha eixo x (vertical)
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 10,

  },
  brandName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12,

  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 36,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#707070',
    textAlign: 'center',
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 14,
  },
  card: {
    flex: 1,
    maxWidth: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 28,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    minHeight: 200,
    // IOS (Sombra)
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08, 
    shadowRadius: 12,
    // Android (Sombra)
    elevation: 6
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  cardLabelPill: {  
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 14,
    width: '100%',
    alignItems: 'center',

  },
  cardLabel: {
    fontSize: 14, 
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },

});