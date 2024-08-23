import { ThemeToggle } from "../ThemeToggle";

export function TodoHeader() {
  return (
    <header className="py-6 todo-list-spacing-x flex justify-between items-center border-b-2 todo-list-border-dashed dark:todo-list-border-dark-dashed">
      <div className="flex gap-4 justify-between">
        <h1 className="text-black dark:text-white text-4xl">
          Lista de Tarefas
        </h1>
        <span className="h-[38px] px-4 py-2 rounded-3xl bg-[#E9E9E9] text-black dark:bg-secondary-dark dark:text-white">
          0 itens
        </span>
      </div>
      <ThemeToggle />
    </header>
  );
}
