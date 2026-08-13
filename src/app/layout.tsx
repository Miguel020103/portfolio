import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miguel González | Portfolio",
  description: "Desarrollador Frontend con experiencia en React, Next.js y Flutter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}