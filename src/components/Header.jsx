import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import RobotoCondensedText from "./RobotoCondensedFont";

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <RobotoCondensedText style={styles.subtitle}>{subtitle}</RobotoCondensedText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: colors.lightPink,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: colors.darkGray,
    fontFamily: "PressStart2P-Regular",
    textTransform: "uppercase",
    color: "#fff", 
    textShadowColor: "#000",   
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    
  },
  subtitle: {
    fontSize: 14,
    color: colors.darkGray,
  },
});
