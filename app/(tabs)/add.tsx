import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ExpenseForm from "@/components/ExpenseForm";

export default function AddExpenseScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Expense</Text>
            <ExpenseForm />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
});
