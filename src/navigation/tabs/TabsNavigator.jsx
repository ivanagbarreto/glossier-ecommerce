import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStackNavigator from "../shop/ShopStackNavigator";
import CartStackNavigator from "../cart/CartStackNavigator";
import Icon from "react-native-vector-icons/Feather";
import { colors } from "../../global/colors";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shopping-bag"
              size={20}
              color={focused ? colors.darkGray : colors.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shopping-cart"
              size={20}
              color={focused ? colors.darkGray : colors.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabsNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.mediumGray,
  },
});
