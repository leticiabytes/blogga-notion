import type { Metadata } from "next";
import { graphik } from "@/lib/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blogga Notion",
  description: "A blog created with Next.js and using Notion like a database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={graphik.className}>{children}</body>
    </html>
  );
}
