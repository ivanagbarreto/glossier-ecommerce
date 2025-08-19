import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View } from "react-native";
import Header from "./src/components/Header";
import Categories from "./src/screens/Categories";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/background.jpeg")}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar style="light" />
      <Header title="Categoria" />
      <View style={{ flex: 1 }}>
        <Categories />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
