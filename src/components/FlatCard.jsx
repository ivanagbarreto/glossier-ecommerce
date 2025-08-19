import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'


const FlatCard = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
    container:{
        justifyContent:"flex-start",
       alignItems:"center",
       gap:4,
        flexDirection:"row",
          backgroundColor: colors.mediumGray,
        height:88,
        marginHorizontal: 24,
        marginBottom: 7, 
        marginTop:7,
        elevation:10,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderTopColor: "#FFFFFF",   
        borderLeftColor: "#FFFFFF",  
        borderBottomColor: "#808080", 
        borderRightColor: "#808080",  
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 4
    }
})