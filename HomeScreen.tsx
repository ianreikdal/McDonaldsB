import {
     View, Text, Image, StyleSheet,
     SafeAreaView, StatusBar
} from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
 
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
 
 export type RootStackParamList = {
     Home: undefined;
     Details: undefined;
}
 
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
 
export default function HomeScreen({ navigation }: Props) {
     return (
            <SafeAreaView style={styles.safeArea}>
 
            </SafeAreaView>
     );
}
 
const styles = StyleSheet.create({
     safeArea: {
         
     },
     container: {
 
     },
     header: {
 
     },
     logo: {
 
     },
     brandName: {
 
     },
     welcomeSection: {
         
     },
     title: {
 
     },
     subtitle: {
 
     },
     cardsRow: {
 
     },
     card: {
 
     },
     iconCircle: {
 
     },
     cardLabelPill: {
 
     },
     cardLabel: {
 
     },
 
});