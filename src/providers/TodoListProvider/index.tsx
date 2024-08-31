"use client";

import { ReactNode, useEffect } from "react";
import { wait } from "@/utils/misc";
import { TodoListContext } from "@/contexts/TodoListContext";
import {
  createTask,
  deleteTask,
  completeTask,
  hasUserHashCookie,
  generateUserHashCookie,
} from "@/actions";
import { ApiResponse } from "@/api/types";

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
    const response = await completeTask(formData);
    return response;
  };

  const removeTask = async (
    state: object,
    formData: FormData,
    delayMs?: number,
  ) => {
    if (delayMs) {
      await wait(delayMs);
    }
    const response = await deleteTask(formData);
    return response;
  };

  const handleUserHash = async () => {
    if (!(await hasUserHashCookie())) {
      await generateUserHashCookie();
    }
  };

  useEffect(() => {
    handleUserHash();
  }, []);

  return (
    <TodoListContext.Provider
      value={{ tasks, addTask, completedTask, removeTask }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
