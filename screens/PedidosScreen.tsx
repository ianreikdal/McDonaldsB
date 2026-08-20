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
    ItemPedido,
} from "./HomeScreen";

import { getProdutoById } from "../data/produtos";

type Props = NativeStackScreenProps<
    RootStackParamList,
    "Pedidos"
> & {
    itensSacola: ItemPedido[];

    setItensSacola: React.Dispatch<
        React.SetStateAction<ItemPedido[]>
    >;
};

export default function PedidosScreen({
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
                    (item) =>
                        item.productId !== productId
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

    const finalizarPedido = () => {

        navigation.navigate(
            "PedidoFinalizado",
            {
                itens: itensSacola,
                total: total,
            }
        );

        setItensSacola([]);
    };

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
                    Seu pedido
                </Text>

                <View style={styles.headerButton} />

            </View>

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={
                    styles.scrollContent
                }
                showsVerticalScrollIndicator={false}
            >

                {/* STATUS */}
                <View style={styles.statusCard}>

                    <View style={styles.statusIcon}>

                        <Ionicons
                            name="restaurant-outline"
                            size={24}
                            color="#000000"
                        />

                    </View>

                    <View style={styles.statusInfo}>

                        <Text style={styles.statusTitle}>
                            Pedido em andamento
                        </Text>

                        <Text style={styles.statusText}>
                            Confira os produtos antes de efetuar o pagamento.
                        </Text>

                    </View>

                </View>

                {/* PRODUTOS */}
                <Text style={styles.sectionTitle}>
                    Produtos
                </Text>

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
                                        numberOfLines={2}
                                    >
                                        {produto.name}
                                    </Text>

                                    <Text
                                        style={
                                            styles.unitPrice
                                        }
                                    >
                                        {produto.price} cada
                                    </Text>

                                    <View
                                        style={
                                            styles.bottomRow
                                        }
                                    >

                                        {/* QUANTIDADE */}
                                        <View
                                            style={
                                                styles.quantitySelector
                                            }
                                        >

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

                                        {/* PREÇO */}
                                        <Text
                                            style={
                                                styles.productPrice
                                            }
                                        >
                                            {formatarPreco(
                                                precoTotal
                                            )}
                                        </Text>

                                    </View>

                                </View>

                            </View>

                        );
                    }
                )}

                {/* RESUMO */}
                <View style={styles.summary}>

                    <View style={styles.summaryRow}>

                        <Text style={styles.summaryLabel}>
                            Subtotal
                        </Text>

                        <Text style={styles.summaryValue}>
                            {formatarPreco(total)}
                        </Text>

                    </View>

                    <View style={styles.summaryRow}>

                        <Text style={styles.summaryLabel}>
                            Taxa
                        </Text>

                        <Text style={styles.summaryValue}>
                            R$ 0,00
                        </Text>

                    </View>

                    <View style={styles.totalRow}>

                        <Text style={styles.totalLabel}>
                            Total
                        </Text>

                        <Text style={styles.totalPrice}>
                            {formatarPreco(total)}
                        </Text>

                    </View>

                </View>

                {/* PAGAMENTO */}
                <View style={styles.paymentCard}>

                    <Ionicons
                        name="card-outline"
                        size={22}
                        color="#000000"
                    />

                    <View style={styles.paymentInfo}>

                        <Text style={styles.paymentTitle}>
                            Pagamento
                        </Text>

                        <Text style={styles.paymentText}>
                            Pagamento no próximo passo
                        </Text>

                    </View>

                </View>

                <View style={styles.bottomSpacer} />

            </ScrollView>

            {/* BOTÃO PAGAR */}
            <View style={styles.footer}>

                <TouchableOpacity
                    style={[
                        styles.paymentButton,

                        itensSacola.length === 0 &&
                        styles.paymentButtonDisabled,
                    ]}
                    activeOpacity={0.85}
                    disabled={
                        itensSacola.length === 0
                    }
                    onPress={finalizarPedido}
                >

                    <Text
                        style={
                            styles.paymentButtonText
                        }
                    >
                        Pagar {formatarPreco(total)}
                    </Text>

                </TouchableOpacity>

            </View>

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
        paddingTop: 20,
        paddingBottom: 20,
    },

    statusCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        borderRadius: 16,
        padding: 16,
        marginBottom: 24,
    },

    statusIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#FFC72C",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 12,
    },

    statusInfo: {
        flex: 1,
    },

    statusTitle: {
        fontSize: 15,
        fontWeight: "700",
        color: "#000000",
        marginBottom: 4,
    },

    statusText: {
        fontSize: 12,
        color: "#707070",
        lineHeight: 18,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000000",
        marginBottom: 12,
    },

    productRow: {
        flexDirection: "row",
        paddingVertical: 16,
    },

    productDivider: {
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE",
    },

    productImage: {
        width: 90,
        height: 75,
        marginRight: 14,
    },

    productInfo: {
        flex: 1,
    },

    productName: {
        fontSize: 15,
        fontWeight: "700",
        color: "#000000",
        marginBottom: 5,
    },

    unitPrice: {
        fontSize: 12,
        color: "#707070",
        marginBottom: 10,
    },

    bottomRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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

    productPrice: {
        fontSize: 14,
        fontWeight: "700",
        color: "#000000",
    },

    summary: {
        marginTop: 20,
        paddingTop: 18,
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE",
    },

    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    summaryLabel: {
        fontSize: 14,
        color: "#707070",
    },

    summaryValue: {
        fontSize: 14,
        color: "#000000",
    },

    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        paddingTop: 14,
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE",
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

    paymentCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        borderRadius: 14,
        padding: 16,
        marginTop: 24,
    },

    paymentInfo: {
        marginLeft: 12,
    },

    paymentTitle: {
        fontSize: 15,
        fontWeight: "700",
        color: "#000000",
        marginBottom: 4,
    },

    paymentText: {
        fontSize: 12,
        color: "#707070",
    },

    footer: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#EEEEEE",
    },

    paymentButton: {
        backgroundColor: "#FFC72C",
        borderRadius: 22,
        paddingVertical: 13,
        alignItems: "center",
        justifyContent: "center",
    },

    paymentButtonDisabled: {
        backgroundColor: "#E0E0E0",
    },

    paymentButtonText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#000000",
    },

    bottomSpacer: {
        height: 20,
    },

});