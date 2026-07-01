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
            <SafeAreaView>

            </SafeAreaView>
        )
    }
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
    errorText:{
    },
    backLink: {
    },
});