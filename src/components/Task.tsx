import { Ionicons } from "@expo/vector-icons";
import ExpoCheckbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { COLORS } from "../constants";
import { useTask } from "../hooks/TaskContext";
import { ITask } from "../types";
import { formatDate, handleDeleteAlert } from "../utils";
import TaskType from "./TaskType";

const Task = ({ task }: { task: ITask }) => {
  //* States
  const router = useRouter();

  //* Custom Hooks
  const { removeTask, updateTask } = useTask();

  //* Handlers
  function handleOnTaskSwipe() {
    return (
      <View className="mb-3 ml-4 flex items-center justify-center">
        <TouchableOpacity
          onPress={handleDeleteAlertTask}
          className="bg-primary justify-center items-center w-20 h-full rounded-2xl"
        >
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  }

  function handleDeleteAlertTask() {
    handleDeleteAlert({
      title: "Delete Task",
      description: "Are you sure you want to delete this task?",
      onAction: () => removeTask(task.id),
    });
  }

  function handleOnTaskComplete(newValue: boolean) {
    updateTask(task.id, { ...task, completed: newValue });
  }

  return (
    <ReanimatedSwipeable
      renderRightActions={handleOnTaskSwipe}
      containerStyle={{ width: "100%" }}
    >
      <TouchableOpacity
        onPress={() => router.push(`/task/${task.id}`)}
        className="flex-row items-center gap-4 border border-slate-200 rounded-2xl p-4 mb-3 "
      >
        <ExpoCheckbox
          className="h-6 w-6 rounded border-2 border-blue-500"
          value={task.completed}
          onValueChange={handleOnTaskComplete}
          color={task.completed ? COLORS.primary : undefined}
        />

        <View className="flex-1">
          <Text
            className={`text-xl font-semibold ${task.completed ? "text-slate-400 line-through" : "text-slate-800"}`}
          >
            {task.title}
          </Text>

          <View className="flex flex-row gap-1 items-center ">
            <TaskType type={task.type} />
          </View>
        </View>

        <Text
          className={`text-md ${
            task.completed ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {formatDate(task.createdAt)}
        </Text>
      </TouchableOpacity>
    </ReanimatedSwipeable>
  );
};

export default Task;
