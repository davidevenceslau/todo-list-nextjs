"use client";

import { useContext } from "react";
import { TodoListContext } from "./index";

export const useTodoList = () => {
  const context = useContext(TodoListContext);
  if (!context) {
    throw new Error("useTodoList must be used within an TodoListProvider");
  }
  return context;
};
