import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ExpenseList from "@/components/ExpenseList";
import PeriodToggle from "@/components/PeriodToggle";

export default function ExpensesScreen() {
    const [period, setPeriod] = useState<"day" | "week" | "month">("month");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Expenses</Text>
            <PeriodToggle period={period} onPeriodChange={setPeriod} />
            <ExpenseList period={period} />
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
