import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "../global/colors";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { clearSession } from "../database";
import { clearUser } from "../store/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = ({ title, subtitle }) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  const user = useSelector((state) => state.userReducer.email);

  const dispatch = useDispatch();

  const handleClearSession = async () => {
    try {
      await clearSession();
      dispatch(clearUser());
    } catch {
      console.log("Hubo un error al limpiar la sesión");
    }
  };
  return (
    <View style={styles.container}>
      {canGoBack && (
        <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.black} />
        </Pressable>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {user && (
        <Pressable onPress={handleClearSession}>
          <Icon name="log-out" size={20} color={colors.black} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    fontFamily: "PlayfairDisplay-Bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    margin: 10,
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    color: colors.black,
    fontFamily: "RobotoCondensed-Regular",
    textTransform: "uppercase",
    letterSpacing: 2,
    textAlign: "center",
  },

  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
});
