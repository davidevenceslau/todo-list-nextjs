"use client";

import { useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { useToastNotification } from "@/hooks/useToastNotification";
import { ModalConfirm } from "@/components/modais/ModalConfirm";
import { useTodoList } from "@/contexts/TodoListContext/useTodoList";
import { useTodoAction } from "@/hooks/useTodoAction";

type RemoveTaskProps = {
  task: Task;
  tooglePendingTask: (pending: boolean, task?: TaskId) => void;
  isPendingTask: boolean;
};

export function RemoveTask({
  task,
  tooglePendingTask,
  isPendingTask,
}: RemoveTaskProps) {
  const { removeTask } = useTodoList();
  const [actionParams, setActionParams] = useState<string>("");
  const { pending, response } = useTodoAction(
    () => removeTask(actionParams),
    actionParams,
  );
  useToastNotification(response);

  const [showModalConfirm, setShowModalConfirm] = useState(false);

  const modalConfirmationMessageLength = 30;

  const onRemoveTask = () => {
    setActionParams(task.id);
  };

  const onModalConfirm = () => {
    setShowModalConfirm(false);
    onRemoveTask();
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
        <input type="hidden" name="id" value={task.id} />
        <GoTrash
          className={`text-primay ${isPendingTask ? "cursor-default opacity-50" : "cursor-pointer"}`}
          title="Excluir Tarefa"
          onClick={() => !isPendingTask && setShowModalConfirm(true)}
        />
      </form>
      {showModalConfirm && (
        <ModalConfirm
          title={`Exluir tarefa?`}
          message={`Confirmar a exclusão da tarefa "${task?.title.length > modalConfirmationMessageLength ? `${task?.title.slice(0, modalConfirmationMessageLength)}...` : task?.title}".\n Essa ação não pode ser revertida.`}
          btnConfirmText="Excluir"
          onCancel={() => setShowModalConfirm(false)}
          onConfirm={() => onModalConfirm()}
        />
      )}
    </>
  );
}
