import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  nextStep: () => void;
  handleClose: () => void;
};

const options = [
  {
    id: "professor",
    label: "Professor\nParticular",
    icon: "book-outline",
  },
  {
    id: "consultor",
    label: "Consultor\nAcadêmico",
    icon: "chatbubble-ellipses-outline",
  },
  {
    id: "tutor",
    label: "Tutor\nOnline",
    icon: "school-outline",
  },
  {
    id: "carreira",
    label: "Especialista\nem Carreira",
    icon: "briefcase-outline",
  },
];

export const ProfessionalCard = ({ nextStep, handleClose }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <View style={styles.modalBox}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Que tipo de profissional deve responder?
        </Text>
      </View>

      <View style={styles.optionGrid}>
        {options.map((option) => {
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

      <View style={styles.footer}>
        <Pressable onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </Pressable>

        <Pressable onPress={nextStep} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    width: "90%",
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
    gap: 10,
  },

  optionCard: {
    width: "100%",
    minHeight: 68,

    borderWidth: 1,
    borderColor: "#d4dde4",
    borderRadius: 14,

    paddingHorizontal: 14,
    paddingVertical: 12,

    flexDirection: "row",
    alignItems: "center",
    gap: 12,

    backgroundColor: "#fff",
  },

  optionCardSelected: {
    backgroundColor: "#eef5fa",
    borderColor: "#3e6785",
  },

  optionText: {
    flex: 1,
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
});
