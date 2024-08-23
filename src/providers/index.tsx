"use client";

import { ThemeProvider } from "./ThemeProvider";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
