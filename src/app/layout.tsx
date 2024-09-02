import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { GlobalProviders } from "@/providers";
import { kalam } from "@/fonts";
import AnalysisAndMonitoringTools from "@/components/misc/AnalysisAndMonitoringTools.ts";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lista de Tarefas",
  description:
    "Lista de Tarefas está na fase MVP, desenvolvido utilizando em Next 14, Typescript, Tailwind CSS etc.",
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
        <GlobalProviders>
          <main className="w-[100%] h-[100%] min-w-[320px] sm:w-[90%] sm:h-[90%] md:w-[80%] md:h-[80%] m-auto px-1 bg-white dark:bg-dark-background shadow-lg relative">
            {children}
          </main>
        </GlobalProviders>
        {process.env.NODE_ENV === "production" && (
          <AnalysisAndMonitoringTools />
        )}
        <ToastContainer />
      </body>
    </html>
  );
}
