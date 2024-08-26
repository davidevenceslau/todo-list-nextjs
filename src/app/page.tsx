import { Header } from "@/components/Header";
import { ListTasks } from "@/components/TodoList/ListTasks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-[90%] h-[90%] min-w-[320px] md:w-[80%] md:h-[80%] m-auto px-1 bg-white dark:bg-dark-background shadow-lg relative">
      <Header />
      <ListTasks />
      <Footer />
    </main>
  );
}
