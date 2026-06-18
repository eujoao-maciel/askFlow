import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  prevStep: () => void;
  nextStep: () => void;
  handleClose: () => void;
};

export const responseWayOptions = [
  {
    id: "formal",
    label: "Formal",
    icon: "document-text-outline",
  },
  {
    id: "well-described",
    label: "Bem Descrita",
    icon: "book-outline",
  },
  {
    id: "creative",
    label: "Criativa",
    icon: "bulb-outline",
  },
  {
    id: "concise",
    label: "Concisa",
    icon: "create-outline",
  },
];

export const ResponseWay = ({ prevStep, nextStep, handleClose }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  return (
    <View style={styles.modalBox}>
      <View style={styles.header}>
        <Text style={styles.title}>Como você quer sua resposta?</Text>
      </View>

      <View style={styles.optionGrid}>
        {responseWayOptions.map((option) => {
          const isSelected = selectedOption === option.id;

          return (
            <Pressable
              key={option.id}
              onPress={() => setSelectedOption(option.id)}
              style={[
                styles.optionCard,
                isSelected && styles.optionCardSelected,
              ]}
            >
              <Ionicons
                name={option.icon as any}
                size={18}
                color={isSelected ? "#315f7d" : "#5b7486"}
              />

              <Text
                style={[
                  styles.optionText,
                  isSelected && styles.optionTextSelected,
                ]}
              >
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Ou digite o tipo desejado"
      />

      <View style={styles.footer}>
        <Pressable onPress={prevStep} style={styles.closeButton}>
          <Ionicons
            name="arrow-back"
            size={16}
            color="black"
          />
        </Pressable>

        <Pressable onPress={nextStep} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
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

  title: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    color: "#23313d",
    lineHeight: 24,
  },

  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "flex-start",
  },

  optionCard: {
    flexBasis: "48%",
    minHeight: 68,

    borderWidth: 1,
    borderColor: "#d4dde4",
    borderRadius: 14,

    paddingHorizontal: 14,
    paddingVertical: 12,

    flexDirection: "column",
    alignItems: "center",
    gap: 12,

    backgroundColor: "#fff",
  },

  optionCardSelected: {
    backgroundColor: "#eef5fa",
    borderColor: "#3e6785",
  },

  optionText: {
    fontSize: 12,
    lineHeight: 16,
    color: "#33414d",
    fontWeight: "500",
  },

  optionTextSelected: {
    color: "#234b66",
  },

  footer: {
    flexDirection: "row",
    gap: 10,
  },

  closeButton: {
    flex: 1,
    backgroundColor: "#edf2f5",
    borderRadius: 12,
    paddingVertical: 12,

    justifyContent: "center",
    alignItems: "center",
  },

  confirmButton: {
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
    color: "#31414d",
  },

  confirmButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  textInput: {
    height: 40,
    borderColor: "#d4dde4",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
});
