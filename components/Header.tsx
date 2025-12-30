import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const Header = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos) ?? [];

  const completed = todos.filter((t) => t.iscompleted).length;
  const total = todos.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <LinearGradient colors={colors.gradients.primary} style={styles.iconContainer}>
          <Ionicons name="flash-outline" size={28} color="#fff" />
        </LinearGradient>

        <View>
          <Text style={styles.title}>Today&apos;s Tasks</Text>
          <Text style={styles.subtitle}>
            {completed} / {total} completed
          </Text>
        </View>
      </View>

      <View style={styles.progressBar}>
        <LinearGradient
          colors={colors.gradients.success}
          style={[styles.progressFill, { width: `${percent}%` }]}
        />
      </View>
    </View>
  );
};

export default Header;
