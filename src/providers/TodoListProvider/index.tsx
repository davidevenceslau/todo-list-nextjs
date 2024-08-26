"use client";

import { ReactNode } from "react";
import { TodoListContext } from "@/contexts/TodoListContext";
import { Task } from "@/actions/types";
import { createTask, toggleTaskCompleted } from "@/actions";
import { ApiResponse } from "@/api/types";
import { wait } from "@/utils/misc";

type TodoListProviderProps = {
  children: ReactNode;
  tasks: Task[];
};

export function TodoListProvider({ children, tasks }: TodoListProviderProps) {
  const addTask = async (
    state: object,
    formData: FormData,
    delayMs?: number,
  ): Promise<ApiResponse> => {
    if (delayMs) {
      await wait(delayMs);
    }
    const response = await createTask(formData);
    return response;
  };

  const completedTask = async (
    state: object,
    formData: FormData,
    delayMs?: number,
  ): Promise<ApiResponse> => {
    if (delayMs) {
      await wait(delayMs);
    }
    const response = await toggleTaskCompleted(formData);
    return response;
  };

  const removeTask = () => {
    // TODO addTask
  };

  return (
    <TodoListContext.Provider
      value={{ tasks, addTask, completedTask, removeTask }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
