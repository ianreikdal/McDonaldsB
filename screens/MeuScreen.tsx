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

type Props = NativeStackScreenProps<RootStackParamList, "Menu">

const combos = [
    {
        id: 1,
        name: 'McOferta Média Big Mac Duplo',
        description: 'Quatro hambúrgueres (100% carne bovina), alface americana...',
        price: '39.90',
        image: require('../images/combo-big-mac-duplo.png'),
    },
    {
        id: 2,
        name: 'Novo Brabo Melt Onion Rings',
        description: 'Dois hambugúrgueres de carne 100% bovina, méquinese, a exclu...',
        price: 'R$ 41,50',
        image: require('../images/combo-brabo-melt-onion-rings.png'),
    },
    {
        id: 3,
        name: 'McCrispy Chicken Elite',
        description: 'Composto por pão tipo brioche com batata, molho Honey&Fire, ...',
        price: 'R$ 39,20',
        image: require('../images/combo-mcrispy-elite.png'),
    },
    {
        id: 4,
        name: 'Duplo Cheddar McMelt',
        description: 'Dois hambúrgueres (100% carne bovina), molho lácteo com queij...',
        price: 'R$ 36,20',
        image: require('../images/combo-duplo-cheddar-mcmelt.png'),
    },
];

const categories = ['Combos', 'Lanches', 'Fritas', 'Bebidas'];

export default function MenuScreen({ navigation }: Props) {
    const [activeCategory, setActiveCategory] = useState<string>('Combos');
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Image
                        source={require('../images/restaurante.png')}
                        style={styles.headerImage}
                        resizeMode="cover"
                    />
                    <TouchableOpacity
                        style={[styles.headerButton, styles.headerButtonLeft]}
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="chevron-back" size={22} color="#000000" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.headerButton, styles.headerButtonRight]}
                        activeOpacity={0.8}
                        onPress={() => { }}
                    >
                        <Feather name="file-text" size={22} color="#000000" />
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
                        <Feather name="clock" size={14} color={'#2BAA38'} />
                        <Text style={styles.statusText}>Aberto!</Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator
                        contentContainerStyle={styles.categoriesRow}
                    >
                        {categories.map((category) => {
                            const isActive = category === activeCategory;
                            return (
                                <TouchableOpacity
                                    key={category}
                                    activeOpacity={0.8}
                                    onPress={() => setActiveCategory(category)}
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
                    <Text style={styles.sectionTitle}>Combos</Text>
                    {combos.map((combo, index) => (
                        <TouchableOpacity
                            key={combo.id}
                            style={[
                                styles.productRow,
                                index > 0 && styles.productRowDivider
                            ]}
                            activeOpacity={0.85}
                            onPress={() => {
                            }}
                        >

                            <View style={styles.productInfo}>
                                <Text style={styles.productName}>
                                    {combo.name}
                                </Text>
                                <Text style={styles.productDescription}>
                                    {combo.description}
                                </Text>
                                <Text style={styles.productPrice}>
                                    R$ {combo.price}
                                </Text>
                            </View>
                            <Image
                                source={combo.image}
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

    },
    scroll: {

    },
    scrollContent: {

    },
    headerImageWrapper: {

    },
    headerImage: {

    },
    headerButton: {

    },
    headerButtonLeft: {

    },
    headerButtonRight: {

    },
    infoCard: {

    },
    infoTopRow: {

    },
    infoLogo: {

    },
    infoTexts: {

    },
    brandName: {

    },
    brandSubtitle: {

    },
    statusRow: {

    },
    statusText: {

    },
    categoriesRow: {

    },
    categoryPill: {

    },
    categoryPillActives: {

    },
    categoryPillText: {

    },
    categoryPillTextActive: {

    },
    categoryText: {

    },
    categoryTextActive: {

    },
    sectionTitle: {

    },
    productRow: {

    },
    productRowDivider: {

    },
    productInfo: {

    },
    productName: {

    },
    productDescription: {

    },
    productPrice: {

    },
    productImage: {

    },

})