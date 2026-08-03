import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";

type Props = {
  response: string;
  subtitle?: string;
  handleClose: () => void;
  loading?: boolean;
};

export const ResponseCard = ({
  response,
  subtitle,
  handleClose,
  loading = false,
}: Props) => {
  return (
    <View style={styles.modalBox}>
      <View style={styles.header}>
        <Text style={styles.title}>Sua Resposta</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.body}>
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {loading ? (
            <View style={styles.loadingBox}>
              <ActivityIndicator size="large" color="#3e6785" />
              <Text style={styles.loadingText}>Carregando resposta...</Text>
            </View>
          ) : (
            <Text style={styles.responseText}>{response}</Text>
          )}
        </ScrollView>
      </View>

      <Pressable onPress={handleClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Fechar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    width: "90%",
    minHeight: 400,
    maxWidth: 500,
    minWidth: 280,
    maxHeight: 700,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    gap: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },

  header: {
    alignItems: "center",
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#e8edf2",
  },

  title: {
    fontSize: 17,
    fontWeight: "600",
    color: "#23313d",
    lineHeight: 24,
  },

  subtitle: {
    fontSize: 13,
    color: "#5a7a8a",
    marginTop: 2,
  },

  body: {
    flexGrow: 1,
    minHeight: 140,
  },

  scrollArea: {
    flex: 1,
    backgroundColor: "#f4f7fa",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dce4ed",
    minHeight: 140,
  },

  scrollContent: {
    flexGrow: 1,
    minHeight: 140,
    padding: 14,
    justifyContent: "center",
  },

  responseText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#2c3e50",
    textAlign: "left",
  },

  loadingBox: {
    minHeight: 140,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  loadingText: {
    fontSize: 14,
    color: "#5a7a8a",
    fontWeight: "500",
  },

  closeButton: {
    backgroundColor: "#3e6785",
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: "center",
  },

  closeButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    letterSpacing: 0.3,
  },
});
