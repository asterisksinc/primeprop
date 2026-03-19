"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

const routeMap: any = {
  "/": "Dashboard Overview",
  "/properties": "Properties",
  "/portfolio": "Portfolio",
  "/distributions": "Distributions",
  "/documents": "Documents",
  "/settings": "Settings",
};

export default function PrimePropHeader() {
  const pathname = usePathname();

  const title = routeMap[pathname] || "Dashboard";

  return (
    <section className="ppd-hero-banner">
      <div className="ppd-hero-left">
        <div className="ppd-logo-row">
          <Image
            src="/logo.png"
            alt="Logo"
            width={178}
            height={32}
            priority
          />
        </div>

        <div className="ppd-breadcrumbs">
          PrimeProp &nbsp;/&nbsp;
          <span style={{ color: "#1F2937" }}>{title}</span>
        </div>

        <h1 className="ppd-main-title">{title}</h1>
      </div>

      <div className="ppd-hero-building">
        <Image
          src="/bul1.png"
          alt="Building"
          width={250}
          height={200}
          priority
        />
      </div>

      <div className="ppd-hero-actions">
        <button className="ppd-filter-btn">All Property</button>
        <button className="ppd-refresh-btn">
          <span>↻</span> Refresh
        </button>
      </div>
    </section>
  );
}