import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../global/colors";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { clearSession } from "../database";

const Header = ({ title, subtitle }) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.iconsContainer}>
        {canGoBack && (
          <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={20} color={colors.black} />
          </Pressable>
        )}
        <Pressable  onPress={null} style={styles.logout}>
          <Icon name="log-out" size={20} color={colors.black} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    height: 120,
    justifyContent: "center",
   
  },
  title: {
    fontSize: 20,
    color: colors.black,
    fontFamily: "PlayfairDisplay-Bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    margin: 10,
    marginTop: 20,
    textAlign:"center"
  },
  subtitle: {
    fontSize: 10,
    color: colors.black,
    fontFamily: "RobotoCondensed-Regular",
    textTransform: "uppercase",
    letterSpacing: 2,
    textAlign:"center"
  },
  
    iconsContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal: 16
  },
});
