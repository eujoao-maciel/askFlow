import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  nextStep: () => void;
  handleClose: () => void;
};

const options = [
  { id: "professor", label: "Professor\nParticilar", icon: "book-outline" },
  {
    id: "consultor",
    label: "Consultor\nAcadêmico",
    icon: "chatbubble-ellipses-outline",
  },
  { id: "tutor", label: "Tutor\Online", icon: "school-outline" },
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
          Que tipo de profissional você quer escolher?
        </Text>
      </View>

      <View style={styles.optionsGrid}>
        {options.map((option) => {
          const isSelected = selectedOption === option.id;

          return (
            <Pressable
              key={option.id}
              style={[styles.optionCard, isSelected && styles.optionCardSelected]}
              onPress={() => setSelectedOption(option.id)}
            >
              <Ionicons
                name={option.icon}
                size={22}
                color={isSelected ? "#2f5d7c" : "#46657c"}
              />
              <Text style={styles.optionText}>{option.label}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.footer}>
        <Pressable onPress={handleClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </Pressable>

        <Pressable onPress={nextStep} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    width: "85%",
    minHeight: 300,
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 20,
    justifyContent: "space-between",
  },

  header: {
    gap: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 14,
  },

  closeButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e7edf2",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
  },

  confirmButton: {
    flex: 1,
    backgroundColor: "#3e6785",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    alignItems: "center",
  },

  closeButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },

  confirmButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },

  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  optionCard: {
    width: "48%",
    minHeight: 58,
    borderWidth: 1,
    borderColor: "#cfd6dc",
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#fff",
  },

  optionCardSelected: {
    borderColor: "#3e6785",
    backgroundColor: "#eef5fb",
  },
 
  optionText: {
    fontSize: 12,
    color: "#2f3a40",
    flexShrink: 1,
  }
 
});
