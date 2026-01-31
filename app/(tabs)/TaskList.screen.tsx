import { AddButton, Task, TaskCounter, TaskFilters } from "@/src/components";
import { useTask } from "@/src/hooks/TaskContext";
import { ITask } from "@/src/types";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS } from "@/src/constants";

const TaskListScreen = () => {
  //* States
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  //* Custom Hooks
  const { tasks } = useTask();

  //* Derived State
  const filteredTasks: ITask[] = selectedFilter === "all" ? tasks : tasks.filter((task) => task.type === selectedFilter);
  const activeTasks: number = tasks.filter((task) => !task.completed).length;



  return (
    <View className="flex-1 bg-white">
      <LinearGradient
        colors={["#FFF6F2", "#FDE2DD", COLORS.primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute top-0 left-0 right-0 h-[70%]"
      />

      <SafeAreaView className="flex-1">
        <View className="h-[40%] items-center justify-center space-y-4">
          <View className="mt-2">
            <TaskCounter count={activeTasks} />
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
              <TaskFilters
                setSelectedFilter={setSelectedFilter}
                selectedFilter={selectedFilter}
              />
            </View>

            <BottomSheetFlatList
              data={filteredTasks}
              keyExtractor={(item: ITask) => item.id}
              renderItem={({ item }: { item: ITask }) => <Task task={item} />}
              contentContainerStyle={{ paddingBottom: 100 }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </BottomSheet>
      </SafeAreaView>

      <AddButton />
    </View>
  );
};

export default TaskListScreen;
