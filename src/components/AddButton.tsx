import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const AddButton = () => {
  //*States
  const router = useRouter();

  //*Handlers
  function handleOnPress() {
    router.push("/(modals)/add-task");
  }

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      className="absolute bottom-10 right-6 w-16 h-16 bg-primary rounded-full items-center justify-center shadow-lg elevation-5"
      activeOpacity={0.8}
    >
      <Text className="text-white text-4xl font-light mb-1">+</Text>
    </TouchableOpacity>
  );
};

export default AddButton;
