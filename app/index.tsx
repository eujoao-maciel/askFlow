import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Modal,
    Pressable,
} from "react-native"
import { HomeHeader } from "./src/components/HomeHeader.tsx"
import { QuestionCard } from "./src/components/QuestionCard.tsx"
import { useState } from "react"

export default function Index() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <View style={styles.container}>
            <HomeHeader />
            <QuestionCard onOpenModal={() => setIsModalVisible(true)} />
            <Text style={styles.welcome}>Welcome</Text>

            <Modal visible={isModalVisible} transparent animationType="fade">
                <View style={styles.overlay}>
                    <View style={styles.modalBox}>
                        <Text>Modal aberto</Text>

                        <Pressable onPress={() => setIsModalVisible(false)}>
                            <Text>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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

    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalBox: {
        width: "70%",
        height: "60%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        alignItems: "center",
    },
})
