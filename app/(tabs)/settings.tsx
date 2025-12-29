import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../hooks/useTheme";

export default function SettingsScreen() {
  const { colors, isDarkMode } = useTheme();

  return (
    <View style={[styles.root, { backgroundColor: colors.bg }]}>
    
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
  },
});
