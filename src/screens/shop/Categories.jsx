import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  ImageBackground,
} from "react-native";

import FlatCard from "../../components/FlatCard";
import { categoryImages } from "../../constants/categoryImages";
import { colors } from "../../global/colors";
import RobotoCondensedText from "../../components/RobotoCondensedFont";
import Icon from "react-native-vector-icons/Feather";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../../store/slices/shopSlice";
import { useGetCategoriesQuery } from "../../services/shopApi";
import { ActivityIndicator } from "react-native";

const Categories = ({ navigation }) => {
  const { data: productCategories, isLoading, error } = useGetCategoriesQuery();

  const dispatch = useDispatch();

  const handleSelectCategory = (category) => {
    dispatch(setSelectedCategory(category));
    navigation.navigate("Productos");
  };

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#f2cad0ff" />
      </View>
    );
  }

  if (error) return <Text>Error: {JSON.stringify(error)}</Text>;
  if (!productCategories) return <Text>No hay categorías</Text>;

  const renderCategoryItem = ({ item }) => {
    return (
      <Pressable onPress={() => handleSelectCategory(item.title)}>
        <View>
          <FlatCard style={styles.container}>
            <RobotoCondensedText style={styles.itemTitle}>
              {" "}
              {item.title}
            </RobotoCondensedText>
            <Icon
              name="chevron-right"
              size={15}
              color={colors.darkGray}
              marginLeft="auto"
              style={item.icon}
            />
          </FlatCard>
        </View>
      </Pressable>
    );
  };
  return (
    <FlatList
      data={productCategories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    flexDirection: "row",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
