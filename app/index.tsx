import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { HomeHeader } from "./src/components/HomeHeader"
import { QuestionCard } from "./src/components/QuestionCard"
import { AskFlowModal } from "./src/components/AskFlowModal"

export default function Index() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [question, setQuestion] = useState("")
    const [professionalType, setProfessionalType] = useState("")
    const [responseStyle, setResponseStyle] = useState("")
    const [answer, setAnswer] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCloseModal = () => {
        setIsModalVisible(false)
        setProfessionalType("")
        setResponseStyle("")
        setAnswer("")
        setLoading(false)
        setError(null)
    }

    return (
        <View style={styles.container}>
            <HomeHeader />
            <QuestionCard
                question={question}
                setQuestion={setQuestion}
                onOpenModal={handleOpenModal}
            />
            <Text style={styles.welcome}>Bem-vindo!</Text>
            <AskFlowModal
                isVisible={isModalVisible}
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
    )
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
})
