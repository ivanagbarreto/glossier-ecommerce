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
import AccordionItem from "../../components/AcordionItem";
import ProductImages from "../../components/ProductImages";
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
    dispatch(
      addItemToCart({
        product: { ...product, size: selectedSize },
        quantity: 1,
      })
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

      <View style={styles.tags}>
        <Text style={styles.colorTitle}>Color: {product.color}</Text>
      </View>
      <View style={styles.tagsContainer}>
        {product.discount > 0 && (
          <View style={styles.discount}>
            <Text style={styles.discountText}>
              -{product.discount}% {"\n"}Discount
            </Text>
          </View>
        )}
      </View>
      <Text style={styles.longDescription}>{product.longDescription}</Text>

      <View style={styles.sizeContainer}>
        <Text style={styles.sizeLabel}>Seleccioná tu talle:</Text>
        <View style={styles.sizesRow}>
          {["S", "M", "L", "XL"].map((size, index) => (
            <Pressable
              key={index}
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

      {/* IMAGENES ADICIONALES */}

      <ProductImages images={product.images} />

      {/* INFORMACION ADICIONAL */}
      <View style={styles.container}>
        <AccordionItem
          title="COMPOSICIÓN & CUIDADOS"
          content=" Los lavados a bajas temperaturas y los programas de centrifugado suaves son más delicados con las prendas, ayudando a mantener el color, la forma y la estructura del tejido. Al mismo tiempo, reduce el consumo de energía que se utiliza en los procesos de cuidado."
        />
        <AccordionItem
          title="ENVÍO, CAMBIOS Y DEVOLUCIONES"
          content="Devoluciones gratis en un plazo de 30 días. ENVÍO A UNA TIENDA - GRATUITO
          Entrega en 2-4 días laborables.
          ENVÍO A DOMICILIO
          Entrega en 2-6 días laborables - 3.000,00 ARS
          El envío será gratuito a partir de 175.990,00 ARS solo para artículos sin descuento.
          Entrega en 1-2 días laborables - 5.000,00 ARS
          ENVÍO A PUNTO DE ENTREGA  - 3.000,00 ARS
          El envío será gratuito a partir de 175.990,00 ARS solo para artículos sin descuento.
          Entrega en 2-6 días laborables."
        />
      </View>

      {product.stock <= 0 && <Text style={styles.noStockText}>Sin Stock</Text>}
      <Text style={styles.price}> ${product.price}</Text>

      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.95 : 1 },
          styles.addToCartButton,
        ]}
        onPress={() =>
          dispatch(
            addItemToCart({
              product: product,
              quantity: 1,
              size: selectedSize,
            })
          )
        }
      >
        <Text style={styles.textAddToCart}>Añadir</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  productContainer: {
    paddingHorizontal: 16,
    marginVertical: 16,
    backgroundColor: "#f9f9f9",
  },
  textBrand: {
    color: colors.grisOscuro,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  longDescription: {
    fontSize: 16,
    textAlign: "justify",
    paddingVertical: 8,
  },
  colorTitle: {
    textTransform: "uppercase",
  },

  price: {
    fontWeight: "800",
    fontSize: 18,
  },
  discount: {
    width: 52,
    height: 52,
    borderRadius: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  discountText: {
    fontSize: 12,
    color: colors.darkGray,
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
    borderWidth: 1,
    borderColor: colors.black,
    marginVertical: 16,
  },
  textAddToCart: {
    color: colors.black,

    fontSize: 15,
    textAlign: "center",
    fontFamily: "RobotoCondensed-Bold",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  sizeContainer: {
    marginVertical: 12,
  },
  sizeLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 8,
  },
  sizesRow: {
    flexDirection: "row",
    gap: 10,
  },
  sizeButton: {
    borderColor: colors.grisOscuro,

    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeButtonSelected: {
    backgroundColor: colors.lightPink,
  },
  sizeText: {
    fontSize: 9,
    fontWeight: "800",
    textAlign: "center",
  },
  sizeTextSelected: {
    color: colors.black,
    borderColor: colors.black,
  },
  container: {
    margin: 20,
  },
});
