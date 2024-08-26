"use client";

import "./styles.css";

import { useTodoList } from "@/contexts/TodoListContext/useTodoList";
import { useSubmitFormAction } from "@/hooks/useSubmitFormAction";
import { useEffect, useState } from "react";
import { Loading } from "@/components/common/Loading";
import { Task } from "@/actions/types";
import { useToastNotificationApi } from "@/hooks/useToastNotificationApi";
import { ToastNotification } from "../../ToastNotification";

export function ListTasks() {
  const { tasks, completedTask } = useTodoList();
  const { action, pending, state, onSubmit } = useSubmitFormAction(
    completedTask,
    1500,
  );
  const [taskCurrentAction, setTaskCurrentAction] = useState<Task | null>(null);
  const { sendToastNotification, message, type } =
    useToastNotificationApi(state);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    action(formData);
    if (typeof onSubmit === "function") {
      onSubmit();
    }
  };

  const onTaskCheckCompleted = (
    event: React.MouseEvent<HTMLInputElement>,
    task: Task,
  ) => {
    setTaskCurrentAction(task);
    const form = event.currentTarget.form;
    const e = new Event("submit", {
      bubbles: true,
      cancelable: true,
    });
    if (form) {
      form.dispatchEvent(e);
    }
  };

  const isTaskCurrentAction = (taskId: string) => {
    if (taskCurrentAction) {
      return taskId === taskCurrentAction.id;
    }
    return false;
  };

  const isApiRequestError = () => {
    return state.message && !state.success;
  };

  useEffect(() => {
    if (isApiRequestError()) {
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }, [state]);

  return (
    <>
      <section className="todo-list-section-container">
        <div className="todo-list-section-content h-[100%] overflow-y-auto">
          {tasks?.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {tasks.map((task) => (
                <li key={task.id}>
                  <form className="flex items-center" onSubmit={handleOnSubmit}>
                    <input type="hidden" name="id" value={task.id} />
                    <input type="hidden" name="task" value={task.task} />
                    <input
                      type="hidden"
                      name="createDate"
                      value={task.createDate}
                    />
                    <input
                      type="checkbox"
                      name="completed"
                      disabled={
                        pending ||
                        task.completed ||
                        isTaskCurrentAction(task.id)
                      }
                      defaultChecked={task.completed ? true : false}
                      id={`checkbox-task-${task.id}`}
                      onClick={(e) => onTaskCheckCompleted(e, task)}
                    />
                    <label
                      className="min-w-10"
                      htmlFor={`checkbox-task-${task.id}`}
                    ></label>
                    {pending && isTaskCurrentAction(task.id) && (
                      <div>
                        <Loading />
                      </div>
                    )}
                    <span
                      className={`pl-1 text-black text-2xl dark:text-secondary-text ${(isTaskCurrentAction(task.id) || task.completed) && "opacity-50"} ${task.completed && "decoration-1 line-through"}`}
                    >
                      {task.task}
                    </span>
                  </form>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-secondary-text text-2xl">
              Lista de tarefas vazia
            </p>
          )}
        </div>
      </section>
      {!state.success && message && (
        <ToastNotification
          send={sendToastNotification}
          message={message}
          type={type}
        />
      )}
    </>
  );
}
