import { View, Image, useWindowDimensions } from "react-native";

const ProductImages = ({ images = [] }) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      {images.map((img, index) => (
        <Image
          key={index}
          source={{ uri: img }}
          style={{
            width: "100%",
            height: width * 0.7,
            borderRadius: 10,
            marginBottom: 15,
          }}
          resizeMode="contain"
        />
      ))}
    </View>
  );
};

export default ProductImages;