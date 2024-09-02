"use client";

import { useState } from "react";
import { useTodoList } from "@/contexts/TodoListContext/useTodoList";
import { AddTaskForm } from "./AddTaskForm";
import { useToastNotification } from "@/hooks/useToastNotification";
import { useTodoAction } from "@/hooks/useTodoAction";

export function AddTask() {
  const { addTask } = useTodoList();
  const [actionParams, setActionParams] = useState<string>("");
  const { pending, response, isActionFinalized } = useTodoAction(
    () => addTask(actionParams),
    actionParams,
  );
  useToastNotification(response);

  const handleAddTask = async (formData: FormData) => {
    const taskTitle = formData.get("title") as string;
    setActionParams(taskTitle);
  };

  return (
    <AddTaskForm
      onSubmit={handleAddTask}
      pending={pending}
      isResetForm={isActionFinalized}
    />
  );
}
