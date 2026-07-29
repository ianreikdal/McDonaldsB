import { useState } from "react";
 
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from 'react-native';
 
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
 
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./HomeScreen";
 
import { getProdutoById } from "../data/produtos";
 
type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;
 
export default function ProductDetailScreen({ navigation, route }: Props) {
    const { productId } = route.params;
    const produto = getProdutoById(productId);
    const [quantidade, setQuantidade] = useState(1);
    const insets = useSafeAreaInsets();
 
    if (!produto) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.errorText}>Produto não encontrado</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backLink}>Voltar</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
 
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"} />
            <TouchableOpacity
                style={[styles.headerButton, styles.headerButtonLeft]}
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}
            ><Ionicons name="chevron-back" size={22} color={"#000000"} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.headerButton, styles.headerButtonRight]}
                activeOpacity={0.8}
                onPress={() => { }}
            >
                <Feather name="file-text" size={20} color={"#000000"} />
            </TouchableOpacity>
 
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <Image
                    source={produto.image}
                    style={styles.productImage}
                    resizeMode="contain"
                />
                <View style={styles.brandRow}>
                    <Image
                        source={require('../images/logo.png')}
                        style={styles.brandLogo}
                        resizeMode="contain"
                    />
                    <Text style={styles.brandName}>McDonald's</Text>
                </View>
                <Text style={styles.productName}>{produto.name}</Text>
 
               <View style={styles.priceRow}>
                    <Text style={styles.price}>{produto.price}</Text>
                    <View style={styles.quantitySelector}>
                        <TouchableOpacity
                        style={styles.quantityButtonMinus}
                        activeOpacity={0.8}
                        onPress={() => {
                            if (quantidade > 1) {
                                setQuantidade(quantidade - 1);
                            }
                        }}
                    >
                        <Ionicons name="chevron-back" size={18} color="#000000" />
                        </TouchableOpacity>
                       
                        <Text style={styles.quantityText}>{quantidade}</Text>
 
                        <TouchableOpacity
                        style={styles.quantityButtonPlus}
                        activeOpacity={0.8}
                        onPress={() => setQuantidade(quantidade + 1)}
                    >
                    <Ionicons name="chevron-forward" size={18} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>  
               </View>
                        {/*SESSAO SOBRE*/3}
               <Text style={styles.sectionTitle}>Sobre</Text>
               <Text style={styles.aboutText}>{produto.about}</Text>
 
               {/* SEÇÃO INGREDIENTES */}
               <View style={styles.ingredientsHeader}>
                <MaterialCommunityIcons
                name="chef-hat"
                size={20}
                color="#000000"
                />
                <Text style={styles.sectionTitle}>Ingredientes</Text>
               </View>
               {/* Metodo MAP */}
               {produto.ingredients.map((ingrediente, index) =>(
            <View key={index} style={styles.ingredientRow}>
                <Text style={styles.bullet}></Text>
                <Text style={styles.ingredientText}>{ingrediente}</Text>
            </View>
            ))}
            <View style={styles.bottomSpacer} />
            </ScrollView>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
    },
    scroll: {
    },
    scrollContent: {
    },
    headerButton: {
    },
    headerButtonLeft: {
    },
    headerButtonRight: {
    },
    productImage: {
    },
    brandRow: {
    },
    brandLogo: {
    },
    brandName: {
    },
    productName: {
    },
    priceRow: {
    },
    price: {
    },
    quantitySelector: {
    },
    quantityButtonMinus: {
    },
    quantityButtonPlus: {
    },
    quantityText: {
    },
    sectionTitle: {
    },
    aboutText: {
    },
    ingredientsHeader: {
    },
    ingredientRow: {
    },
    bullet: {
    },
    ingredientText: {
    },
    bottomSpacer: {
    },
    footer: {
    },
    addButton: {
    },
    addButtonText: {
    },
    errorText: {
    },
    backLink: {
    },
});
 