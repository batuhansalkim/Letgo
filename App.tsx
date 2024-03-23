import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from "./src/screens/HomeScreen";
import FavoriteProductItem from "./src/components/FavoriteProductItem";
import {NavigationContainer} from "@react-navigation/native";
import RootNavigation from './src/navigators/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:"15%",
  },
});
