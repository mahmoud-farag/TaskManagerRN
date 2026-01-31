import { PriorityButton } from "@/src/components";
import { FILTERS } from "@/src/constants";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const AddTaskModal = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [priority, setPriority] = useState<string | null>(null);

  return (
    <SafeAreaView
      className="flex-1 bg-[#ff4d6d]  rounded-t-[50px] "
      // edges={["top"]}
      style={{ top: insets.top + 30 }}
    >
      <View className=" flex items-center justify-center">
        <TouchableOpacity onPress={() => router.back()} className="z-10">
          <Ionicons
            className="border-2 border-slate-200 rounded-full p-2"
            name="close"
            size={28}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-center p-10 gap-12">
        {/* Input field */}
        <View className="w-full gap-4">
          <View className="">
            <TextInput
              placeholder="Enter Task Name"
              className="text-slate-100 placeholder:text-slate-300 border-b border-slate-300 text-lg pb-3 px-3"
            />
          </View>

          {/* Task description */}
          <View className="w-full mb-6">
            <TextInput
              placeholder="Enter Task Description"
              placeholderTextColor="rgba(255,255,255,0.6)"
              multiline
              numberOfLines={3}
              textAlignVertical="top"
              className="text-slate-100 placeholder:text-slate-300 border-b border-slate-300 text-lg pb-3 px-3 "
            />
          </View>
        </View>

        {/* priorities */}
        <View className="w-full px-4">
          {FILTERS.map(
            (item) =>
              item.value !== "all" && (
                <PriorityButton
                  key={item.value}
                  onPress={() => setPriority(item.value)}
                >
                  <Ionicons
                    name={item.iconName}
                    size={item.iconSize}
                    color={item.iconColor}
                  />
                  <Text className="text-xl text-slate-200">{item.label}</Text>
                </PriorityButton>
              ),
          )}
        </View>

        {/* Submit button */}
        <TouchableOpacity onPress={() => {}}>
          <Ionicons
            className="border border-slate-200 bg-slate-200 rounded-full p-2"
            name="checkmark-sharp"
            size={30}
            color="#ff4d6d"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddTaskModal;
