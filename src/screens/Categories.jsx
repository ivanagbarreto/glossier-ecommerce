import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import productCategories from "../data/productCategories.json";
import FlatCard from "../components/FlatCard";
import { categoryImages } from "../constants/categoryImages";
import RobotoCondensedText from "../components/RobotoCondensedFont";

const Categories = ({setSelectedCategory}) => {
  const renderCategoryItem = ({ item }) => {
    return(

    <Pressable onPress={()=> setSelectedCategory(item.title)}>
      <View style={styles.itemContainer}>
        <FlatCard>
          <Image
            style={{ width: 40, height: 40 }}
            source={categoryImages[item.image]}
            resizeMode="contain"
          />
          <RobotoCondensedText style={styles.itemTitle}> {item.title}</RobotoCondensedText>
        </FlatCard>
      </View>
    </Pressable>
  )};
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
    padding: 2,
  },
 
});
