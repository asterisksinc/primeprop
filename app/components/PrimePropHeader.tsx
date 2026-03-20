"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import "../settings-dashboard.css";
import "../primeprop-dashboard.css";
import "../prime-support-section.css";
import "../prime-raise-issue-flow.css";
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
    <section className="ppd-hero-banner" style={{ position: "relative" }}>
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

        {pathname === "/properties" ? (
          <>
            <div className="ppd-breadcrumbs text-[#6B7280] text-[12px]">
              PrimeProp &nbsp;/&nbsp; Properties &nbsp;/&nbsp; <span style={{ color: "#111827" }}>Property Details</span>
            </div>
            <div className="flex items-center gap-[12px] mt-[4px]">
              <svg className="w-[20px] h-[20px] text-[#111827] cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <div className="text-[#111827] text-[24px] font-bold">Downtown Office SPV</div>
            </div>
          </>
        ) : (
          <>
            <div className="ppd-breadcrumbs">
              PrimeProp &nbsp;/&nbsp;
              <span style={{ color: "#1F2937" }}>{title}</span>
            </div>
            <div className="text-[24px] font-bold text-[#111827]">{title}</div>
          </>
        )}
      </div>

      <div className="absolute right-[200px] bottom-0 h-full flex items-end">
        <Image
          src="/bul1.png"
          alt="Building"
          width={250}
          height={200}
          priority
        />
      </div>

      <div className="absolute right-[24px] bottom-[24px] flex gap-[12px]">
        {pathname !== "/properties" && (
          <button className="ppd-filter-btn">All Property</button>
        )}
        <button className="bg-[#2C7A7B] text-white px-[16px] py-[8px] rounded-[6px] text-[14px] font-medium flex items-center gap-[8px] hover:bg-[#236363] transition-colors">
          <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh
        </button>
      </div>
    </section>
  );
}