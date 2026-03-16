import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrimePropNavbar from "./components/PrimePropNavbar";
import Image from "next/image";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <PrimePropNavbar />
        <section className="ppd-hero-banner">
          <div className="ppd-hero-left">
            <div className="ppd-logo-row">
             <Image
                        src="/logo.png"
                        alt="User"
                        className="mr-2"
                        width={178}
                        height={32}
                        style={{}}
                        priority
                      />
            </div>

            <div className="ppd-breadcrumbs">PrimeProp &nbsp;/&nbsp; <span style={{color:'#1F2937'}}>Dashboard Overview</span></div>
            <h1 className="ppd-main-title">Dashboard Overview</h1>
          </div>

          <div className="ppd-hero-building">
            <img src="/primeprop-building.png" alt="Building" />
          </div>

          <div className="ppd-hero-actions">
            <button className="ppd-filter-btn">
              All Property 
            </button>
            <button className="ppd-refresh-btn">
              <span>↻</span> Refresh
            </button>
          </div>
        </section>

        {children}
      </body>
    </html>
  );
}
