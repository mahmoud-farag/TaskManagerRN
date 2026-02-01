import { PriorityBadge, StatusBadge } from "@/src/components";
import { useTask } from "@/src/hooks/TaskContext";
import { formatDate } from "@/src/utils";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/src/constants";

const TaskDetailsScreen = () => {
  //* States
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  //* Custom hooks
  const { tasks } = useTask();

  //* Drived State
  const task = tasks.find((task) => task.id === id);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-slate-100">
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 -ml-2 rounded-full active:bg-slate-100"
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="font-bold text-lg text-primary">Task Details</Text>
        <View className="w-8" />
      </View>

      <ScrollView className="flex-1 px-5 pt-6">
        {/* Title */}
        <Text className="text-3xl font-bold text-slate-800 leading-tight mb-2">
          {task?.title}
        </Text>

        <View className="flex-row items-center gap-3 mb-6 mt-2">
          <StatusBadge completed={task?.completed ?? false} />
          <PriorityBadge type={task?.priority ?? "low"} />
        </View>

        {/* Date Info */}
        <View className="flex-row items-center gap-2 mb-8">
          <View className="bg-red-50 p-2 rounded-full">
            <Ionicons name="alarm-outline" size={20} color={COLORS.primary} />
          </View>
          <View>
            <Text className="text-xs text-slate-500 uppercase font-bold tracking-wider">
              Created At
            </Text>
            <Text className="text-slate-700 font-medium">
              {formatDate(task?.createdAt ?? new Date())}
            </Text>
          </View>
        </View>

        {/* Description Section */}
        <View className="bg-slate-50 p-4 rounded-2xl border border-slate-100 min-h-[150px]">
          <Text className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">
            Description
          </Text>
          <Text className="text-lg text-slate-700 leading-relaxed">
            {task?.description ?? "No description provided for this task."}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskDetailsScreen;
