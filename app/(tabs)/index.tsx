import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import ExpenseSummary from "@/components/ExpenseSummary";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Household Expense Tracker</Text>
            <ExpenseSummary />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
