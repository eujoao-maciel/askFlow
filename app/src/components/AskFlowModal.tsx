import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyleSheet, Modal, View } from "react-native";

import { askQuestion } from "../services/api";
import { ProfessionalCard } from "./ProfessionalCard";
import { ResponseWay } from "./ResponseWay";
import { ResponseCard } from "./ResponseCard";

type AskFlowModalProps = {
  isVisible: boolean;
  initialStep: 1 | 2 | 3;
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
  initialStep,
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
}: AskFlowModalProps) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    if (isVisible) {
      setStep(initialStep);
      return;
    }

    setStep(1);
  }, [isVisible, initialStep]);

  const handleClose = () => {
    onClose();
  };

  const handleProfessionalTypeNext = (value: string) => {
    setProfessionalType(value);
    setStep(2);
  };

  const handleResponseStyleNext = async (value: string) => {
    setResponseStyle(value);
    setLoading(true);
    setError(null);

    try {
      const { answer } = await askQuestion({
        question,
        professionalType,
        responseStyle: value,
      });

      setAnswer(answer);
      setStep(3);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erro ao consultar a API";
      setError(message);
      setAnswer("");
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          {step === 1 && (
            <ProfessionalCard
              nextStep={handleProfessionalTypeNext}
              handleClose={handleClose}
            />
          )}

          {step === 2 && (
            <ResponseWay
              prevStep={() => setStep(1)}
              nextStep={handleResponseStyleNext}
              handleClose={handleClose}
              loading={loading}
            />
          )}

          {step === 3 && (
            <ResponseCard
              response={error ?? answer}
              subtitle={
                [question, professionalType, responseStyle]
                  .filter(Boolean)
                  .join(" • ") || undefined
              }
              handleClose={handleClose}
              loading={loading}
            />
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
