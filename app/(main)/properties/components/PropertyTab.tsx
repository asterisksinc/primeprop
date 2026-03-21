"use client";

import { useState } from "react";

export function PropertyTab() {
  const galleryItems = [
    {
      label: "Living Room",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    },
    {
      label: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1400&q=80",
    },
    {
      label: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1400&q=80",
    },
    {
      label: "Exterior",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
    },
    {
      label: "Dining Area",
      image:
        "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1400&q=80",
    },
    {
      label: "Balcony View",
      image:
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const [activeImage, setActiveImage] = useState(0);

  const previousImage = () => {
    setActiveImage((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Property Gallery */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[16px]">
        <div className="text-[18px] font-semibold text-[#111827]">Property Gallery</div>
        
        {/* Main Image */}
        <div className="w-full h-[400px] bg-[#E5E7EB] rounded-[8px] relative overflow-hidden flex items-center justify-between px-[16px]">
          <img
            src={galleryItems[activeImage].image}
            alt={galleryItems[activeImage].label}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
          
          <button
            onClick={previousImage}
            className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md relative z-10 hover:bg-gray-50 border border-[#E5E7EB]"
            aria-label="Previous image"
          >
            <svg className="w-[20px] h-[20px] text-[#4B5563]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md relative z-10 hover:bg-gray-50 border border-[#E5E7EB]"
            aria-label="Next image"
          >
            <svg className="w-[20px] h-[20px] text-[#4B5563]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Badges */}
          <div className="absolute top-[16px] right-[16px] bg-black/60 backdrop-blur-sm text-white text-[13px] px-[12px] py-[6px] rounded-full font-medium">
            {activeImage + 1} / {galleryItems.length}
          </div>
          <div className="absolute bottom-[16px] left-[16px] bg-white text-[#111827] text-[13px] font-semibold px-[12px] py-[6px] rounded-[6px] shadow-sm">
            {galleryItems[activeImage].label}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-[12px] mt-[8px] overflow-x-auto pb-[4px]">
          {galleryItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => setActiveImage(index)}
              className={`w-[120px] h-[80px] rounded-[8px] flex-shrink-0 cursor-pointer overflow-hidden border-2 transition-all ${
                activeImage === index
                  ? "border-[#EB6601] opacity-100"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
              aria-label={`Select ${item.label}`}
            >
              <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Floor Plans */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="text-[18px] font-semibold text-[#111827]">Floor Plans</div>
        <div className="w-full h-[200px] border border-[#E5E7EB] bg-[#F9FAFB] rounded-[8px] flex flex-col items-center justify-center gap-[8px] cursor-pointer hover:bg-gray-100 transition-colors">
          <svg className="w-[32px] h-[32px] text-[#4B5563]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
          <div className="text-[15px] font-semibold text-[#111827]">Interactive Floor Plan Viewer</div>
          <div className="text-[13px] text-[#6B7280]">Zoomable PDF floor plans available</div>
        </div>
      </div>

      {/* Location Intelligence */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="text-[18px] font-semibold text-[#111827]">Location Intelligence</div>
        <div className="flex gap-[16px]">
          <div className="flex-1 border border-[#E5E7EB] rounded-[8px] p-[16px] flex items-center gap-[16px]">
             <div className="w-[40px] h-[40px] rounded-full bg-[#FFF5F0] flex items-center justify-center flex-shrink-0">
               <svg className="w-[20px] h-[20px] text-[#EB6601]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
               </svg>
             </div>
             <div className="flex flex-col">
               <div className="text-[12px] text-[#6B7280]">Metro Station</div>
               <div className="text-[14px] font-semibold text-[#111827]">12 Min Drive</div>
             </div>
          </div>
          <div className="flex-1 border border-[#E5E7EB] rounded-[8px] p-[16px] flex items-center gap-[16px]">
             <div className="w-[40px] h-[40px] rounded-full bg-[#FFF5F0] flex items-center justify-center flex-shrink-0">
               <svg className="w-[20px] h-[20px] text-[#EB6601]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
               </svg>
             </div>
             <div className="flex flex-col">
               <div className="text-[12px] text-[#6B7280]">Business District</div>
               <div className="text-[14px] font-semibold text-[#111827]">15 Min Drive</div>
             </div>
          </div>
          <div className="flex-1 border border-[#E5E7EB] rounded-[8px] p-[16px] flex items-center gap-[16px]">
             <div className="w-[40px] h-[40px] rounded-full bg-[#FFF5F0] flex items-center justify-center flex-shrink-0">
               <svg className="w-[20px] h-[20px] text-[#EB6601]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
               </svg>
             </div>
             <div className="flex flex-col">
               <div className="text-[12px] text-[#6B7280]">Airport</div>
               <div className="text-[14px] font-semibold text-[#111827]">25 Min Drive</div>
             </div>
          </div>
        </div>
      </div>

      {/* Building Amenities */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="text-[18px] font-semibold text-[#111827]">Building Amenities</div>
        <div className="grid grid-cols-3 gap-y-[16px]">
          {[
            "Swimming Pool", "24/7 Security", "BBQ Area",
            "Fitness Center", "Smart Access Control", "Concierge Service",
            "Covered Parking", "Children's Play Area"
          ].map((amenity, i) => (
            <div key={i} className="flex items-center gap-[8px]">
              <div className="w-[4px] h-[4px] bg-[#EB6601] rounded-full"></div>
              <span className="text-[14px] text-[#4B5563]">{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Property Highlights */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="text-[18px] font-semibold text-[#111827]">Property Highlights</div>
        <div className="flex flex-col gap-[12px]">
          {[
            "Prime location in Jumeirah Village Circle with excellent connectivity",
            "Modern 2-bedroom unit with high-quality finishes and fixtures",
            "Full building amenities including pool, gym, and 24/7 security",
            "Full building amenities including pool, gym, and 24/7 security"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <div className="w-[4px] h-[4px] bg-[#EB6601] rounded-full mt-[8px]"></div>
              <span className="text-[14px] text-[#4B5563] leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}