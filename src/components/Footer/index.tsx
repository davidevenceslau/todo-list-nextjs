import { AddTask } from "../TodoList/AddTask";

export function Footer() {
  return (
    <div className="flex justify-between py-4 todo-list-spacing-x absolute bottom-0 w-[calc(100%-0.5rem)] border-t-2 todo-list-border-dashed dark:todo-list-border-dark-dashed">
      <AddTask />
    </div>
  );
}
