import { DELAY_API_TIME_MS } from "@/constants";
import { useTodoList } from "@/contexts/TodoListContext/useTodoList";
import { useSubmitFormAction } from "@/hooks/useSubmitFormAction";

export function useCompleteTask() {
  const { completedTask } = useTodoList();
  const { action, state, onSubmit, pending } = useSubmitFormAction(
    completedTask,
    DELAY_API_TIME_MS,
  );

  return {
    action,
    state,
    onSubmit,
    pending,
  };
}
