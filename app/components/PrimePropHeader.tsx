"use client";

import { usePathname ,useRouter } from "next/navigation";
import Image from "next/image";
import "../settings-dashboard.css";
import "../primeprop-dashboard.css";
import "../prime-support-section.css";
import "../prime-raise-issue-flow.css";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import { usePropertyFilter } from "../context/FilterContext";
const routeMap: any = {
  "/": "Dashboard Overview",
  "/properties": "Properties",
  "/portfolio": "Portfolio",
  "/distributions": "Distributions",
  "/documents": "Documents",
  "/settings": "Settings",
};

export default function PrimePropHeader() {
  const { setShowPropertyFilter } = usePropertyFilter();
  const formatSlugToTitle = (slug: string) => {
    if (!slug) return "";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const pathname = usePathname();
  const router = useRouter();

  // Split the pathname to determine if we are on a nested "slug" page
  const segments = pathname.split("/").filter(Boolean);
  const isSlugPage = segments.length > 1;

  let title = "Dashboard";
  let parentTitle = "";

  // Determine Titles dynamically based on URL depth
  if (segments.length === 0) {
    title = routeMap["/"] || "Dashboard Overview";
  } else if (!isSlugPage) {
    title = routeMap[pathname] || formatSlugToTitle(segments[0]);
  } else {
    // For nested pages like /properties/[slug]
    const parentPath = `/${segments[0]}`;
    parentTitle = routeMap[parentPath] || formatSlugToTitle(segments[0]);
    // Format the last segment (the slug) as the main title
    title = formatSlugToTitle(segments[segments.length - 1]);
  }
  
  return (
    <div className="pp-shell-row">
      <section className="ppd-hero-banner" style={{ position: "relative" }}>
        <div className="ppd-hero-left">
          <div className="ppd-logo-row">
            {/* <Image
              src="/logo.png"
              alt="Logo"
              width={178}
              height={32}
              priority
            /> */}
          </div>

          {isSlugPage ? (
            <>
              {/* Multi-level Breadcrumb for Slug Pages */}
              <div className="ppd-breadcrumbs text-[#6B7280] text-[12px] mb-1">
                PrimeProp &nbsp;/&nbsp; {parentTitle} &nbsp;/&nbsp;{" "}
                <span style={{ color: "#111827" }}>Details</span>
              </div>
              
              <div className="flex items-center gap-[12px] mt-[4px]">
                <button 
                  onClick={() => router.back()} 
                  className="text-[#111827] cursor-pointer hover:bg-gray-100 p-1 rounded-full transition-colors"
                  aria-label="Go back"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="text-[#111827] text-[24px] font-bold">{title}</div>
              </div>
            </>
          ) : (
            <>
              {/* Standard Breadcrumb for Top-Level Pages */}
              <div className="ppd-breadcrumbs mt-15 text-sm text-gray-400 mb-2">
                PrimeProp &nbsp;/&nbsp;
                <span className="text-[#1F2937]">{title}</span>
              </div>

              <div className="flex items-center gap-2 text-[24px] font-bold text-[#111827]">
                {title}
              </div>
            </>
          )}
        </div>

        <div className="absolute right-[45%] bottom-0 h-full flex items-end">
          <Image
            src="/bul1.png"
            alt="Building"
            width={250}
            height={200}
            priority
          />
        </div>

        <div className="absolute right-[24px] bottom-[24px] flex gap-[12px] z-50 pointer-events-auto">
          {pathname !== "/properties" && pathname !== "/distributions" && pathname !== "/documents" && (
            <button className="ppd-filter-btn">All Property</button>
          )}
          {pathname === "/documents" && (
            <>
              <button className="w-[34px] h-[34px] bg-white border border-[#E5E7EB] rounded-[6px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-slate-50 transition-colors relative z-50">
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button className="bg-white border border-[#E5E7EB] text-[#1F2937] px-[16px] py-[8px] rounded-[6px] text-[14px] font-medium flex items-center gap-[8px] hover:bg-slate-50 transition-colors">
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Selected
              </button>
              <button className="bg-[#EB6601] text-white px-[16px] py-[8px] rounded-[6px] text-[14px] font-medium flex items-center gap-[8px] hover:bg-[#d85e01] transition-colors">
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download All Zip
              </button>
            </>
          )}
          {pathname === "/distributions" && (
            <>
              <button className="bg-white border border-[#E5E7EB] text-[#1F2937] px-[16px] py-[8px] rounded-[6px] text-[14px] font-medium flex items-center gap-[8px] hover:bg-slate-50 transition-colors">
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Statement
              </button>
              <button className="bg-white border border-[#E5E7EB] text-[#1F2937] px-[16px] py-[8px] rounded-[6px] text-[14px] font-medium flex items-center gap-[8px] hover:bg-slate-50 transition-colors">
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export CSV
              </button>
            </>
          )}
          {pathname === "/properties" && (
            <button 
              className="w-[34px] h-[34px] bg-white border border-[#E5E7EB] rounded-[6px] flex items-center justify-center cursor-pointer shadow-sm hover:bg-slate-50 transition-colors relative z-50"
              onClick={() => setShowPropertyFilter(true)}
              type="button"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75 3.5H12.25M4.08333 7H9.91667M5.83333 10.5H8.16667" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
          {pathname !== "/documents" && (
            <button className="bg-[#EB6601] text-white px-[16px] py-[8px] rounded-[6px] text-[14px] font-medium flex items-center gap-[8px] hover:bg-[#d85e01] transition-colors">
              <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {pathname === "/settings" ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                )}
              </svg>
              {pathname === "/settings" ? "Download Summary" : "Refresh"}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}