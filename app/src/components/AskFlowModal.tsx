import { StyleSheet, Modal, View, Text, Pressable } from "react-native";
import { useState } from "react";

import { ProfessionalCard } from "./ProfessionalCard.tsx";
import { ResponseWay } from "./ResponseWay.tsx";
import { ResponseCard } from "./ResponseCard.tsx";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export const AskFlowModal = ({ isVisible, onClose }: Props) => {
  const [step, setStep] = useState(1);

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          {step === 1 && (
            <>
              <ProfessionalCard
                nextStep={() => setStep(2)}
                handleClose={handleClose}
              />
            </>
          )}
          {step === 2 && (
            <>
              <ResponseWay
                prevStep={() => setStep(1)}
                nextStep={() => setStep(3)}
                handleClose={handleClose}
              />
            </>
          )}
          {step === 3 && (
            <>
              <ResponseCard 
                handleClose={handleClose}
              />
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
  },
});
