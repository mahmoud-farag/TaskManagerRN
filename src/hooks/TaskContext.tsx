import React, { createContext, useContext, useState } from "react";
import { DUMMY_TASKS } from "../constants";
import { ITask, ITaskContext } from "../types";

const TaskContext = createContext<ITaskContext | null>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[] | []>(DUMMY_TASKS);

  function addTask(task: ITask): void {
    setTasks((prev) => [...prev, task]);
  }

  function removeTask(id: string): void {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function updateTask(id: string, updatedTask: ITask): void {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? updatedTask : task)),
    );
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) throw new Error("useTasks must be used within a TaskProvider");

  return context;
};
