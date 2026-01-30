import { Text, View } from 'react-native';



const TaskCounter = ({ count }: {count: number}) => {
  return (
    <View className="items-center my-6">
      {/* Title */}
      <Text className="text-2xl font-semibold text-slate-900 mb-4">
        TaskFlow
      </Text>

      {/* Outer Circle */}
      <View className="w-40 h-40 rounded-full bg-pink-100 items-center justify-center">
        {/* Inner Circle */}
        <View className="w-28 h-28 rounded-full bg-white items-center justify-center shadow">
          <Text className="text-4xl font-bold text-slate-900">
            {count}
          </Text>
        </View>
      </View>

      {/* Subtitle */}
      <Text className="text-slate-500 mt-3">
        Active Tasks
      </Text>
    </View>
  );
};

export default TaskCounter;
