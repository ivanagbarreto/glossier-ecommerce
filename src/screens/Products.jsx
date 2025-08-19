import { StyleSheet, Text, View, FlatList } from 'react-native'
import products from '../data/products.json'
import { useEffect, useState } from 'react';


const Products = ({category}) => {

  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(( ) => {
    const categoryProducts = products.filter (product => product.category.toLowerCase() === category.toLowerCase())
    setFilteredProducts(categoryProducts)
  }, [])

  return (
    <View >
      <FlatList
      data={filteredProducts}
      keyExtractor={item=>item.id}
      renderItem={({item})=> <Text>{item.title}</Text>}
      />
    </View>
  )
}

export default Products

const styles = StyleSheet.create({})