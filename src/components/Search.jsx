import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { colors } from "../global/colors";

const Search = ({ setKeyword }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="¿Qué estás buscando?"
        onChangeText={(text) => {
          setKeyword(text);
        }}
      />

      
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginVertical: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 12,
    minWidth: "90%",
    paddingLeft: 8,
    textTransform:"uppercase"
  },
});
