import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from '../../global/colors'
import FlatCard from '../../components/FlatCard'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector, useDispatch } from 'react-redux'
import { removeItems } from '../../store/slices/cartSlice'

const Cart = () => {

  const cartItems = useSelector(state=>state.cartReducer.cartItems)
  const total = useSelector(state=>state.cartReducer.total)
  const dispatch = useDispatch()
  const FooterComponent = () => (
    <View style={styles.footerContainer}>
      <Text style={styles.footerTotal}>Total: $ {total} </Text>
      <Pressable style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </Pressable>
    </View>
  )

  const renderCartItem = ({ item }) => (
    <FlatCard style={styles.cartContainer}>
      <View>
        <Image
          source={{ uri: item.mainImage }}
          style={styles.cartImage}
          resizeMode='cover'
        />
      </View>
      <View style={styles.cartDescription}>
        <Text style={styles.title}>{item.title}</Text>
         <Text style={styles.size}>Talle: {item.size}</Text>
        <Text style={styles.price}>Precio unitario: $ {item.price}</Text>
        <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
       
        <Text style={styles.total}>Total: $ {item.quantity * item.price}</Text>

        <Pressable onPress={() => dispatch(removeItems({ id: item.id, size: item.size }))}>
          
          <Text style={styles.delete}>Eliminar</Text>
        </Pressable>
      </View>
    </FlatCard>
  )

  return (
    <>
      {
        cartItems.length>0
          ?
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={renderCartItem}
            ListHeaderComponent={<Text style={styles.cartScreenTitle}>Tu carrito:</Text>}
            ListFooterComponent={<FooterComponent />}
          />

          :
          <Text style={styles.noProducts}>Aún no hay productos en el carrito</Text>
      }
    </>
  )
}

export default Cart

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: "flex-start",
    margin: 16,
    alignItems: "center",
    gap: 10,
   
  },
  cartImage: {
    width: 80,
    height: 80
  },
  cartDescription: {
    flex: 1,
    width: '80%',
    flexDirection: 'column',
    padding: 20,
     
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textTransform:"uppercase"
  },
  description: {
    marginBottom: 16,
  },
  total: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '700',
    textTransform:"uppercase"
  },
  delete: {
    alignSelf: 'flex-end',
    marginRight: 8,
    textTransform:"uppercase",
  },
  footerContainer: {
    padding: 32,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerTotal: {
    fontSize: 16,
    fontWeight: '700'
  },
  confirmButton: {
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.lightPink,
    
    marginBottom: 24,
  },
  confirmButtonText: {
    color: colors.black,
    textTransform:"uppercase",
    fontSize: 10,
    fontWeight: '700'
  }, 
  cartScreenTitle: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: "center",
    paddingVertical: 8,
    textTransform:"uppercase",
    fontFamily: "RobotoCondensed-Regular",
  },
  noProducts:{
    margin:16,
    textTransform:"uppercase",
    fontFamily: "RobotoCondensed-Regular",
  }

})