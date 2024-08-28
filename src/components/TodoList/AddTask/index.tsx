"use client";

import { useSubmitFormAction } from "@/hooks/useSubmitFormAction";
import { useTodoList } from "@/contexts/TodoListContext/useTodoList";
import { DELAY_API_TIME_MS } from "@/constants/delayApiTimeMs";
import { AddTaskForm } from "./AddTaskForm";

export function AddTask() {
  const { addTask } = useTodoList();

  const { action, state, pending, onSubmit } = useSubmitFormAction(
    addTask,
    DELAY_API_TIME_MS,
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
