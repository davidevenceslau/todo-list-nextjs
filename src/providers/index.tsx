import { ThemeProvider } from "./ThemeProvider";
import { TodoListProvider } from "./TodoListProvider";

type Props = {
  children: React.ReactNode;
};

export async function GlobalProviders({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TodoListProvider>{children}</TodoListProvider>
    </ThemeProvider>
  );
}
