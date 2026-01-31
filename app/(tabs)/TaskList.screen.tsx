import { AddButton, Task, TaskCounter, TaskFilters } from "@/src/components";
import { useTask } from "@/src/hooks/TaskContext";
import { ITask } from "@/src/types";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TaskListScreen = () => {
  const { tasks } = useTask();

  return (
    <View className="flex-1 bg-white">
      <LinearGradient
        colors={["#FFF6F2", "#FDE2DD", "#ff4d6d"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute top-0 left-0 right-0 h-[70%]"
      />

      <SafeAreaView className="flex-1">
        <View className="h-[40%] items-center justify-center space-y-4">
          <View className="mt-2">
            <TaskCounter count={tasks.length} />
          </View>
        </View>

        <BottomSheet
          snapPoints={["50%", "90%"]}
          index={1}
          handleIndicatorStyle={{ backgroundColor: "#ccc" }}
          backgroundStyle={{ borderRadius: 40 }}
        >
          <View className="flex-1 px-5 pt-4">
            <View className="mb-8">
              <TaskFilters />
            </View>

            {tasks.length > 0 ? (
              <BottomSheetFlatList
                data={tasks}
                keyExtractor={(item: ITask) => item.id}
                renderItem={({ item }: { item: ITask }) => <Task task={item} />}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <View className="flex items-center justify-center mt-16 p-2  ">
                <Text className="text-center text-slate-500 text-xl">
                  Adding your first task and keep everything on track
                </Text>
              </View>
            )}
          </View>
        </BottomSheet>
      </SafeAreaView>

      <AddButton />
    </View>
  );
};

export default TaskListScreen;
