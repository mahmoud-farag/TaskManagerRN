import { useRouter } from 'expo-router';
import { Text, TouchableOpacity } from "react-native";

const AddButton = () => {
  const router = useRouter();


  function handleOnPress() {

    router.push('/(modals)/add-task');
  }

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      className="absolute bottom-10 right-6 w-16 h-16 bg-[#ff4d6d] rounded-full items-center justify-center shadow-lg elevation-5"
      activeOpacity={0.8}
    >
      <Text className="text-white text-4xl font-light mb-1">+</Text>
    </TouchableOpacity>
  )
}

export default AddButton;