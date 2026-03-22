'use client';

import PrimePropNavbar from "../components/PrimePropNavbar";
import PrimePropHeader from "../components/PrimePropHeader";
import { FilterProvider } from "../context/FilterContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pp-main-body bg-[#F8FAFC]">
        <PrimePropNavbar />
        <FilterProvider>
          <PrimePropHeader />
          <main className="pp-shell-main">{children}</main>
        </FilterProvider>
      </body>
    </html>
  );
}