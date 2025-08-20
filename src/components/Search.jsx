import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-vector-icons/Feather";
import { colors } from "../global/colors";
const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <Text placeholder="Buscar Productos" onChangeText={() => {}}>
        Search
      </Text>
      <Icon name="search" size={32} color={colors.darkGray}/>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
