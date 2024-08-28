"use client";

import { useEffect, useRef, useState } from "react";
import { GoTrash } from "react-icons/go";
import { useToastNotificationApi } from "@/hooks/useToastNotificationApi";
import { ModalConfirm } from "@/components/modais/ModalConfirm";
import { useSubmitFormAction } from "@/hooks/useSubmitFormAction";
import { DELAY_API_TIME_MS } from "@/constants/delayApiTimeMs";
import { useTodoList } from "@/contexts/TodoListContext/useTodoList";

type RemoveTaskProps = {
  task: Task;
  tooglePendingTask: (pending: boolean, task?: TaskId) => void;
};

export function RemoveTask({ task, tooglePendingTask }: RemoveTaskProps) {
  const { removeTask } = useTodoList();
  const { action, pending, state, onSubmit } = useSubmitFormAction(
    removeTask,
    DELAY_API_TIME_MS,
  );
  useToastNotificationApi(state);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const formUseRef = useRef<HTMLFormElement | null>(null);

  const modalConfirmationMessageLength = 30;

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    action(formData);
    if (typeof onSubmit === "function") {
      onSubmit();
    }
  };

  const onRemoveTask = () => {
    const form = formUseRef.current;
    const e = new Event("submit", {
      bubbles: true,
      cancelable: true,
    });
    if (form) {
      form.dispatchEvent(e);
    }
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
      <form ref={formUseRef} onSubmit={handleOnSubmit}>
        <input type="hidden" name="id" value={task.id} />
        <GoTrash
          className="cursor-pointer text-primay"
          title="Excluir Tarefa"
          onClick={() => setShowModalConfirm(true)}
        />
      </form>
      {showModalConfirm && (
        <ModalConfirm
          title={`Exluir tarefa?`}
          message={`Confirmar a exclusão da tarefa "${task?.task.length > modalConfirmationMessageLength ? `${task?.task.slice(0, modalConfirmationMessageLength)}...` : task?.task}".\n Essa ação não pode ser revertida.`}
          btnConfirmText="Excluir"
          onCancel={() => setShowModalConfirm(false)}
          onConfirm={() => onModalConfirm()}
        />
      )}
    </>
  );
}
