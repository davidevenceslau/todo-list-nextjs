import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { GlobalProviders } from "@/providers";
import { kalam } from "@/fonts";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lista de Tarefas",
  description: "Next 14, Tailwind, Dark Mode",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <body
        className={`${kalam.className} flex h-screen bg-body-background dark:bg-body-dark-background`}
      >
        <GlobalProviders>{children}</GlobalProviders>
        <ToastContainer />
      </body>
    </html>
  );
}
