import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
  Switch,
} from "react-native";
import { colors } from "../../global/colors";
import { useEffect, useState } from "react";

const textInputWidth = Dimensions.get("window").width * 0.7;

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onsubmit = () => {
    return;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fashion</Text>
      <Text style={styles.subTitle}>Inicia sesión</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor={colors.black}
          placeholder="Email"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={colors.black}
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <View style={styles.footTextContainer}>
        <Text style={styles.blackText}>¿No tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text
            style={{
              ...styles.whiteText,
              ...styles.underLineText,
            }}
          >
            Crea una cuenta
          </Text>
        </Pressable>
      </View>

      <Pressable style={styles.btn} onPress={onsubmit}>
        <Text style={styles.btnText}>Iniciar sesión</Text>
      </Pressable>
      <View style={styles.rememberMe}>
        <Text style={{ color: colors.black, padding:8,fontFamily: "RobotoCondensed-Regular" }}>¿Mantener sesión iniciada?</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGray,
  },
  title: {
    color: colors.black,
    fontFamily: "PlayfairDisplay-Bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 32,
  },
  subTitle: {
    fontFamily: "RobotoCondensed-Regular",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: 15,
    color: colors.black,
    letterSpacing: 3,
  },
  inputContainer: {
    gap: 16,
    margin: 16,
    marginTop: 48,
    alignItems: "center",
    width: "100%", 
    paddingHorizontal: 20,
  },
  textInput: {
    padding: 8,
    paddingLeft: 16,
    borderBottomWidth: 1,      
    borderBottomColor: colors.darkGray,  
    marginBottom: 20,           
    paddingVertical: 8,
    width: "85%",
    fontFamily: "RobotoCondensed-Regular",
  },
  footTextContainer: {
    flexDirection: "row",
    gap: 8,
  },
blackText: {
    color: colors.black,
    fontFamily: "RobotoCondensed-Regular",
  },
  underLineText: {
    textDecorationLine: "underline",
  },
  strongText: {
    fontWeight: "900",
    fontSize: 16,
  },
  btn: {
    padding: 16,
    paddingHorizontal: 32,
    backgroundColor: colors.lightPink,
    marginTop: 32,
    borderWidth: 1,
    borderColor: colors.black,
  },
  btnText: {
    color: colors.black,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "RobotoCondensed-Bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    textAlign: "center",
  },
  error: {
    padding: 16,
    backgroundColor: colors.red,
    borderRadius: 8,
    color: colors.white,
  },
  rememberMe: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
