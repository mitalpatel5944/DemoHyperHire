import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screen/HomeScreen";

export default function App() {
  return (
    <ScrollView nestedScrollEnabled={true} contentContainerStyle={styles.container}>
      <View style={{ flex: 1 }} key={1}>
        <HomeScreen />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: "#fff",
  },
});
