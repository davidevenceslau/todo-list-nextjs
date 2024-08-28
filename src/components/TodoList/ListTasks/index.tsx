"use client";

import { useState } from "react";
import { useTodoList } from "@/contexts/TodoListContext/useTodoList";
import { Loading } from "@/components/common/Loading";
import { CompleteTask } from "./CompleteTask";
import { RemoveTask } from "./RemoveTask";
import { PendingTask } from "./types";
import "./styles.css";

export function ListTasks() {
  const { tasks } = useTodoList();
  const [pendingTask, setPendingTask] = useState<PendingTask>({
    pending: false,
  });

  const tooglePendingTask = (pending: boolean, taskId?: TaskId) => {
    setPendingTask({
      pending: pending,
      taskId: taskId,
    });
  };

  const isPending = (taskId: TaskId) => {
    return pendingTask.pending && pendingTask.taskId === taskId;
  };

  return (
    <>
      <section className="todo-list-section-container">
        <div className="todo-list-section-content h-[100%] overflow-y-auto">
          {tasks?.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {tasks.map((task) => (
                <li key={task.id} className="flex items-center gap-1">
                  <CompleteTask
                    task={task}
                    tooglePendingTask={tooglePendingTask}
                  />
                  {isPending(task.id) && (
                    <div>
                      <Loading />
                    </div>
                  )}
                  <span
                    className={`text-black text-2xl dark:text-secondary-text ${(isPending(task.id) || task.completed) && "opacity-50"} ${task.completed && "decoration-1 line-through"}`}
                  >
                    {task.task}
                  </span>
                  <RemoveTask
                    task={task}
                    tooglePendingTask={tooglePendingTask}
                  />
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
    </>
  );
}
