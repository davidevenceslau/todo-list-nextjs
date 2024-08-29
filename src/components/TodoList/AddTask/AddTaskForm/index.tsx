import { useEffect, useState } from "react";
import { ApiResponse } from "@/api/types";
import { useToastNotificationApi } from "@/hooks/useToastNotificationApi";
import { Button } from "@/components/common/Button";

type AddTaskFormProps = {
  action: (payload: FormData) => void;
  state: ApiResponse;
  onSubmit: () => void;
  pending: boolean; // set in onSubmit
};

export function AddTaskForm({
  action,
  state,
  onSubmit,
  pending,
}: AddTaskFormProps) {
  const [value, setValue] = useState("");
  useToastNotificationApi(state);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    action(formData);
    if (typeof onSubmit === "function") {
      onSubmit();
    }
  };

  useEffect(() => {
    if (state.success) {
      setValue("");
    }
  }, [state]);

  return (
    <>
      <form className="w-[100%]" onSubmit={handleOnSubmit}>
        <div className="w-[100%] gap-4 flex justify-between items-center flex-col md:flex-row">
          <input
            type="text"
            name="task"
            placeholder="Digite uma nova tarefa aqui..."
            className="w-[100%] p-2 placeholder-secondary-text focus:outline-none focus:ring focus:ring-neutral-200 bg-white dark:bg-body-dark-background text-2xl read-only:opacity-50"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            readOnly={pending}
            autoComplete="off"
          />
          <Button
            label={pending ? "" : "Adicionar tarefa"}
            type="submit"
            isLoading={pending}
            disabled={pending || !value.length}
          />
        </div>
      </form>
    </>
  );
}
