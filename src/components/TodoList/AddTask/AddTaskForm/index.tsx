import { Button } from "@/components/common/Button";
import { useEffect, useState } from "react";

type AddTaskFormProps = {
  onSubmit: (formData: FormData) => void;
  pending: boolean;
  isResetForm: boolean;
};

export function AddTaskForm({
  onSubmit,
  pending,
  isResetForm,
}: AddTaskFormProps) {
  const [title, setTitle] = useState("");

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (typeof onSubmit === "function") {
      onSubmit(formData);
    }
  };

  useEffect(() => {
    if (isResetForm) {
      setTitle("");
    }
  }, [isResetForm]);

  return (
    <>
      <form className="w-[100%]" onSubmit={handleOnSubmit}>
        <div className="w-[100%] gap-4 flex justify-between items-center flex-col md:flex-row">
          <input
            type="text"
            name="title"
            placeholder="Digite uma nova tarefa aqui..."
            className="w-[100%] p-2 placeholder-secondary-text focus:outline-none focus:ring focus:ring-neutral-200 bg-white dark:bg-body-dark-background text-2xl read-only:opacity-50"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
            required
          />
          <Button
            label={pending ? "" : "Adicionar tarefa"}
            type="submit"
            isLoading={pending}
            disabled={pending}
          />
        </div>
      </form>
    </>
  );
}
