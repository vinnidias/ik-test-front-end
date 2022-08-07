import React, { createContext, ReactNode, useState } from "react";

export const TasksContext = createContext({});

type ContextProps = {
  children: ReactNode;
};

type Task = {
  id: string;
  name: string;
  title: string;
  description: string;
  date: string;
  hour: string;
  created_at: Date;
  updated_at?: Date;
};

export const TasksProvider = ({ children }: ContextProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskData, setTaskData] = useState({
    id: "",
    name: "",
    title: "",
    description: "",
    hour: "",
    date: "",
    created_at: "",
    updated_at: "",
  });

  return (
    <TasksContext.Provider value={{ tasks, setTasks, taskData, setTaskData }}>
      {children}
    </TasksContext.Provider>
  );
};
