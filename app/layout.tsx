import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "PrimeProp Dashboard",
  description: "PrimeProp real estate dashboard UI",
};

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  style: ["normal", "italic"],
  variable: "--font-figtree",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="font-figtree">{children}</body>
    </html>
  )
}