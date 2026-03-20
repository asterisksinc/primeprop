"use client";

import { useState } from "react";
import { OverviewTab } from "./components/OverviewTab";
import { RightPanel } from "./components/RightPanel";

import { YieldAnalysisTab } from "./components/YieldAnalysisTab";
import { FinancialsTab } from "./components/FinancialsTab";
import { PropertyTab } from "./components/PropertyTab";
import { DocumentsTab } from "./components/DocumentsTab";

export default function PropertyPage() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Yield Analysis", "Financials", "Property", "Documents"];

  return (
    <div className="flex items-start gap-[16px] w-full mt-[12px] pb-[16px]">
      <div className="basis-[76%] max-w-[76%] flex flex-col gap-[16px] min-w-0">
        {/* Tabs */}
        <div className="flex gap-[8px] w-full h-[64px] bg-white border border-[#E5E7EB] p-[8px] rounded-[12px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 flex justify-center items-center text-[16px] font-medium transition-colors h-full rounded-[8px] ${
                activeTab === tab
                  ? "bg-[#E7F0EF] text-[#0F5F68]"
                  : "bg-transparent text-[#374151] hover:bg-[#F9FAFB]"
              }`}
              style={{ lineHeight: "120%", fontWeight: 500 }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content based on Active Tab */}
        {activeTab === "Overview" && <OverviewTab />}
        {activeTab === "Yield Analysis" && <YieldAnalysisTab />}
        {activeTab === "Financials" && <FinancialsTab />}
        {activeTab === "Property" && <PropertyTab />}
        {activeTab === "Documents" && <DocumentsTab />}
      </div>

      {/* Right Side Panel */}
      <div className="basis-[24%] max-w-[24%] min-w-[320px] flex-shrink-0 flex flex-col gap-[16px]">
        <RightPanel />
      </div>
    </div>
  );
}