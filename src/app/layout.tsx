import type { Metadata } from "next";
import { Providers } from "@/providers";
import { kalam } from '@/fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "To-do List",
  description: "Next 14, Tailwind, Dark Mode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <body className={`${kalam.className} flex h-screen bg-body-background dark:bg-body-dark-background`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
