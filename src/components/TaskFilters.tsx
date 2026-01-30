import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const TaskFilters = () => {
  return (
    <View className="flex flex-row gap-10 justify-center ">
      <View className="border  border-slate-300  px-3 py-1 rounded-3xl flex items-center justify-center">
        <Text className="font-semibold">All</Text>
      </View>

      <View className="border  border-slate-300   px-3 py-1 rounded-3xl flex flex-row items-center gap-1">
        <Ionicons name="flame" size={14} color="#f97316" />
        <Text className="font-semibold">High</Text>
      </View>

      <View className="border  border-slate-300   px-3 py-1 rounded-3xl flex flex-row items-center gap-1">
        <Ionicons name="flash" size={14} color="#facc15" />
        <Text className="font-semibold">Medium</Text>
      </View>

      <View className="border  border-slate-300   px-3 py-1 rounded-3xl flex flex-row items-center gap-1">
        <Ionicons name="leaf" size={14} color="#22c55e" />
        <Text className="font-semibold">Low</Text>
      </View>
    </View>
  );
};

export default TaskFilters;
