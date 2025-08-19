import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import productCategories from "../data/productCategories.json";
import FlatCard from "../components/FlatCard";
import { categoryImages } from "../constants/categoryImages";

const Categories = () => {
  const renderCategoryItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <FlatCard>
        <Image
          style={{ width: 40, height: 40 }}
          source={categoryImages[item.image]}
          resizeMode="contain"
        />
        <Text> {item.title}</Text>
      </FlatCard>
    </View>
  );
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
  itemContainer: {
    padding: 10,
  },
});
