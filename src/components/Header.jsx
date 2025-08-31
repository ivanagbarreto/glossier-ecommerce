import { StyleSheet, Text, View, Pressable } from 'react-native'
import {colors} from '../global/colors'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const Header = ({title, subtitle}) => {
  const navigation = useNavigation()
  const canGoBack = navigation.canGoBack() 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style= {styles.subtitle}>{subtitle}</Text>
      
      {
        canGoBack &&
        <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={32} color={colors.white} />
        </Pressable>
      }
      </View>
  )
}

export default Header

const styles = StyleSheet.create({

    container:{
        backgroundColor: colors.lightPink, 
        height: 200,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:24,
        color: colors.white,
        fontFamily:"PressStart2P-Regular"
    },
    subtitle:{
        fontSize:14,
        color: colors.white,
        fontFamily:"RobotoCondensed-Regular"
    },
      goBack: {
    position: "absolute",
    bottom: 100,
    left: 16
  }
})
