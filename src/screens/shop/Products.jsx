import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import products from "../../data/products.json";
import { useEffect, useState } from "react";
import RobotoCondensedText from "../../components/RobotoCondensedFont";
import Search from "../../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProduct } from "../../store/slices/shopSlice";
import { colors } from "../../global/colors";

const screenWidth = Dimensions.get("window").width;
const numColumns = 2;
const cardMargin = 10;
const cardWidth = (screenWidth - cardMargin * (numColumns + 1)) / numColumns;

const Products = ({ navigation }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const category = useSelector((state) => state.shopReducer.selectedCategory);
  const dispatch = useDispatch();

  const handleSelectProduct = (product) => {
    dispatch(setSelectedProduct(product));
    navigation.navigate("ProductoDetail");
  };

  useEffect(() => {
    const categoryProducts = products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
    if (keyword) {
      const productsByKeyword = categoryProducts.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredProducts(productsByKeyword);
    } else {
      setFilteredProducts(categoryProducts);
    }
  }, [category, keyword]);

  const renderProductItem = ({ item }) => (
    <Pressable
      style={[styles.card, { width: cardWidth }]}
      onPress={() => handleSelectProduct(item)}
    >
      <Image source={{ uri: item.mainImage }} style={styles.image} />
      <RobotoCondensedText style={styles.title}>
        {item.title}
      </RobotoCondensedText>
      <Text style={styles.price}>${item.price}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Search setKeyword={setKeyword} />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        numColumns={numColumns}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: cardMargin,
        }}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: cardMargin,
  },
  card: {
    backgroundColor: colors.cardbackground,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    padding: 8,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  title: {
    fontSize: 14,
    marginVertical: 8,
    textAlign: "center",
    marginBottom: 8,
  },
  price: {
    marginTop: 8,
  },
});
