"use client";

import { ReactNode, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import sortOn from "sort-on";
import DOMPurify from "dompurify";
import { TodoListContext } from "@/contexts/TodoListContext";
import {
  generateUserIdAndStore,
  getStoredUserId,
  hasUserIdStored,
} from "@/services/user";
import { KEY_STORAGE, TODO_LIST_ACTION } from "@/constants";
import { misc, store } from "@/utils";
import { todoListActionMessages } from "@/contexts/TodoListContext/types";

type TodoListProviderProps = {
  children: ReactNode;
};

type ErrorAction = Error | string;

export function TodoListProvider({ children }: TodoListProviderProps) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [newTask, setNewTask] = useState<Task>({} as Task);
  const [tasks, setTasks] = useState<Task[]>([]);

  const orderTasks = (tasksToOrder: Task[]) => {
    return sortOn(tasksToOrder, "-createDate");
  };

  const handleSetTasks = async (tasksToSet: Task[], applyDelay?: boolean) => {
    const oderByTask = orderTasks(tasksToSet);
    if (applyDelay) {
      await misc.wait(10);
    }
    setTasks(oderByTask);
  };

  const actionErrorResponse = (error: ErrorAction): TodoListActionResponse => {
    const message = error instanceof Error ? error.message : error;
    return {
      success: false,
      message,
    };
  };

  const addTask = async (title: string): Promise<TodoListActionResponse> => {
    if (TODO_LIST_ACTION.IS_DELAY) {
      await misc.wait(TODO_LIST_ACTION.DELAY_TIME_MS);
    }

    try {
      const userId = getStoredUserId();
      if (userId) {
        const newTask: Task = {
          id: nanoid(6),
          userId,
          title: DOMPurify.sanitize(title),
          createDate: new Date().toISOString(),
          completed: false,
        };
        setNewTask(newTask);
        return {
          success: true,
          message: todoListActionMessages.success.createTask,
        };
      } else {
        throw new Error(todoListActionMessages.error.createTask);
      }
    } catch {
      return actionErrorResponse(todoListActionMessages.error.createTask);
    }
  };

  const completedTask = async (id: string): Promise<TodoListActionResponse> => {
    if (TODO_LIST_ACTION.IS_DELAY) {
      await misc.wait(TODO_LIST_ACTION.DELAY_TIME_MS);
    }

    try {
      const newTasks = tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      );
      handleSetTasks(newTasks);
      return {
        success: true,
        message: todoListActionMessages.success.completedTask,
      };
    } catch {
      return actionErrorResponse(todoListActionMessages.error.completedTask);
    }
  };

  const removeTask = async (id: string): Promise<TodoListActionResponse> => {
    if (TODO_LIST_ACTION.IS_DELAY) {
      await misc.wait(TODO_LIST_ACTION.DELAY_TIME_MS);
    }

    try {
      const newTasks = tasks.filter((item) => item.id !== id);
      if (newTasks.length) {
        handleSetTasks(newTasks, true);
      } else {
        setTasks([]);
        store.removeStoredValue(KEY_STORAGE.TASKS);
      }
      return {
        success: true,
        message: todoListActionMessages.success.removeTask,
      };
    } catch {
      return actionErrorResponse(todoListActionMessages.error.deleteTask);
    }
  };

  const handleUserId = () => {
    if (!hasUserIdStored()) {
      generateUserIdAndStore();
    }
  };

  const saveTasksInStorage = () => {
    if (tasks.length) {
      store.setStoredValue(KEY_STORAGE.TASKS, tasks);
    }
  };

  const getTasksFromStorage = () => {
    const tasksFromStorage = store.getStoredValue(KEY_STORAGE.TASKS);
    if (tasksFromStorage) {
      return tasksFromStorage;
    }
    return [];
  };

  useEffect(() => {
    handleUserId();
    const tasksInStorage = getTasksFromStorage();
    if (tasks.length !== tasksInStorage.lenght) {
      setTasks(tasksInStorage);
    }
  }, []);

  useEffect(() => {
    if (newTask.title) {
      handleSetTasks([...tasks, newTask]);
    }
  }, [newTask]);

  useEffect(() => {
    saveTasksInStorage();
    setIsInitialLoading(false);
  }, [tasks]);

  return (
    <TodoListContext.Provider
      value={{ isInitialLoading, tasks, addTask, completedTask, removeTask }}
    >
      {children}
    </TodoListContext.Provider>
  );
}
