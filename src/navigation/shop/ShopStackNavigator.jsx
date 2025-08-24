import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetail } from "../../screens";

const Stack = createNativeStackNavigator;

const ShopStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categorias">
      <Stack.screen name="Categorias" component={Categories} />
      <Stack.screen name="Products" component={Products} />
      <Stack.screen name="ProductsDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default ShopStackNavigator;
