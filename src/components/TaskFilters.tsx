import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { FILTERS } from "../constants";

const TaskFilters = () => {
  return (
    <View className="flex flex-row gap-5 justify-center ">
      {
        FILTERS.map(item => (

          <View key={item.value} className="border border-slate-300   px-3 py-1 rounded-3xl flex flex-row items-center gap-1">

            {item.value !== 'all' && <Ionicons name={item.iconName} size={item.iconSize} color={item.iconColor} />}

            <Text className="font-semibold">{item.label}</Text>
          </View>
        ))
      }
    </View>
  );
};

export default TaskFilters;
