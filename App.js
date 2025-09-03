import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, ImageBackground, View } from "react-native";
import Header from "./src/components/Header";
import { useState, useEffect } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import TabsNavigator from "./src/navigation/tabs/TabsNavigator";
import { colors } from "./src/global/colors";
import { Provider } from "react-redux";
import {store} from "./src/store"


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "RobotoCondensed-Bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-Italic": require("./assets/fonts/RobotoCondensed-Italic.ttf"),
    "RobotoCondensed-Light": require("./assets/fonts/RobotoCondensed-Light.ttf"),
    "RobotoCondensed-Regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    "PressStart2P-Regular": require("./assets/fonts/PressStart2P-Regular.ttf"),
    "PlayfairDisplay-Bold":require("./assets/fonts/PlayfairDisplay-Bold.ttf")
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
    <Provider store={store}>
      <NavigationContainer>
        <ImageBackground
          source={require("./assets/background.jpeg")}
          style={styles.container}
          resizeMode="cover"
        >
          <StatusBar backgroundColor={colors.lightGray} />

          <TabsNavigator />
        </ImageBackground>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
