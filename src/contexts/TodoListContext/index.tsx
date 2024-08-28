"use client";

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
  removeTask: (
    state: object,
    formData: FormData,
    delay?: number,
  ) => Promise<ApiResponse>;
};

export const TodoListContext = createContext<TodoListContextProps>(
  {} as TodoListContextProps,
);
