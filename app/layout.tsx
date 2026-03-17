import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrimePropNavbar from "./components/PrimePropNavbar";
import Image from "next/image";
import PrimePropHeader from "./components/PrimePropHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "PrimeProp Dashboard",
  description: "PrimeProp real estate dashboard UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
        <PrimePropNavbar />
        <PrimePropHeader /> 
        {children}
      </body>
    </html>
  );
}
