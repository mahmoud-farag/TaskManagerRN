import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { FILTERS } from "../constants";

interface Props {
  handleTaskFilter: (type: string) => void;
  selectedFilter: string;
}

const TaskFilters = ({ handleTaskFilter, selectedFilter }: Props) => {
  return (
    <View className="flex flex-row gap-5 justify-center ">
      {FILTERS.map((item) => {
        const isActive = selectedFilter === item.value;
        return (
          <TouchableOpacity
            key={item.value}
            onPress={() => handleTaskFilter(item.value)}
          >
            <View
              className={` px-4 py-2 rounded-3xl flex flex-row items-center gap-1 ${isActive ? "bg-[#ff4d6d]" : " border border-slate-300"}`}
            >
              {item.value !== "all" && (
                <Ionicons
                  name={item.iconName}
                  size={item.iconSize}
                  color={item.iconColor}
                />
              )}

              <Text
                className={`font-semibold ${isActive ? "text-white" : "text-slate-800"}`}
              >
                {item.label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TaskFilters;
