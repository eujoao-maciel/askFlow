import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native"

type Props = {
    response: string
    subtitle?: string
    handleClose: () => void
}

export const ResponseCard = ({
    response,
    subtitle,
    handleClose,
}: Props) => {
    return (
        <View style={styles.modalBox}>
            <View style={styles.header}>
                <Text style={styles.title}>Sua Resposta</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>

            <ScrollView
                style={styles.scrollArea}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.responseText}>{response}</Text>
            </ScrollView>

            <Pressable onPress={handleClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Fechar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    modalBox: {
        width: "90%",
        maxWidth: 400,
        minWidth: 280,
        maxHeight: "80%",
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 18,
        gap: 14,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 6,
    },
    header: {
        alignItems: "center",
        paddingBottom: 2,
        borderBottomWidth: 1,
        borderBottomColor: "#e8edf2",
    },
    title: {
        fontSize: 17,
        fontWeight: "600",
        color: "#23313d",
        lineHeight: 24,
    },
    subtitle: {
        fontSize: 13,
        color: "#5a7a8a",
        marginTop: 2,
    },
    scrollArea: {
        flexGrow: 0,
        backgroundColor: "#f4f7fa",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#dce4ed",
        maxHeight: 500,
    },
    scrollContent: {
        padding: 14,
    },
    responseText: {
        fontSize: 14,
        lineHeight: 22,
        color: "#2c3e50",
        textAlign: "left",
    },
    closeButton: {
        backgroundColor: "#3e6785",
        borderRadius: 12,
        paddingVertical: 13,
        alignItems: "center",
    },
    closeButtonText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
        letterSpacing: 0.3,
    },
})
