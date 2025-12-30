import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const DangerZone = () => {
  const { colors } = useTheme();
  const styles = createSettingsStyles(colors);

  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  const handleReset = () => {
    Alert.alert(
      "Reset App",
      "This will delete all todos permanently.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete All",
          style: "destructive",
          onPress: async () => {
            await clearAllTodos({});
          },
        },
      ]
    );
  };

  return (
    <LinearGradient colors={colors.gradients.surface} style={styles.section}>
      <Text style={styles.sectionTitleDanger}>Danger Zone</Text>

      <TouchableOpacity style={styles.actionButton} onPress={handleReset}>
        <View style={styles.actionLeft}>
          <LinearGradient colors={colors.gradients.danger} style={styles.actionIcon}>
            <Ionicons name="trash" size={18} color="#fff" />
          </LinearGradient>
          <Text style={styles.actionTextDanger}>Reset App</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DangerZone;
