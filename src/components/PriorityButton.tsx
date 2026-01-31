import { TouchableOpacity, View } from "react-native";


const PriorityButton = ({children, onPress}: { children: React.ReactNode, onPress: () => void}) => {


  return (
     <View className="border w-full rounded-2xl p-2 mb-5 border-slate-100">
      <TouchableOpacity
      onPress={() => onPress}
      >
        <View className="flex flex-row items-center justify-center gap-1 ">
          {children}
        </View>
      </TouchableOpacity>

    </View>
  )
}


export default PriorityButton;