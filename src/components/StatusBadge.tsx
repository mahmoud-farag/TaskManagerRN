import { Text, View } from "react-native";

const StatusBadge = ({ completed }: { completed: boolean }) => (
  <View
    className={`px-3 py-1 rounded-full border ${
      completed
        ? "bg-green-50 border-green-200"
        : "bg-yellow-50 border-yellow-200"
    }`}
  >
    <Text
      className={`text-lg font-bold ${
        completed ? "text-green-700" : "text-yellow-700"
      }`}
    >
      {completed ? "Completed" : "In Progress"}
    </Text>
  </View>
);


export default StatusBadge;