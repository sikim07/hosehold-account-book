import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Text, View } from "@/components/Themed";

type Expense = {
    id: string;
    date: string;
    category: string;
    amount: number;
    description?: string;
};

type ExpenseListProps = {
    period: "day" | "week" | "month";
};

export default function ExpenseList({ period }: ExpenseListProps) {
    // This is placeholder data. In a real app, you'd fetch this based on the selected period.
    const expenses: Expense[] = [
        {
            id: "1",
            date: "2023-05-01",
            category: "Food",
            amount: 50.0,
            description: "Groceries",
        },
        {
            id: "2",
            date: "2023-05-02",
            category: "Transport",
            amount: 30.0,
            description: "Gas",
        },
        {
            id: "3",
            date: "2023-05-03",
            category: "Entertainment",
            amount: 20.0,
            description: "Movie",
        },
    ];

    const renderItem = ({ item }: { item: Expense }) => (
        <View style={styles.item}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
            {item.description && (
                <Text style={styles.description}>{item.description}</Text>
            )}
        </View>
    );

    return (
        <FlatList
            data={expenses}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.list}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        width: "100%",
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    date: {
        fontSize: 16,
        fontWeight: "bold",
    },
    category: {
        fontSize: 14,
        color: "#666",
    },
    amount: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
    },
    description: {
        fontSize: 14,
        color: "#666",
        marginTop: 5,
    },
});
