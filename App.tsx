import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen, { RootStackParamList } from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Menu" component={MenuScreen} />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}