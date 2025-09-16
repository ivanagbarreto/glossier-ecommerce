import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import { colors } from "../../global/colors";
import { useState, useEffect } from "react";
import { useSignupMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUserEmail } from "../../store/slices/userSlice";

const textInputWidth = Dimensions.get("window").width * 0.7;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();


  const [triggerSignup, result] = useSignupMutation();

  const handleSignup = () => {
    setErrorMessage("");
    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }
    triggerSignup({ email, password, returnSecureToken: true });
  };

  useEffect(() => {
    if (result.status === "fulfilled") {
      
      dispatch(setUserEmail(result.data.email));
      
    } else if (result.status === "rejected") {
      const errorMsg = result.error?.data?.error?.message;
      switch (errorMsg) {
        case "EMAIL_EXISTS":
          setErrorMessage("Este email ya está registrado. Inicia sesión.");
          break;
        case "WEAK_PASSWORD : Password should be at least 6 characters":
          setErrorMessage("La contraseña es muy débil (mínimo 6 caracteres).");
          break;
        case "INVALID_EMAIL":
          setErrorMessage("El email ingresado no es válido.");
          break;
        default:
          setErrorMessage("Ocurrió un error al registrarse.");
      }
    }
  }, [result]);


  return (
    <View style={styles.gradient}>
      <Text style={styles.title}>glossier</Text>
      <Text style={styles.subTitle}>Registrate</Text>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setEmail}
          placeholderTextColor={colors.black}
          placeholder="Email"
          style={styles.textInput}
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={setPassword}
          placeholderTextColor={colors.black}
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
        />
        <TextInput
          onChangeText={setConfirmPassword}
          placeholderTextColor={colors.black}
          placeholder="Repetir password"
          style={styles.textInput}
          secureTextEntry
        />

        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </View>

      <View style={styles.footTextContainer}>
        <Text style={styles.blackText}>¿Ya tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ ...styles.blackText, ...styles.underLineText }}>
            Iniciar sesión
          </Text>
        </Pressable>
      </View>

      <Pressable style={styles.btn} onPress={handleSignup}>
        <Text style={styles.btnText}>
          {result.status === "pending" ? "Creando..." : "Crear cuenta"}
        </Text>
      </Pressable>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  gradient: {
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
  whiteText: {
    color: colors.black,
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
});
