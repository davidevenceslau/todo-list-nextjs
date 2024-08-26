import type { Metadata } from "next";
import { GlobalProviders } from "@/providers";
import { kalam } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "To-do List in Next 14",
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
      </body>
    </html>
  );
}
