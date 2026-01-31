import { TouchableOpacity, View } from "react-native";

interface props {
  children: React.ReactNode;
  onPress: () => void;
  isActive: boolean;
}

const PriorityButton = ({ children, onPress, isActive }: props) => {
  return (
    <View
      className={`border w-full rounded-2xl p-2 mb-5 border-slate-100 ${isActive ? "bg-slate-100 " : ""}`}
    >
      <TouchableOpacity onPress={onPress}>
        <View className="flex flex-row items-center justify-center gap-1 ">
          {children}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PriorityButton;
