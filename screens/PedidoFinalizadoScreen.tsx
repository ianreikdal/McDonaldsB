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
import type { RootStackParamList } from "./HomeScreen";

import { getProdutoById } from "../data/produtos";

type Props = NativeStackScreenProps<
    RootStackParamList,
    'PedidoFinalizado'
>;

type ItemPedido = {
    productId: string;
    quantidade: number;
};

export default function PedidoFinalizadoScreen({
    navigation,
    route,
}: Props) {

    const itens = route.params?.itens || [];
    const total = route.params?.total || 0;

    const formatarPreco = (valor: number) => {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FFFFFF"
            />

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.successContainer}>
                    <View style={styles.successIcon}>
                        <Ionicons
                            name="checkmark"
                            size={42}
                            color="#FFFFFF"
                        />
                    </View>

                    <Text style={styles.title}>
                        Pedido finalizado!
                    </Text>

                    <Text style={styles.subtitle}>
                        Pagamento efetuado com sucesso.
                    </Text>
                </View>

                <View style={styles.orderCard}>
                    <Text style={styles.sectionTitle}>
                        Resumo do pedido
                    </Text>

                    {itens.map((item, index) => {
                        const produto = getProdutoById(
                            item.productId
                        );

                        if (!produto) {
                            return null;
                        }

                        return (
                            <View
                                key={item.productId}
                                style={[
                                    styles.productRow,
                                    index > 0 &&
                                    styles.productDivider,
                                ]}
                            >
                                <Image
                                    source={produto.image}
                                    style={styles.productImage}
                                    resizeMode="contain"
                                />

                                <View style={styles.productInfo}>
                                    <Text
                                        style={styles.productName}
                                    >
                                        {produto.name}
                                    </Text>

                                    <Text style={styles.quantityText}>
                                        Quantidade: {item.quantidade}
                                    </Text>
                                </View>
                            </View>
                        );
                    })}

                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>
                            Total pago
                        </Text>

                        <Text style={styles.totalPrice}>
                            {formatarPreco(total)}
                        </Text>
                    </View>
                </View>

                <View style={styles.paymentCard}>
                    <View style={styles.paymentIcon}>
                        <Ionicons
                            name="card"
                            size={22}
                            color="#000000"
                        />
                    </View>

                    <View style={styles.paymentInfo}>
                        <Text style={styles.paymentTitle}>
                            Pagamento efetuado
                        </Text>

                        <Text style={styles.paymentText}>
                            Seu pagamento foi confirmado.
                        </Text>
                    </View>
                </View>

                <View style={styles.infoCard}>
                    <Ionicons
                        name="information-circle-outline"
                        size={20}
                        color="#000000"
                    />

                    <Text style={styles.infoText}>
                        Aguarde a preparação do seu pedido.
                    </Text>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.menuButton}
                    activeOpacity={0.85}
                    onPress={() =>
                        navigation.navigate("Menu")
                    }
                >
                    <Text style={styles.menuButtonText}>
                        Voltar ao cardápio
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

    scroll: {
        flex: 1,
    },

    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 36,
        paddingBottom: 30,
    },

    successContainer: {
        alignItems: "center",
        marginBottom: 32,
    },

    successIcon: {
        width: 82,
        height: 82,
        borderRadius: 41,
        backgroundColor: "#2BAA3B",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 18,
    },

    title: {
        fontSize: 25,
        fontWeight: "700",
        color: "#000000",
        textAlign: "center",
        marginBottom: 8,
    },

    subtitle: {
        fontSize: 14,
        color: "#707070",
        textAlign: "center",
    },

    orderCard: {
        backgroundColor: "#F2F2F2",
        borderRadius: 18,
        padding: 18,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000000",
        marginBottom: 10,
    },

    productRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
    },

    productDivider: {
        borderTopWidth: 1,
        borderTopColor: "#DDDDDD",
    },

    productImage: {
        width: 72,
        height: 60,
        marginRight: 12,
    },

    productInfo: {
        flex: 1,
    },

    productName: {
        fontSize: 14,
        fontWeight: "700",
        color: "#000000",
        marginBottom: 5,
    },

    quantityText: {
        fontSize: 12,
        color: "#707070",
    },

    totalRow: {
        borderTopWidth: 1,
        borderTopColor: "#DDDDDD",
        marginTop: 8,
        paddingTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    totalLabel: {
        fontSize: 16,
        fontWeight: "700",
        color: "#000000",
    },

    totalPrice: {
        fontSize: 19,
        fontWeight: "700",
        color: "#000000",
    },

    paymentCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#EEEEEE",
        borderRadius: 16,
        padding: 16,
        marginTop: 18,
    },

    paymentIcon: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#FFC72C",
        alignItems: "center",
        justifyContent: "center",
    },

    paymentInfo: {
        marginLeft: 12,
        flex: 1,
    },

    paymentTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: "#000000",
        marginBottom: 4,
    },

    paymentText: {
        fontSize: 12,
        color: "#707070",
    },

    infoCard: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 14,
        padding: 14,
        backgroundColor: "#F2F2F2",
        borderRadius: 14,
    },

    infoText: {
        flex: 1,
        marginLeft: 10,
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

    menuButton: {
        backgroundColor: "#FFC72C",
        borderRadius: 22,
        paddingVertical: 13,
        alignItems: "center",
        justifyContent: "center",
    },

    menuButtonText: {
        fontSize: 15,
        fontWeight: "700",
        color: "#000000",
    },
});