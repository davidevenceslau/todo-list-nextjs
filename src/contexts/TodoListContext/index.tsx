"use client";

import { createContext } from "react";

export type TodoListContextProps = {
  isInitialLoading: boolean;
  tasks: Task[];
  addTask: (taskName: string) => Promise<TodoListActionResponse>;
  completedTask: (id: string) => Promise<TodoListActionResponse>;
  removeTask: (id: string) => Promise<TodoListActionResponse>;
};

export const TodoListContext = createContext<TodoListContextProps>(
  {} as TodoListContextProps,
);
