import { FilterType } from "../types";

const FILTERS: FilterType [] = [
  { label: 'All', value: 'all' },
  { label: 'High', value: 'high', iconName: 'flame', iconSize: 20,  iconColor: '#f97316' },
  { label: 'Medium', value: 'medium', iconName: 'flash', iconSize: 20, iconColor: '#facc15' },
  { label: 'Low', value: 'low', iconName: 'leaf', iconSize: 20,  iconColor: '#22c55e' },
];

export default FILTERS;