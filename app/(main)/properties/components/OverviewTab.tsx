"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./MapComponent"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[390px] rounded-[12px] bg-[#E5E7EB] flex items-center justify-center">
      <div className="text-[#6B7280]">Loading map...</div>
    </div>
  )
});

export function OverviewTab() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 25.1877, lng: 55.2719 });
  const [zoom, setZoom] = useState(16);

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Property Specifications */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[16px]">
        <div className="text-[18px] font-semibold text-[#111827]">Property Specifications</div>
        
        {/* Banner */}
        <div className="w-full h-[160px] rounded-xl relative overflow-hidden bg-gradient-to-r from-[#0F766E] to-[#14B8A6] flex items-center justify-center">
          {/* Placeholder for actual building image */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          {/* Top Badges */}
          <div className="absolute top-[16px] left-[16px] bg-[#F97316] text-white text-[12px] font-bold px-[12px] py-[4px] rounded-[6px]">
            9.1% Yield
          </div>
          <div className="absolute top-[16px] right-[16px] bg-white/20 backdrop-blur-md text-white text-[12px] font-bold px-[12px] py-[4px] rounded-[6px] border border-white/30">
            AAA
          </div>
          
          {/* Bottom Location */}
          <div className="absolute bottom-[16px] left-[16px] bg-white text-[#374151] text-[12px] font-medium px-[12px] py-[6px] rounded-[6px] flex items-center gap-[6px] shadow-sm">
            <svg className="w-[14px] h-[14px] text-[#0F766E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Downtown Dubai
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-y-[24px] gap-x-[16px] mt-[8px]">
          {[
            { label: "Location", value: "Downtown Dubai, Dubai" },
            { label: "Property Type", value: "Commercial" },
            { label: "Area", value: "1200 sqft" },
            { label: "Building Age", value: "2 Years" },
            { label: "Min Investment", value: "30L AED", valueColor: "text-[#EA580C]" },
            { label: "Target Funding", value: "5CR AED" },
            { label: "Current Funding", value: "65%", valueColor: "text-[#16A34A]" },
            { label: "Investor Count", value: "12 / 25" },
            { label: "Bedrooms", value: "2 Bedroom" },
            { label: "Balcony", value: "Yes" },
            { label: "Parking", value: "Yes" },
            { label: "Ownership", value: "Freehold" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-[8px]">
              <div className="text-[12px] text-[#6B7280]">{stat.label}</div>
              <div className={`text-[14px] font-semibold ${stat.valueColor || "text-[#111827]"}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location with Real Map */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[16px]">
        <div className="text-[18px] font-semibold text-[#111827]">Location</div>
        <div className="w-full rounded-[12px] overflow-hidden relative">
          <DynamicMap 
            location={currentLocation} 
            zoom={zoom}
            onLocationChange={setCurrentLocation}
            onZoomChange={setZoom}
          />
        </div>
      </div>

      {/* Investment Thesis */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[12px]">
        <div className="text-[18px] font-semibold text-[#111827]">Investment Thesis</div>
        <div className="bg-[#F3F4F6] rounded-[8px] px-[14px] py-[12px] border border-[#E5E7EB]">
          <div className="text-[14px] leading-snug text-[#4B5563]">
            Prime JVC location with strong rental demand delivering stable 8.2% gross yield and long-term capital appreciation. This institutional-grade asset in Jumeirah Village Circle represents a unique opportunity for accredited investors seeking consistent quarterly distributions backed by a high-quality 2BHK residential unit in one of Dubai's most sought-after communities. The property benefits from excellent occupancy rates, professional management, and a proven track record of reliable income generation.
          </div>
        </div>
      </div>

      {/* Developer / Sponsor Team */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[16px]">
        <div className="text-[18px] font-semibold text-[#111827]">Developer / Sponsor Team</div>
        <div className="flex gap-[12px]">
          {[
            { name: "Ahmed Al Rahman", role: "Managing Partner", exp: "15+ Years Real Estate Development" },
            { name: "Sarah Mitchell", role: "Asset Manager", exp: "12+ Years Institutional Real Estate" },
            { name: "David Chen", role: "Financial Controller", exp: "10+ Years Property Finance & Anal..." }
          ].map((profile, i) => (
            <div key={i} className="flex-1 border border-[#E5E7EB] rounded-[8px] p-[12px] flex items-center gap-[12px]">
              <div className="w-[48px] h-[48px] rounded-full bg-[#E5E7EB] overflow-hidden flex-shrink-0">
                <img src={`https://ui-avatars.com/api/?name=${profile.name.replace(' ', '+')}&background=random`} alt={profile.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-[2px]">
                <div className="text-[14px] font-semibold text-[#111827]">{profile.name}</div>
                <div className="text-[12px] text-[#0F766E] font-medium">{profile.role}</div>
                <div className="text-[11px] text-[#6B7280] truncate max-w-[200px]">{profile.exp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}