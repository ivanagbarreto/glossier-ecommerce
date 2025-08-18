import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';
import productCategories from './src/data/productCategories.json';
import Header from './src/components/Header'
import FlatCard from './src/components/FlatCard';
import { categoryImages } from "./src/constants/categoryImages";


export default function App() {

  const renderCategoryItem =({item})=>(
    <FlatCard>
        <Image style={{ width: 40, height: 40 }}  source={categoryImages[item.image]} resizeMode='contain'/>
       <Text> {item.title}</Text>
     
    </FlatCard>
  )
  return (
      <ImageBackground 
      source={require('./assets/background.jpeg')} 
      style={styles.container}
      resizeMode="cover" 
    > 
            <Header title="Categoria"/>
            <FlatList
            data={productCategories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

   
});
