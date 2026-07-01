import { useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView, // Permite Rolar a tela
    StyleSheet,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { Ionicons, Feather } from "@expo/vector-icons";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./HomeScreen";

type Props = NativeStackScreenProps<RootStackParamList, 'Menu'>

type Product = {
    id: string;
    name: string;
    description: string;
    price: string;
    image: number;
}

const combos: Product[] = [
    {
        id: 'combo-1',
        name: 'McOferta Média Big Mac Duplo',
        description: 'Quatro hambúrgueres (100% carne bovina), alface americana...',
        price: 'R$ 39,90',
        image: require('../images/combo-big-mac-duplo.png'),
    },
    {
        id: 'combo-2',
        name: 'Novo Brabo Melt Onion Rings',
        description: 'Dois hambúrgueres de carne 100% bovina, méquinese, a exclu...',
        price: 'R$ 41,50',
        image: require('../images/combo-brabo-melt-onion-rings.png'),
    },
    {
        id: 'combo-3',
        name: 'McCrispy Chicken Elite',
        description: 'Composto por pão tipo brioche com batata, molho Honey&Fire, ...',
        price: 'R$ 39,90',
        image: require('../images/combo-mcrispy-elite.png'),
    },
    {
        id: 'combo-4',
        name: 'Duplo Cheddar McMelt',
        description: 'Dois hambúgueres (100% carne bovina), molho lácteo com queij...',
        price: 'R$ 36,20',
        image: require('../images/combo-duplo-cheddar-mcmelt.png'),
    },
];

const lanches: Product[] = [
    {
        id: 'lanche-1',
        name: 'Big Mac',
        description: 'Quatro hambúrgueres (100% carne bovina), alface americana...',
        price: 'R$ 39,90',
        image: require('../images/lanche-big-mac.png'),
    },
    {
        id: 'lanche-2',
        name: 'Duplo Quarterão',
        description: 'Dois hambúrgueres de carne 100% bovina, méquinese, a exclu...',
        price: 'R$ 41,50',
        image: require('../images/lanche-duplo-quarterao.png')
    },
    {
        id: 'lanche-3',
        name: 'McMelt',
        description: 'Composto por pão tipo brioche com batata, molho Honey&Fire, ...',
        price: 'R$ 39,90',
        image: require('../images/lanche-mcmelt.png'),
    },
    {
        id: 'lanche-4',
        name: 'McNífico Bacon',
        description: 'Dois hambúrgueres (100% carne bovina), molho lácteo com queij...',
        price: 'R$ 36,20',
        image: require('../images/lanche-mcnifico-bacon.png')
    },
];

const fritas: Product[] = [
    {
        id: 'fritas-1',
        name: 'Fritas Grande',
        description: 'Batatas fritas crocantes e sequinhas. Vem bastante!',
        price: 'R$ 10,90',
        image: require('../images/fritas-grande.png'),
    },
    {
        id: 'fritas-2',
        name: 'Fritas Média',
        description: 'Batatas fritas crocantes e sequinhas. Vem bastante!',
        price: 'R$ 9,90',
        image: require('../images/fritas-media.png'),
    },
    {
        id: 'fritas-3',
        name: 'Fritas Pequena',
        description: 'Batatas fritas crocantes e sequinhas. Vem bastante!',
        price: 'R$ 5,90',
        image: require('../images/fritas-pequena.png'),
    },
];

const bebidas: Product[] = [
    {
        id: 'bebida-1',
        name: 'Coca-Cola',
        description: 'Coca-Cola gelada para acompanhar seu lanche.',
        price: 'R$ 5,90',
        image: require('../images/coca-cola.png'),
    },
    {
        id: 'bebida-2',
        name: 'Fanta Laranja',
        description: 'Fanta Laranja gelada para acompanhar seu lanche.',
        price: 'R$5,90',
        image: require('../images/fanta-laranja.png'),
    },
    {
        id: 'bebida-3',
        name: 'Agua Mineral',
        description: 'Água mineral sem gás para acompanhar seu lanche.',
        price: 'R$5,90',
        image: require('../images/agua.png'),
    },
]

const categories = ['Combos', 'Lanches', 'Fritas', 'Bebidas'];

function getProdutos(categoriaSelecionada: string): Product[] {
    switch (categoriaSelecionada) {
        case 'Combos':
            return combos;
        case 'Lanches':
            return lanches;
        case 'Fritas':
            return fritas;
        case 'Bebidas':
            return bebidas;
        default:
            return combos;
    }
}

export default function MenuScreen({ navigation }: Props) {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('Combos');

    const produtosDaCategoria = getProdutos(categoriaSelecionada);
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor={"#000000"} />
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headerImageWrapper}>
                    <Image
                        source={require('../images/restaurante.png')}
                        style={styles.headerImage}
                        resizeMode="cover"
                    />
                    <TouchableOpacity
                        style={[styles.headerButton, styles.headerButtonLeft]}
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack}
                    >
                        <Ionicons name="chevron-back" size={22} color={'#000000'} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.headerButton, styles.headerButtonRight]}
                        activeOpacity={0.8}
                        onPress={() => { }}
                    >
                        <Feather name="file-text" size={20} color={'#000000'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.infoCard}>
                    <View style={styles.infoTopRow}>
                        <Image
                            source={require('../images/logo.png')}
                            style={styles.infoLogo}
                            resizeMode="contain"
                        />
                        <View style={styles.infoTexts}>
                            <Text style={styles.brandName}>McDonald's</Text>
                            <Text style={styles.brandSubtitle}>O melhor
                                fast food do mundo
                            </Text>
                        </View>
                    </View>
                    <View style={styles.statusRow}>
                        <Feather name="clock" size={14} color={'#2BAA3B'} />
                        <Text style={styles.statusText}>Aberto!</Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.categoriesRow}
                    >
                        {categories.map((category) => {
                            const isActive = category === categoriaSelecionada;
                            return (
                                <TouchableOpacity
                                    key={category}
                                    activeOpacity={0.8}
                                    onPress={() => setCategoriaSelecionada(category)}
                                    style={[
                                        styles.categoryPill,
                                        isActive && styles.categoryPillActives
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.categoryText,
                                            isActive && styles.categoryTextActive,
                                        ]}
                                    >
                                        {category}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                    <Text style={styles.sectionTitle}>{categoriaSelecionada}</Text>
                    {produtosDaCategoria.map((produto, index) => (
                        <TouchableOpacity
                            key={produto.id}
                            style={[
                                styles.productRow,
                                index > 0 && styles.productRowDivider,
                            ]}
                            activeOpacity={0.85}
                            onPress={() => {

                            }}
                        >
                            <View style={styles.productInfo}>
                                <Text style={styles.productName}>{produto.name}</Text>
                                <Text style={styles.productDescription} numberOfLines={2}>
                                    {produto.description}
                                </Text>
                                <Text style={styles.productPrice}>{produto.price}</Text>
                            </View>
                            <Image
                                source={produto.image}
                                style={styles.productImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    scroll: {
        flex: 1
    },
    scrollContent: {
        paddingBottom: 32
    },
    headerImageWrapper: {
        width: '100%',
        height: 240,
        position: 'relative',
        backgroundColor: '#000',
    },
    headerImage: {
        width: '100%',
        height: '100%',
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
        // Sombra em iOS e Android
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
    infoCard: {
        backgroundColor: '#FFFFFF',
        marginTop: -24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 16,
        minHeight: 600,
    },
    infoTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    infoLogo: {
        width: 48,
        height: 48,
        borderRadius: 8,
    },
    infoTexts: {
        flex: 1,
    },
    brandName: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '700',
    },
    brandSubtitle: {
        fontSize: 13,
        color: '#707070',
        marginTop: 2,
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginTop: 12,
    },
    statusText: {
        color: '#2BAA3B',
        fontSize: 13,
        fontWeight: '600',
    },
    categoriesRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 18,
        paddingRight: 12,
    },
    categoryPill: {
        height: 36,
        paddingHorizontal: 18,
        borderRadius: 18,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryPillActives: {
        backgroundColor: '#FFC72C'
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000000'
    },
    categoryTextActive: {
        color: '#000000'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 8,
    },
    productRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        gap: 12,
    },
    productRowDivider: {
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 4
    },
    productDescription: {
        fontSize: 13,
        color: '#707070',
        lineHeight: 18,
        marginBottom: 8,
    },
    productPrice: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000000',
    },
    productImage: {
        width: 90,
        height: 70,
    },
})