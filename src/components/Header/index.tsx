"use client";

import { useTodoList } from "@/contexts/TodoListContext/useTodoList";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { tasks } = useTodoList();

  const getItemsNumber = () => {
    if (tasks.length === 1) {
      return "1 item";
    }
    if (tasks.length > 1) {
      return `${tasks.length} itens`;
    }
    return "0 itens";
  };

  return (
    <header className="py-6 todo-list-spacing-x flex gap-2 justify-between items-center border-b-2 todo-list-border-dashed dark:todo-list-border-dark-dashed">
      <div className="flex justify-start md:justify-between items-center gap-2 md:gap-4">
        <h1 className="text-black dark:text-white text-4xl">
          Lista de Tarefas
        </h1>
        <span className="min-w-[110px] md:min-w[auto] h-[38px] px-4 py-2 text-center rounded-3xl bg-[#E9E9E9] text-black dark:bg-secondary-dark dark:text-white">
          {getItemsNumber()}
        </span>
      </div>
      <ThemeToggle />
    </header>
  );
}
