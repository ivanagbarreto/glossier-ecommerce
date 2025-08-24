import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetail } from "../../screens";
import { colors } from "../../global/colors";

const Stack = createNativeStackNavigator();

const ShopStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categorias"
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
      <Stack.Screen name="Categorias" component={Categories}  options={{ title: "Categorias".toUpperCase() }}/>
      <Stack.Screen name="Productos" component={Products}  options={{ title: "Categorias".toUpperCase() }}/>
      <Stack.Screen name="ProductoDetail" component={ProductDetail} options={{ title: "Categorias".toUpperCase() }} />
    </Stack.Navigator>
  );
};

export default ShopStackNavigator;
