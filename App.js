import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, ImageBackground, View } from "react-native";
import Header from "./src/components/Header";
import Categories from "./src/screens/Categories";
import Products from "./src/screens/Products";
import { useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
    const [loaded, error] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });


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
          <Products category={selectedCategory}/>
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
