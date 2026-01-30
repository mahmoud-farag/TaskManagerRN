import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { iconsMap } from "../constants";


const TaskType = ({ type }: { type: string }) => {

  const taskType = iconsMap[type.toLowerCase() as keyof typeof iconsMap]; 

  return (
    <View className='flex flex-row gap-1 items-center '>
      <Ionicons name={taskType.name} size={14} color={taskType.color} />
      <Text className="text-md text-slate-500 mt-1">High</Text>
    </View>
  )
}

export default TaskType;