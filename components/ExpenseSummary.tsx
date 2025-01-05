import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

export default function ExpenseSummary() {
    // This is a placeholder. In a real app, you'd fetch and calculate the actual summary.
    const totalExpenses = 1234.56;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Total Expenses:</Text>
            <Text style={styles.amount}>${totalExpenses.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    amount: {
        fontSize: 24,
        fontWeight: "bold",
    },
});
