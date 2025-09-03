import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../../global/colors";
import { addItemToCart } from "../../store/slices/cartSlice";
import { useState } from "react";

const ProductDetail = () => {
  const product = useSelector((state) => state.shopReducer.selectedProduct);

  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor seleccioná un talle");
      return;
    }
    dispatch(addItemToCart({ product: { ...product, size: selectedSize }, quantity: 1 })
    );
  };

  return (
    <ScrollView style={styles.productContainer}>
      <Text style={styles.textBrand}>{product.brand}</Text>
      <Text style={styles.textTitle}>{product.title}</Text>
      <Image
        source={{ uri: product.mainImage }}
        alt={product.title}
        width="100%"
        height={width * 0.7}
        resizeMode="contain"
      />
      <Text style={styles.longDescription}>{product.longDescription}</Text>
      <View style={styles.sizeContainer}>
        <Text style={styles.sizeLabel}>Seleccioná tu talle:</Text>
        <View style={styles.sizesRow}>
          {["S", "M", "L", "XL"].map((size) => (
            <Pressable
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.sizeButtonSelected,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.sizeTextSelected,
                ]}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.tagsContainer}>
        <View style={styles.tags}>
          <Text>Color: {product.color}</Text>
        </View>

        {product.discount > 0 && (
          <View style={styles.discount}>
            <Text style={styles.discountText}>-{product.discount}%</Text>
          </View>
        )}
      </View>
      {product.stock <= 0 && <Text style={styles.noStockText}>Sin Stock</Text>}
      <Text style={styles.price}>Precio: ${product.price}</Text>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.95 : 1 },
          styles.addToCartButton,
        ]}
        onPress={() => dispatch(addItemToCart({
    product: product,
    quantity: 1,
    size: selectedSize  
}))}
      >
        <Text style={styles.textAddToCart}>Agregar al carrito</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  productContainer: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  textBrand: {
    color: colors.grisOscuro,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  longDescription: {
    fontSize: 16,
    textAlign: "justify",
    paddingVertical: 8,
  },
  tagsContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  tags: {
    flexDirection: "row",
    gap: 5,
  },
  tagText: {
    fontWeight: "600",
    fontSize: 14,
    color: colors.purple,
  },
  price: {
    fontWeight: "800",
    fontSize: 18,
  },
  discount: {
    backgroundColor: colors.brightOrange,
    width: 52,
    height: 52,
    borderRadius: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  discountText: {
    color: colors.white,
    textAlign: "center",
    verticalAlign: "center",
  },
  noStockText: {
    color: colors.red,
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    alignSelf: "center",
    paddingVertical: 16,
  },
  addToCartButton: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.lightPink,
    borderRadius: 16,
    marginVertical: 16,
  },
  textAddToCart: {
    color: colors.white,
    fontSize: 24,
    textAlign: "center",
  },
  sizeContainer: {
    marginVertical: 12,
  },
  sizeLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  sizesRow: {
    flexDirection: "row",
    gap: 10,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: colors.grisOscuro,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sizeButtonSelected: {
    backgroundColor: colors.lightPink,
    borderColor: colors.lightPink,
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "500",
  },
  sizeTextSelected: {
    color: colors.white,
  },
});
