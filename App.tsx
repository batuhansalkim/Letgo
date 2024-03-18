import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from "./src/screens/HomeScreen";
import FavoriteProductItem from "./src/components/FavoriteProductItem";
export default function App() {
  return (
    <View style={styles.container}>
      <Homescreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:"15%",
  },
});
