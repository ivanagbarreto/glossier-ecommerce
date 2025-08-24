import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  ImageBackground,
} from "react-native";

import productCategories from "../../data/productCategories.json";
import FlatCard from "../../components/FlatCard";
import { categoryImages } from "../../constants/categoryImages";

import RobotoCondensedText from "../../components/RobotoCondensedFont";

const Categories = ({navigation}) => {
  const renderCategoryItem = ({ item }) => {
    return(

    <Pressable onPress={()=> navigation.navigate("Productos",{category:item.title})}>
      <View style={styles.itemContainer}>
        <FlatCard>
          <Image
            style={{ width: 25, height: 25 }}
            source={categoryImages[item.image]}
            resizeMode="contain"
          />
          <RobotoCondensedText style={styles.itemTitle}> {item.title}</RobotoCondensedText>
        </FlatCard>
      </View>
    </Pressable>
  )};
  return (
    <ImageBackground
            source={require("../../../assets/background.jpeg")}
            style={styles.container}
            resizeMode="cover"
          >
    <FlatList
      data={productCategories}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
    />
    </ImageBackground>
  );
};

export default Categories;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 1,
  },
 
});
