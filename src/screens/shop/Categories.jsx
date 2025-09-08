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
import { useGetCategoriesQuery } from "../../services/shopApi";


const Categories = ({navigation}) => {


    //const  productCategories = useSelector (state =>state.shopReducer.productCategories)

    const{data:productCategories, isLoading, error} = useGetCategoriesQuery()


    const dispatch = useDispatch ()

    const handleSelectCategory =(category)=>{
        dispatch(setSelectedCategory(category))
        navigation.navigate("Productos")
    }

    if (isLoading) return <Text>Cargando...</Text>
  if (error) return <Text>Error: {JSON.stringify(error)}</Text>
  if (!productCategories) return <Text>No hay categorías</Text>


  const renderCategoryItem = ({ item }) => {
    return(

    <Pressable onPress={()=>handleSelectCategory(item.title)}>
      <View >
        <FlatCard style={styles.container}>
          
          <RobotoCondensedText style={styles.itemTitle}> {item.title}</RobotoCondensedText>
          <Icon name="chevron-right"size={15} color={colors.darkGray} marginLeft="auto" style={item.icon}/>
          
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection:"row",
   
  },
 
 
});
