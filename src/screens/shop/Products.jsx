import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import products from "../../data/products.json";
import { useEffect, useState } from "react";
import RobotoCondensedText from "../../components/RobotoCondensedFont";
import Search from "../../components/Search";

const Products = ({ navigation, route }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { category } = route.params;
  const renderProductItem = ({ item }) => (
    <View>
      <Pressable onPress={() => navigation.navigate("ProductoDetail")}>
        <RobotoCondensedText>{item.title}</RobotoCondensedText>
      </Pressable>
    </View>
  );

  useEffect(() => {
    const categoryProducts = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
    if (keyword) {
      const productsByKeyword = categoryProducts.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      );
      setFilteredProducts(productsByKeyword);
    } else {
      setFilteredProducts(categoryProducts);
    }
  }, [category, keyword]);

  return (
    <View>
      <Search setKeyword={setKeyword} />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
