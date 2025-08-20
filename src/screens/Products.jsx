import { StyleSheet, Text, View, FlatList } from "react-native";
import products from "../data/products.json";
import { useEffect, useState } from "react";
import RobotoCondensedText from "../components/RobotoCondensedFont";
import Search from "../components/Search";

const Products = ({ category }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

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
        renderItem={({ item }) => (
          <RobotoCondensedText>{item.title}</RobotoCondensedText>
        )}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
