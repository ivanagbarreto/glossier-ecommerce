import { StyleSheet, Text, View } from 'react-native'
import {colors} from '../global/colors';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height:200,
        backgroundColor:colors.lightPink,
        justifyContent: "center",
         alignItems: "center"
    },
     title:{
      fontSize:24,
      color: colors.darkGray
    }
})