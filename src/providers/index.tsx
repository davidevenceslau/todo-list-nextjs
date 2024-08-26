import { ApiResponse } from "@/api/types";
import { fetchTasks } from "@/actions";
import { Task } from "@/actions/types";

import { ThemeProvider } from "./ThemeProvider";
import { TodoListProvider } from "./TodoListProvider";

type Props = {
  children: React.ReactNode;
};

export async function GlobalProviders({ children }: Props) {
  const response: ApiResponse = await fetchTasks();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TodoListProvider tasks={response.data ? (response.data as Task[]) : []}>
        {children}
      </TodoListProvider>
    </ThemeProvider>
  );
}
