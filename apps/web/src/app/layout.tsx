import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@creatye/ui/styles.css";
import "./app.css";
import "./creatye-canvas.css";
import "./product-completion.css";

export const metadata: Metadata = {
  title: "Creatye Studio",
  description: "Creator operations, production, publishing, and performance."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
