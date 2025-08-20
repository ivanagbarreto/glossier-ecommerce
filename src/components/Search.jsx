import { StyleSheet, Text, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { colors } from "../global/colors";

const Search = ({ setKeyword }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar Productos"
        onChangeText={(text) => {
          setKeyword(text);
        }}
      />

      <Icon name="search" size={32} color={colors.mediumGray} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginVertical: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.mediumGray,
    borderRadius: 16,
    minWidth: "85%",
    paddingLeft: 8,
  },
});
