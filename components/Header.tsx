import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { createHomeStyles } from "@/styles/home.styles";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos) ?? [];

  // ✅ fixed field name
  const completedCount = todos.filter(
    (todo) => todo.iscompleted
  ).length;

  const totalCount = todos.length;

  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={homeStyles.iconContainer}
        >
          {/* ✅ icon WILL render now */}
          <Ionicons name="flash-outline" size={28} color="#ffffff" />
        </LinearGradient>

        <View>
          <Text style={homeStyles.title}>
            {"Today's Tasks 👀"}
          </Text>
          <Text style={homeStyles.subtitle}>
            {completedCount} of {totalCount} completed
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
