import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { FILTERS } from "../constants";


const TaskType = ({ type }: { type: string }) => {

  const taskType = FILTERS.find(item => type.toLowerCase() === item.value); 

  return (
    <View className='flex flex-row gap-1 items-center '>
      <Ionicons name={taskType?.iconName} size={16} color={taskType?.iconColor} />
      <Text className="text-md text-slate-500 mt-1">{taskType?.label}</Text>
    </View>
  )
}

export default TaskType;