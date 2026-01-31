import { Text, View } from "react-native";
import { TaskType } from "../types";

const PriorityBadge = ({ type }: { type: TaskType }) => {
  const colors = {
    high: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700" },
    medium: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
    },
    low: {
      bg: "bg-slate-100",
      border: "border-slate-200",
      text: "text-slate-600",
    },
  };
  const style = colors[type] || colors.low;

  return (
    <View
      className={`px-3 py-1 rounded-full border ${style.bg} ${style.border}`}
    >
      <Text className={`text-lg font-bold capitalize ${style.text}`}>
        {type} Priority
      </Text>
    </View>
  );
};

export default PriorityBadge;