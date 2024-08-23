import { TodoHeader } from "@/components/TodoHeader";
import { TodoItems } from "@/components/TodoItems";
import { TodoAddItem } from "@/components/TodoAddItem";

export default function Home() {
  return (
    <main className="w-[80%] h-[500px] md:w-[600px] m-auto px-1 bg-white dark:bg-dark-background shadow-lg relative">
        <TodoHeader />
        <TodoItems />
        <TodoAddItem />
    </main>
  );
}
