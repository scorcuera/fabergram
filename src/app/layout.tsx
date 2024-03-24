import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({ 
  weight: "200",
  subsets: ["latin"] 
});

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
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
