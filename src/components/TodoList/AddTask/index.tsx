"use client";

import { useSubmitFormAction } from "@/hooks/useSubmitFormAction";
import { useTodoList } from "@/contexts/TodoListContext/useTodoList";
import { AddTaskForm } from "./AddTaskForm";

export function AddTask() {
  const { addTask } = useTodoList();

  const { action, state, pending, onSubmit } = useSubmitFormAction(
    addTask,
    1500,
  );

  return (
    <AddTaskForm
      action={action}
      state={state}
      onSubmit={onSubmit}
      pending={pending}
    />
  );
}
