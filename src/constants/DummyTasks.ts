import { ITask } from "../types";

const DUMMY_TASKS: ITask[] = [
  {
    id: "welcome-task",
    title: "Welcome to TaskFlow 👋",
    description:
      "This is a sample task. Swipe left to delete it or add your own tasks.",
    type: "medium",
    completed: false,
    dueTime: "9:00 AM",
    createdAt: new Date(),
  },
];

export default DUMMY_TASKS;
