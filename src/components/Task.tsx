import { Checkbox } from 'expo-checkbox';
import { useState } from 'react';
import { Text, View } from "react-native";
import { ITask } from '../types';
import { formatDate } from '../utils';
import TaskType from './TaskType';

const Task = ({ task }: { task: ITask }) => {
  const [isCompleted, setIsCompleted ] = useState(false);
  
  return (
    <View className="flex-row items-center gap-4 border border-slate-200 rounded-2xl p-4 mb-3 ">

      <Checkbox
        className="h-6 w-6 rounded border-2 border-blue-500" 
        value={isCompleted}
        onValueChange={(newValue) => setIsCompleted(!isCompleted)}
        color={isCompleted ? '#ff4d6d' : undefined }
      />

      <View className="flex-1">
        <Text className="text-xl font-semibold text-slate-800">{task.title}</Text>
        <View className='flex flex-row gap-1 items-center '>
          <TaskType type={task.type}/>
        </View>
      </View>

      <Text className="text-md text-slate-600">{formatDate(task.createdAt)}</Text>
    </View>
  );
};

export default Task;
