import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  ImageBackground,

} from "react-native";

//import productCategories from "../../data/productCategories.json";

import FlatCard from "../../components/FlatCard";
import { categoryImages } from "../../constants/categoryImages";
import { colors } from "../../global/colors";
import RobotoCondensedText from "../../components/RobotoCondensedFont";
import Icon from "react-native-vector-icons/Feather";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../../store/slices/shopSlice";

const Categories = ({navigation}) => {
    const  productCategories = useSelector (state =>state.shopReducer.productCategories)

    const dispatch = useDispatch ()

    const handleSelectCategory =(category)=>{
        dispatch(setSelectedCategory(category))
        navigation.navigate("Productos")
    }


  const renderCategoryItem = ({ item }) => {
    return(

    <Pressable onPress={()=>handleSelectCategory(item.title)}>
      <View >
        <FlatCard style={styles.container}>
          <Image
            style={{ width: 25, height: 25 }}
            source={{ uri: item.image }}
            resizeMode="contain"
          />
          <RobotoCondensedText style={styles.itemTitle}> {item.title}</RobotoCondensedText>
          <Icon name={item.icon} size={15} color={colors.darkGray} marginLeft="auto" />
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection:"row",
   
  },
 
 
});
