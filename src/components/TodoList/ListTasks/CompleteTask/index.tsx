import { useEffect, useState } from "react";
import { useTodoList } from "@/contexts/TodoListContext/useTodoList";
import {
  TypeToSenderToastNotification,
  useToastNotification,
} from "@/hooks/useToastNotification";
import { useTodoAction } from "@/hooks/useTodoAction";

type CompleteTaskProps = {
  task: Task;
  tooglePendingTask: (pending: boolean, taskId?: TaskId) => void;
  isPendingTask: boolean;
};

export function CompleteTask({
  task,
  tooglePendingTask,
  isPendingTask,
}: CompleteTaskProps) {
  const { completedTask } = useTodoList();
  const [actionParams, setActionParams] = useState<string>("");
  const { pending, response } = useTodoAction(
    () => completedTask(actionParams),
    actionParams,
  );
  useToastNotification(response, TypeToSenderToastNotification.ERROR);

  const onTaskCheckCompleted = () => {
    setActionParams(task.id);
  };

  useEffect(() => {
    if (pending) {
      tooglePendingTask(true, task.id);
    } else {
      tooglePendingTask(false);
    }
  }, [pending]);

  return (
    <>
      <form>
        <input
          type="checkbox"
          name="completed"
          disabled={task.completed || pending || isPendingTask}
          defaultChecked={task.completed ? true : false}
          id={`checkbox-task-${task.id}`}
          onClick={() => onTaskCheckCompleted()}
        />
        <label
          className={`min-w-10 ${task.completed || pending || isPendingTask ? "cursor-default" : "cursor-pointer"}`}
          htmlFor={`checkbox-task-${task.id}`}
          title={!task.completed ? "Concluir tarefa" : ""}
        ></label>
      </form>
    </>
  );
}
