import { View, Text, StyleSheet } from "react-native";

export const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>askFlow</Text>
      <Text style={styles.subtitle}>ASK · CREATE REQUEST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
