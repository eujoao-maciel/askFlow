import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  handleClose: () => void;
};

export const ResponseCard = ({ handleClose }: Props) => {
  return (
    <View style={styles.modalBox}>
      <View style={styles.header}>
        <Text style={styles.title}>Sua Resposta</Text>
        <Text>Professor Particular - Formal </Text>
      </View>

      <View style={styles.responseContent}>
        <Text style={styles.responseText}>
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?"
        </Text>
      </View>

      <View style={styles.footer}>
        <Pressable onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Fechar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    width: "90%",
    maxWidth: 400,
    minWidth: 280,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    gap: 18,
  },

  header: {
    alignItems: "center",
  },

  responseContent: {
    width: "100%",
    backgroundColor: "#DEE5ED",
    padding: 10,
    borderRadius: 12,
  },

  responseText: {
    textAlign: "start",
  },

  title: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    color: "#23313d",
    lineHeight: 24,
    paddingBottom: 3,
  },

  footer: {
    flexDirection: "row",
    gap: 10,
  },

  closeButton: {
    flex: 1,
    backgroundColor: "#3e6785",
    borderRadius: 12,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  closeButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
});
