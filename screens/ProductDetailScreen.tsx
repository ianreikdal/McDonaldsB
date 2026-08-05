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
            <View
            style = {[
                styles.footer,
                { paddingBottom: Math.max(insets.bottom - 8, 4) }
            ]}
            >
                <TouchableOpacity
                style={styles.addButton}
                activeOpacity={0.85}
                onPress={() => {}}
                >
                    <Text style={styles.addButtonText}>Adicionar à Sacola</Text>
                </TouchableOpacity>
            </View>
        </View>
    
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 96,
        paddingBottom: 8,
    },
    headerButton: {
        position: 'absolute',
        top: 48,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    headerButtonLeft: {
        left: 16,
    },
    headerButtonRight: {
        right: 16,
    },
    productImage: {
        width: '100%',
        height: 220,
        marginVertical: 12,

    },
    brandRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    brandLogo: {
        width: 28,
        height: 28, 
        borderRadius: 6,
    },
    brandName: {
        fontSize: 14,
        color: '#707070',
        fontWeight: '500',
    },
    productName: {
        fontSize: 22,
        fontWeight: '700',
        color: '#000000',
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 24,
    },
    price: {
        fontSize: 22,
        fontWeight: '700',
        color: '#000000',
    },
    quantitySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    quantityButtonMinus: {
        width: 36,
        height: 36,
        borderRadius: 8,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityButtonPlus: {
        backgroundColor: '#DA291C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
        minWidth: 24,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 10,
    },
    aboutText: {
        fontSize: 14,
        color: '#707070',
        lineHeight: 22,
        marginBottom: 24,
    },
    ingredientsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    ingredientRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
        paddingLeft: 4,
    },
    bullet: {
        fontSize: 14,
        color: '#707070',
        marginRight: 8,
        lineHeight: 20,
    },
    ingredientText: {
        flex: 1,
        fontSize: 14,
        color: '#707070',
        lineHeight: 20,
    },
    bottomSpacer: {
        height: 40,
    },
    footer: {
        paddingHorizontal: 20,
        paddingTop: 4,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
    },
    addButton: {
        backgroundColor: '#FFC72C',
        borderRadius: 22,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {   
        fontSize: 15,
        fontWeight: '700',
        color: '#000000',
    },
    errorText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 40,
        color: '#000000',
    },
    backLink: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 16,
        color: '#DA291C',
        fontWeight: '600',
    },
});
 