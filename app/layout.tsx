import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "PrimeProp Dashboard",
  description: "PrimeProp real estate dashboard UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}