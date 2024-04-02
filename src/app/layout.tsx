import type { Metadata } from "next";
import { nunito } from "./ui/fonts";

import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Fabergram"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased h-screen flex items-center justify-center`} >
        <main className="flex flex-col h-4/6 w-96 md:w-screen items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
