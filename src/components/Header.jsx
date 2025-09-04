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
          <Icon name="chevron-left" size={24} color={colors.black} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mediumGray,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    color: colors.black,
    fontFamily: "PlayfairDisplay-Bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    margin:10,
  },
  subtitle: {
    fontSize: 15,
    
    color: colors.black,
    fontFamily: "RobotoCondensed-Regular",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  goBack: {
    position: "absolute",
    top: 100,
    left: 16,
  },
});
