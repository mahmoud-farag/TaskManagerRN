import { Ionicons } from "@expo/vector-icons";
import ExpoCheckbox from "expo-checkbox";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { useTask } from "../hooks/TaskContext";
import { ITask } from "../types";
import { formatDate } from "../utils";
import TaskType from "./TaskType";

const Task = ({ task }: { task: ITask }) => {
  const { removeTask, updateTask } = useTask();

  //* Handlers
  const handleOnTaskSwipe = () => {
    return (
      <View className="mb-3 ml-4 flex items-center justify-center">
        <TouchableOpacity
          onPress={handleDeleteAlert}
          className="bg-[#ff4d6d] justify-center items-center w-20 h-full rounded-2xl"
        >
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

  function handleDeleteAlert() {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => removeTask(task.id),
      },
    ]);
  }

  const handleOnTaskComplete = (newValue: boolean) => {
    updateTask(task.id, { ...task, completed: newValue });
  };

  return (
    <ReanimatedSwipeable
      renderRightActions={handleOnTaskSwipe}
      containerStyle={{ width: "100%" }}
    >
      <View className="flex-row items-center gap-4 border border-slate-200 rounded-2xl p-4 mb-3 ">
        <ExpoCheckbox
          className="h-6 w-6 rounded border-2 border-blue-500"
          value={task.completed}
          onValueChange={handleOnTaskComplete}
          color={task.completed ? "#ff4d6d" : undefined}
        />

        <View className="flex-1">

          <Text className={`text-xl font-semibold ${task.completed ? "text-slate-400 line-through" : "text-slate-800"}`}>
            {task.title}
          </Text>

          <View className="flex flex-row gap-1 items-center ">
            <TaskType type={task.type} />
          </View>

        </View>

        <Text
          className={`text-md ${task.completed ? "text-slate-400" : "text-slate-600"
            }`}
        >
          {formatDate(task.createdAt)}
        </Text>
      </View>
    </ReanimatedSwipeable>
  );
};

export default Task;
