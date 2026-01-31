import { Text, View } from "react-native";

const TaskCounter = ({ count }: { count: number }) => {
  return (
    <View className="items-center my-6">
      <Text className="text-3xl text-center font-semibold text-slate-900 mb-4">
        Task Flow
      </Text>

      <View className="size-48 border-8 border-pink-100 rounded-full bg-white items-center justify-center shadow">
        <Text className="text-4xl font-bold text-primary">{count}</Text>
        <Text className="text-slate-500 mt-3">Active Tasks</Text>
      </View>
    </View>
  );
};

export default TaskCounter;
