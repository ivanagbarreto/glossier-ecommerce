import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../global/colors";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, subtitle }) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      {canGoBack && (
        <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.black} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
   height:120,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: colors.black,
    fontFamily:  "PlayfairDisplay-Bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    margin:10,
    marginTop:20,
  },
  subtitle: {
    fontSize: 10,
    color: colors.black,
    fontFamily: "RobotoCondensed-Regular",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  goBack: {
    position: "absolute",
    top: 80,
    left: 16,
  },
});
