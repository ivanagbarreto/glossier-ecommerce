import { StyleSheet, Text, View, TextInput } from "react-native";
import  Icon  from "react-native-vector-icons/Feather";
import { colors } from "../global/colors";
const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} placeholder="Buscar Productos" onChangeText={() => {}}
        />
      
      <Icon name="search" size={32} color={colors.darkGray}/>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
