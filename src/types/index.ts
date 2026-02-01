import { Ionicons } from "@expo/vector-icons";

export type Priority = "high" | "medium" | "low";
export type AllType = "all";

export type IconName = React.ComponentProps<typeof Ionicons>["name"];
export type ICONS_MAPType = {
  [key: string]: { name: IconName; color: string };
};

export interface ITask {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  completed: boolean;
  createdAt: Date;
}

export type FilterType = {
  label: string;
  value: Priority | AllType;
  iconName?: IconName;
  iconColor?: string;
  iconSize?: number;
};

export interface ITaskContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, updatedTask: ITask) => void;
}
