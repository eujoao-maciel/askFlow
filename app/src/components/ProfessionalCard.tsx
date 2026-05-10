import { View, Text, Pressable, StyleSheet } from "react-native"

type Props = {
    nextStep: () => void,
    handleClose: () => void
}

export const ProfessionalCard = ({ nextStep, handleClose}: Props) => {
    return (
        <View style={styles.modalBox}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Que tipo de profissional você quer escolher?
                </Text>
            </View>

            <View style={styles.footer}>
                <Pressable onPress={handleClose} style={styles.closeButton}>
                    <Text>Close</Text>
                </Pressable>

                <Pressable onPress={nextStep} style={styles.confirmButton}>
                    <Text>Confirm</Text>
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
        justifyContent: "space-between",
        gap: 12,
    },

    closeButton: {
        flex: 1,
        backgroundColor: "#3e6785",
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },

    confirmButton: {
        flex: 1,
        backgroundColor: "#e7edf2",
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },
})
