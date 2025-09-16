import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../../screens";
import { colors } from "../../global/colors";
import Header from "../../components/Header";

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Carrito"
      screenOptions={{
        header: ({route})=>(<Header title="Glossier" 
          subtitle={route.name}
          />)
      }}
    >
      <Stack.Screen name="Carrito" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;
