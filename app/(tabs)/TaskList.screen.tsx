import TaskCounter from "@/src/components/TaskCounter";
import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


const TaskListScreen = () => {

  return (
    <SafeAreaView className="">
      <View className="">
          
      {/* header */}
      <View>
        <Text>Header</Text>
      </View>

      {/* Task Counter */}
      <TaskCounter count={6}/>


        {/* Task List */}
        <View>
        <Text>tskList</Text>
        </View>

        {/* FLoating Add Button */}
        <View>
          
        </View>
      </View>

    </SafeAreaView>
  )
}

export default TaskListScreen;