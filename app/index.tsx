import { StyleSheet, Text, View } from "react-native"
import { HomeHeader } from "./src/components/HomeHeader"
import { QuestionCard } from "./src/components/QuestionCard"
import { AskFlowModal } from "./src/components/AskFlowModal"
import { useState } from "react"

export default function Index() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <View style={styles.container}>
            <HomeHeader />
            <QuestionCard onOpenModal={() => setIsModalVisible(true)} />{" "}
            <Text style={styles.welcome}>Bem-vindo!</Text>{" "}
            <AskFlowModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />
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
