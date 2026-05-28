import { View, Text, Pressable, StyleSheet } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

type Props = {
    prevStep: () => void
    nextStep: () => void
    handleClose: () => void
}

const responseWayOptions = [
    {
        id: "formal",
        label: "Formal",
        icon: ""
    }
]

export const ResponseWay = ({ prevStep, nextStep, handleClose }: Props) => {
    return (
        <View style={styles.modalBox}>
            <View style={styles.header}>
                <Text style={styles.title}>Como você quer sua resposta?</Text>
            </View>

            <View style={styles.footer}>
                <Pressable onPress={prevStep} style={styles.closeButton}>
                    <Ionicons
                        style={styles.arrowBack}
                        name="arrow-back"
                        size={16}
                        color="black"
                    />
                </Pressable>

                <Pressable onPress={nextStep} style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </Pressable>
            </View>
        </View>
    )
}

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
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
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

    arrowBack: {
        fontSize: 16,
        fontWeight: "500",
    },

    confirmButtonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#fff",
    },
})
