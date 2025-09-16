import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetail } from "../../screens";
import { colors } from "../../global/colors";
import Header from "../../components/Header";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const ShopStackNavigator = () => {
  const selectedCategory = useSelector(state => state.shopReducer.selectedCategory)
  return (
    <Stack.Navigator
      initialRouteName="Categorias"
      screenOptions={{
        header: ({route})=>(<Header title="Glossier" 
          subtitle={route.name==="Categorias"?"Home": selectedCategory}
          />)
      }}
    >
      <Stack.Screen name="Categorias" component={Categories}  options={{ title: "Categorias".toUpperCase() }}/>
      <Stack.Screen name="Productos" component={Products}  options={{ title: "Categorias".toUpperCase() }}/>
      <Stack.Screen name="ProductoDetail" component={ProductDetail} options={{ title: "Categorias".toUpperCase() }} />
    </Stack.Navigator>
  );
};

export default ShopStackNavigator;