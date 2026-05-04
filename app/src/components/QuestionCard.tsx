import { StyleSheet, TextInput, View, Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export const QuestionCard = ({ onOpenModal }: { onOpenModal: () => void }) => {
    return (
        <View style={styles.card}>
            <TextInput
                placeholder="Ask a question"
                placeholderTextColor="#6f7c87"
                multiline
                style={styles.input}
            />

            <View style={styles.actions}>
                <Pressable style={styles.iconButton} onPress={onOpenModal}>
                    <Ionicons name="menu" size={22} color="#3e6785" />
                </Pressable>

                <Pressable style={styles.iconButton}>
                    <Ionicons name="arrow-up" size={20} color="#3e6785" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "#d9edff",
        borderRadius: 18,
        padding: 14,
        shadowColor: "#7aa7c7",
        shadowOpacity: 0.25,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 6,
    },

    input: {
        minHeight: 110,
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 14,
        fontSize: 16,
        color: "#37424a",
        textAlignVertical: "top",
        marginBottom: 16,
    },

    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconButton: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#7aa7c7",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
    },
})
