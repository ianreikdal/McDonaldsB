import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen, { RootStackParamList, ItemPedido } from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

import SacolaScreen from "./screens/SacolaScreen";
import PedidosScreen from "./screens/PedidosScreen";
import PedidoFinalizadoScreen from "./screens/PedidoFinalizadoScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

    const [itensSacola, setItensSacola] = useState<ItemPedido[]>([]);

    const adicionarNaSacola = (
        productId: string,
        quantidade: number
    ) => {

        setItensSacola((itensAtuais) => {

            const itemExistente = itensAtuais.find(
                (item) => item.productId === productId
            );

            if (itemExistente) {

                return itensAtuais.map((item) =>
                    item.productId === productId
                        ? {
                            ...item,
                            quantidade: item.quantidade + quantidade,
                        }
                        : item
                );
            }

            return [
                ...itensAtuais,
                {
                    productId: productId,
                    quantidade: quantidade,
                },
            ];
        });
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />

                <Stack.Screen
                    name="Menu"
                    component={MenuScreen}
                />

                <Stack.Screen
                    name="ProductDetail"
                >
                    {(props) => (
                        <ProductDetailScreen
                            {...props}
                            adicionarNaSacola={adicionarNaSacola}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen
                    name="Sacola"
                >
                    {(props) => (
                        <SacolaScreen
                            {...props}
                            itensSacola={itensSacola}
                            setItensSacola={setItensSacola}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen
                    name="Pedidos"
                >
                    {(props) => (
                        <PedidosScreen
                            {...props}
                            itensSacola={itensSacola}
                            setItensSacola={setItensSacola}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen
                    name="PedidoFinalizado"
                    component={PedidoFinalizadoScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}