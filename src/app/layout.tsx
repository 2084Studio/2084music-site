import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2084 Music",
  description: "2084 Music — releases & catalog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
