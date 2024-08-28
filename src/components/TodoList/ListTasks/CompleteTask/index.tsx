import { useEffect } from "react";
import {
  autoCloseTimeMs,
  TypeToSenderToastNotificationApi,
  useToastNotificationApi,
} from "@/hooks/useToastNotificationApi";
import { useCompleteTask } from "./useCompleteTask";

type CompleteTaskProps = {
  task: Task;
  tooglePendingTask: (pending: boolean, taskId?: TaskId) => void;
};

export function CompleteTask({ task, tooglePendingTask }: CompleteTaskProps) {
  const { action, state, onSubmit, pending } = useCompleteTask();
  useToastNotificationApi(state, TypeToSenderToastNotificationApi.ERROR);

  const onTaskCheckCompleted = (event: React.MouseEvent<HTMLInputElement>) => {
    const form = event.currentTarget.form;
    const e = new Event("submit", {
      bubbles: true,
      cancelable: true,
    });
    if (form) {
      form.dispatchEvent(e);
    }
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    action(formData);
    if (typeof onSubmit === "function") {
      onSubmit();
    }
  };

  const isApiRequestError = () => {
    return state.message && !state.success;
  };

  useEffect(() => {
    if (isApiRequestError()) {
      setTimeout(() => {
        location.reload();
      }, autoCloseTimeMs);
    }
  }, [state]);

  useEffect(() => {
    if (pending) {
      tooglePendingTask(true, task.id);
    } else {
      tooglePendingTask(false);
    }
  }, [pending]);

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="hidden" name="id" value={task.id} />
        <input type="hidden" name="task" value={task.task} />
        <input type="hidden" name="createDate" value={task.createDate} />
        <input
          type="checkbox"
          name="completed"
          disabled={pending || task.completed}
          defaultChecked={task.completed ? true : false}
          id={`checkbox-task-${task.id}`}
          onClick={(e) => onTaskCheckCompleted(e)}
        />
        <label
          className={`min-w-10 ${!task.completed ? "cursor-pointer" : "cursor-default"}`}
          htmlFor={`checkbox-task-${task.id}`}
          title={!task.completed ? "Concluir tarefa" : ""}
        ></label>
      </form>
    </>
  );
}
