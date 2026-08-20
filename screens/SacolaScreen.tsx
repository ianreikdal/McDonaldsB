import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type {
    RootStackParamList,
    ItemPedido
} from "./HomeScreen";

import { getProdutoById } from "../data/produtos";

type Props = NativeStackScreenProps<
    RootStackParamList,
    'Sacola'
> & {
    itensSacola: ItemPedido[];

    setItensSacola: React.Dispatch<
        React.SetStateAction<ItemPedido[]>
    >;
};

export default function SacolaScreen({
    navigation,
    itensSacola,
    setItensSacola,
}: Props) {

    const alterarQuantidade = (
        productId: string,
        novaQuantidade: number
    ) => {

        if (novaQuantidade <= 0) {

            setItensSacola(
                itensSacola.filter(
                    (item) => item.productId !== productId
                )
            );

            return;
        }

        setItensSacola(
            itensSacola.map((item) =>
                item.productId === productId
                    ? {
                        ...item,
                        quantidade: novaQuantidade,
                    }
                    : item
            )
        );
    };

    const calcularPreco = (
        preco: string,
        quantidade: number
    ) => {

        const valor = Number(
            preco
                .replace("R$", "")
                .replace(/\./g, "")
                .replace(",", ".")
                .trim()
        );

        return valor * quantidade;
    };

    const formatarPreco = (valor: number) => {

        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    const total = itensSacola.reduce(
        (soma, item) => {

            const produto = getProdutoById(
                item.productId
            );

            if (!produto) {
                return soma;
            }

            return (
                soma +
                calcularPreco(
                    produto.price,
                    item.quantidade
                )
            );
        },
        0
    );

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FFFFFF"
            />

            {/* CABEÇALHO */}
            <View style={styles.header}>

                <TouchableOpacity
                    style={styles.headerButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons
                        name="chevron-back"
                        size={22}
                        color="#000000"
                    />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>
                    Sua sacola
                </Text>

                <View style={styles.headerButton} />

            </View>

            {/* SACOLA VAZIA */}
            {itensSacola.length === 0 ? (

                <View style={styles.emptyContainer}>

                    <Ionicons
                        name="bag-outline"
                        size={64}
                        color="#707070"
                    />

                    <Text style={styles.emptyTitle}>
                        Sua sacola está vazia
                    </Text>

                    <Text style={styles.emptyText}>
                        Adicione produtos do cardápio para continuar.
                    </Text>

                    <TouchableOpacity
                        style={styles.menuButton}
                        activeOpacity={0.85}
                        onPress={() =>
                            navigation.navigate("Menu")
                        }
                    >
                        <Text style={styles.menuButtonText}>
                            Ver cardápio
                        </Text>
                    </TouchableOpacity>

                </View>

            ) : (

                <>

                    <ScrollView
                        style={styles.scroll}
                        contentContainerStyle={
                            styles.scrollContent
                        }
                        showsVerticalScrollIndicator={false}
                    >

                        <Text style={styles.sectionTitle}>
                            Seu pedido
                        </Text>

                        {/* PRODUTOS */}
                        {itensSacola.map(
                            (item, index) => {

                                const produto =
                                    getProdutoById(
                                        item.productId
                                    );

                                if (!produto) {
                                    return null;
                                }

                                const precoTotal =
                                    calcularPreco(
                                        produto.price,
                                        item.quantidade
                                    );

                                return (

                                    <View
                                        key={item.productId}
                                        style={[
                                            styles.productRow,

                                            index > 0 &&
                                            styles.productDivider,
                                        ]}
                                    >

                                        {/* IMAGEM */}
                                        <Image
                                            source={
                                                produto.image
                                            }
                                            style={
                                                styles.productImage
                                            }
                                            resizeMode="contain"
                                        />

                                        {/* INFORMAÇÕES */}
                                        <View
                                            style={
                                                styles.productInfo
                                            }
                                        >

                                            <Text
                                                style={
                                                    styles.productName
                                                }
                                            >
                                                {produto.name}
                                            </Text>

                                            <Text
                                                style={
                                                    styles.productPrice
                                                }
                                            >
                                                {formatarPreco(
                                                    precoTotal
                                                )}
                                            </Text>

                                            {/* QUANTIDADE */}
                                            <View
                                                style={
                                                    styles.quantitySelector
                                                }
                                            >

                                                {/* DIMINUIR */}
                                                <TouchableOpacity
                                                    style={
                                                        styles.quantityButton
                                                    }
                                                    activeOpacity={0.8}
                                                    onPress={() =>
                                                        alterarQuantidade(
                                                            item.productId,
                                                            item.quantidade - 1
                                                        )
                                                    }
                                                >
                                                    <Ionicons
                                                        name="remove"
                                                        size={18}
                                                        color="#000000"
                                                    />
                                                </TouchableOpacity>

                                                <Text
                                                    style={
                                                        styles.quantityText
                                                    }
                                                >
                                                    {
                                                        item.quantidade
                                                    }
                                                </Text>

                                                {/* AUMENTAR */}
                                                <TouchableOpacity
                                                    style={[
                                                        styles.quantityButton,
                                                        styles.quantityButtonPlus,
                                                    ]}
                                                    activeOpacity={0.8}
                                                    onPress={() =>
                                                        alterarQuantidade(
                                                            item.productId,
                                                            item.quantidade + 1
                                                        )
                                                    }
                                                >
                                                    <Ionicons
                                                        name="add"
                                                        size={18}
                                                        color="#FFFFFF"
                                                    />
                                                </TouchableOpacity>

                                            </View>

                                        </View>

                                    </View>

                                );
                            }
                        )}

                        {/* TOTAL */}
                        <View style={styles.totalBox}>

                            <Text style={styles.totalLabel}>
                                Total
                            </Text>

                            <Text style={styles.totalPrice}>
                                {formatarPreco(total)}
                            </Text>

                        </View>

                        <View
                            style={
                                styles.bottomSpacer
                            }
                        />

                    </ScrollView>

                    {/* BOTÃO CONTINUAR */}
                    <View style={styles.footer}>

                        <TouchableOpacity
                            style={styles.continueButton}
                            activeOpacity={0.85}
                            onPress={() =>
                                navigation.navigate(
                                    "Pedidos"
                                )
                            }
                        >
                            <Text
                                style={
                                    styles.continueButtonText
                                }
                            >
                                Continuar
                            </Text>
                        </TouchableOpacity>

                    </View>

                </>

            )}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    header: {
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE",
    },

    headerButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#F2F2F2",
        alignItems: "center",
        justifyContent: "center",
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000000",
    },

    scroll: {
        flex: 1,
    },

    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 20,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000000",
        marginBottom: 16,
    },

    productRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
    },

    productDivider: {
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE",
    },

    productImage: {
        width: 100,
        height: 80,
        marginRight: 14,
    },

    productInfo: {
        flex: 1,
    },

    productName: {
        fontSize: 15,
        fontWeight: "700",
        color: "#000000",
        marginBottom: 6,
    },

    productPrice: {
        fontSize: 14,
        fontWeight: "600",
        color: "#000000",
        marginBottom: 10,
    },

    quantitySelector: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    quantityButton: {
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: "#F2F2F2",
        alignItems: "center",
        justifyContent: "center",
    },

    quantityButtonPlus: {
        backgroundColor: "#DA291C",
    },

    quantityText: {
        minWidth: 20,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "700",
        color: "#000000",
    },

    totalBox: {
        marginTop: 24,
        paddingTop: 18,
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    totalLabel: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000000",
    },

    totalPrice: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000000",
    },

    footer: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE",
    },

    continueButton: {
        backgroundColor: "#FFC72C",
        borderRadius: 22,
        paddingVertical: 13,
        alignItems: "center",
        justifyContent: "center",
    },

    continueButtonText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#000000",
    },

    emptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 30,
    },

    emptyTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000000",
        marginTop: 16,
        marginBottom: 8,
    },

    emptyText: {
        fontSize: 14,
        color: "#707070",
        textAlign: "center",
        lineHeight: 21,
        marginBottom: 24,
    },

    menuButton: {
        backgroundColor: "#FFC72C",
        borderRadius: 22,
        paddingVertical: 13,
        paddingHorizontal: 30,
    },

    menuButtonText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#000000",
    },

    bottomSpacer: {
        height: 20,
    },

});