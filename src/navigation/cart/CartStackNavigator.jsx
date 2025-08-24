import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../../screens";
import { colors } from "../../global/colors";

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Carrito"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.lightPink,
        },
        headerTitleStyle: {
          fontFamily: "PressStart2P-Regular",
          fontSize: 12,
          textTransform: "uppercase",
        },
      }}
    >
      <Stack.Screen name="Carrito" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;
