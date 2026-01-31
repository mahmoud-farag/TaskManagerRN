import { Ionicons } from "@expo/vector-icons";

export type TaskType = 'high' | 'medium' | 'low';

export type IconName = React.ComponentProps<typeof Ionicons>['name'];
export type ICONS_MAPType = {[key: string]: {name: IconName, color: string}}

export interface ITask {
  id: string;
  title: string;
  description?: string;
  type: TaskType;
  completed: boolean;
  dueTime: string;
  createdAt: string;
};

export type FilterType = {
  label: string;
  value: string;
  iconName?: IconName;
  iconColor?: string;
  iconSize?: number;
}

