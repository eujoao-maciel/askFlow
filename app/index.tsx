import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>askFlow</Text>
        <Text style={styles.subtitle}>ASK · CREATE REQUEST</Text>
      </View>

      <View style={styles.card}>
        <TextInput
          placeholder="Ask a question"
          placeholderTextColor="#6f7c87"
          multiline
          style={styles.input}
        />

        <View style={styles.actions}>
          <Pressable style={styles.iconButton}>
            <Ionicons name="menu" size={22} color="#3e6785" />
          </Pressable>

          <Pressable style={styles.iconButton}>
            <Ionicons name="arrow-up" size={20} color="#3e6785" />
          </Pressable>
        </View>
      </View>

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

  header: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2f5f80",
    marginBottom: 10,
  },

  subtitle: {
    alignItems: "center",
    fontSize: 11,
    color: "#8a98a5",
  },

  card: {
    width: "100%",
    backgroundColor: "#d9edff",
    borderRadius: 18,
    padding: 14,
    shadowColor: "#7aa7c7",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  input: {
    minHeight: 110,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: "#37424a",
    textAlignVertical: "top",
    marginBottom: 16,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#7aa7c7",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  welcome: {
    marginTop: 130,
    fontSize: 16,
    color: "#9ba3aa",
  },
});
