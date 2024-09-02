import { Header } from "@/components/Header";
import { ListTasks } from "@/components/TodoList/ListTasks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <ListTasks />
      <Footer />
    </>
  );
}
