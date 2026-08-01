import { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, Modal, View } from "react-native";

import { ProfessionalCard } from "./ProfessionalCard";
import { ResponseWay } from "./ResponseWay";
import { ResponseCard } from "./ResponseCard";

type askFlowModalProps = {
  isVisible: boolean;
  onClose: () => void;
  question: string;
  professionalType: string;
  responseStyle: string;
  answer: string;
  loading: boolean;
  error: string | null;
  setProfessionalType: Dispatch<SetStateAction<string>>;
  setResponseStyle: Dispatch<SetStateAction<string>>;
  setAnswer: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string | null>>;
};

export const AskFlowModal = ({
  isVisible,
  onClose,
  question,
  professionalType,
  responseStyle,
  answer,
  loading,
  error,
  setProfessionalType,
  setResponseStyle,
  setAnswer,
  setLoading,
  setError,
}: askFlowModalProps) => {
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
                nextStep={(value) => {
                  setProfessionalType(value);
                  setStep(2);
                }}
                handleClose={handleClose}
              />
            </>
          )}
          {step === 2 && (
            <>
              <ResponseWay
                prevStep={() => setStep(1)}
                nextStep={(value) => {
                  setResponseStyle(value);
                  setStep(3);
                }}
                handleClose={handleClose}
              />
            </>
          )}
          {step === 3 && (
            <>
              <ResponseCard
                response={answer || "Sua resposta aparecerá aqui."}
                subtitle={
                  [
                    question,
                    professionalType,
                    responseStyle,
                    loading ? "Carregando..." : null,
                    error,
                  ]
                    .filter(Boolean)
                    .join(" • ") || undefined
                }
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
