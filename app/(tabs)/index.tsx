import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../../hooks/useTheme";

export default function Index() {
  const { toggleDarkMode, isDarkMode } = useTheme(); // ONLY for toggle

  return (
    <View style={styles.root}>
      <Text style={styles.title}>
        Todos Screen
      </Text>

      <Text style={styles.status}>
        Dark Mode: {isDarkMode ? "ON" : "OFF"}
      </Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={styles.button}>
          Toggle Dark Mode (Tabs Only)
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff", // 🔒 HARD LOCK WHITE
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#000000", // 🔒 HARD LOCK BLACK
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    color: "#000000", // 🔒 HARD LOCK BLACK
    marginBottom: 20,
  },
  button: {
    fontSize: 16,
    color: "#2563eb",
  },
});
