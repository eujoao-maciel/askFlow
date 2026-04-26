import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { HomeHeader } from "./src/components/HomeHeader.tsx";
import { QuestionCard } from './src/components/QuestionCard.tsx'

export default function Index() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <QuestionCard />
      <Text style={styles.welcome}>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 110,
    paddingHorizontal: 24,
  },

  welcome: {
    marginTop: 130,
    fontSize: 16,
    color: "#9ba3aa",
  },
});
