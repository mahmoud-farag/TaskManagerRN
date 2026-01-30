import { Task, TaskCounter, TaskFilters } from "@/src/components";
import { dummyTasks } from "@/src/constants";
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const TaskListScreen = () => {
  const tasks = dummyTasks;

  return (
    <View className="flex-1 bg-white">
      <LinearGradient
        colors={["#FFF6F2", "#FDE2DD", "#ffc0cb"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute top-0 left-0 right-0 h-[45%]"
      />

      <SafeAreaView className="flex-1">

        <View className="h-[40%] items-center justify-center space-y-4">

          <View className="mt-2">
            <TaskCounter count={tasks.length} />
          </View>
        </View>

        <View className="flex-1 bg-white rounded-t-[40px] px-5 pt-4 shadow-2xl overflow-hidden">

          <View className="items-center mb-6 pt-2">
            <View className="w-12 h-1.5 bg-gray-200 rounded-full" />
          </View>

          <View className="mb-6">
            <TaskFilters />
          </View>

          <ScrollView
            className="flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
          >
            <View className="space-y-4">
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>

      <TouchableOpacity
        className="absolute bottom-10 right-6 w-16 h-16 bg-[#ff4d6d] rounded-full items-center justify-center shadow-lg elevation-5"
        activeOpacity={0.8}
      >
        <Text className="text-white text-4xl font-light mb-1">+</Text>
      </TouchableOpacity>

    </View>
  );
};


export default TaskListScreen;