import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";

type PeriodToggleProps = {
    period: "day" | "week" | "month";
    onPeriodChange: (period: "day" | "week" | "month") => void;
};

export default function PeriodToggle({
    period,
    onPeriodChange,
}: PeriodToggleProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, period === "day" && styles.activeButton]}
                onPress={() => onPeriodChange("day")}
            >
                <Text
                    style={[
                        styles.buttonText,
                        period === "day" && styles.activeButtonText,
                    ]}
                >
                    Day
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    period === "week" && styles.activeButton,
                ]}
                onPress={() => onPeriodChange("week")}
            >
                <Text
                    style={[
                        styles.buttonText,
                        period === "week" && styles.activeButtonText,
                    ]}
                >
                    Week
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    period === "month" && styles.activeButton,
                ]}
                onPress={() => onPeriodChange("month")}
            >
                <Text
                    style={[
                        styles.buttonText,
                        period === "month" && styles.activeButtonText,
                    ]}
                >
                    Month
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: "#f0f0f0",
    },
    activeButton: {
        backgroundColor: "#007AFF",
    },
    buttonText: {
        fontSize: 16,
        color: "#333",
    },
    activeButtonText: {
        color: "#fff",
    },
});
