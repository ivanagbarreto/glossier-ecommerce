import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, ImageBackground, View } from "react-native";
import Header from "./src/components/Header";
import { Categories, Products, ProductDetail} from './src/screens'
import { useState, useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loaded, error] = useFonts({
    "RobotoCondensed-Bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Italic": require("./assets/fonts/RobotoCondensed-Italic.ttf"),
    "RobotoCondensed-Light": require("./assets/fonts/RobotoCondensed-Light.ttf"),
    "RobotoCondensed-Regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    "PressStart2P-Regular": require("./assets/fonts/PressStart2P-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <ImageBackground
      source={require("./assets/background.jpeg")}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar style="light" />
      {selectedCategory ? (
        <>
          <Header title="Fashion" subtitle="Productos" />
          <Products category={selectedCategory} />
        </>
      ) : (
        <>
          <Header title="Fashion" subtitle="Categorias" />
          <View style={{ flex: 1 }}>
            <Categories setSelectedCategory={setSelectedCategory} />
          </View>
        </>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
