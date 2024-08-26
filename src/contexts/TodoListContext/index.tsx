"use client";

import { Task } from "@/actions/types";
import { ApiResponse } from "@/api/types";
import { createContext } from "react";

export type TodoListContextProps = {
  tasks: Task[];
  addTask: (
    state: object,
    formData: FormData,
    delay?: number,
  ) => Promise<ApiResponse>;
  completedTask: (
    state: object,
    formData: FormData,
    delay?: number,
  ) => Promise<ApiResponse>;
  removeTask: () => void;
};

export const TodoListContext = createContext<TodoListContextProps>(
  {} as TodoListContextProps,
);
