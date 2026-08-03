import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeHeader } from "./src/components/HomeHeader";
import { QuestionCard } from "./src/components/QuestionCard";
import { AskFlowModal } from "./src/components/AskFlowModal";
import { askQuestion } from "./src/services/api";

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalInitialStep, setModalInitialStep] = useState<1 | 2 | 3>(1);
  const [question, setQuestion] = useState("");
  const [professionalType, setProfessionalType] = useState("");
  const [responseStyle, setResponseStyle] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOpenModal = () => {
    if (!question.trim()) return;

    setAnswer("");
    setError(null);
    setLoading(false);
    setModalInitialStep(1);
    setIsModalVisible(true);
  };

  const handleQuickSend = async () => {
    if (!question.trim()) return;

    setProfessionalType("");
    setResponseStyle("");
    setAnswer("");
    setError(null);
    setLoading(true);
    setModalInitialStep(3);
    setIsModalVisible(true);

    try {
      const { answer } = await askQuestion({
        question,
        professionalType: "",
        responseStyle: "",
      });

      setAnswer(answer);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erro ao consultar a API";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setModalInitialStep(1);
    setProfessionalType("");
    setResponseStyle("");
    setAnswer("");
    setLoading(false);
    setError(null);
  };

  return (
    <View style={styles.container}>
      <HomeHeader />
      <QuestionCard
        question={question}
        setQuestion={setQuestion}
        onOpenModal={handleOpenModal}
        onSendQuestion={handleQuickSend}
      />
      <Text style={styles.welcome}>Bem-vindo!</Text>
      <AskFlowModal
        isVisible={isModalVisible}
        initialStep={modalInitialStep}
        onClose={handleCloseModal}
        question={question}
        professionalType={professionalType}
        responseStyle={responseStyle}
        answer={answer}
        loading={loading}
        error={error}
        setProfessionalType={setProfessionalType}
        setResponseStyle={setResponseStyle}
        setAnswer={setAnswer}
        setLoading={setLoading}
        setError={setError}
      />
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

  welcome: {
    marginTop: 130,
    fontSize: 16,
    color: "#9ba3aa",
  },
});
