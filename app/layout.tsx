import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Jakov Knezevic Portfolio",
  description: "Jakov Knezevic Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
