'use client';
import React from 'react';

export default function DownloadApp() {
  return (
    <section className="w-full py-[100px] relative overflow-hidden">
      {/* Background watermark - FEU and X logos side by side */}
      <div className="absolute left-15 right-0 bottom-0 pointer-events-none overflow-hidden flex h-[300px]">
        {/* FEU Logo - Left */}
        <svg 
          viewBox="0 0 1221 427" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-5 flex-1"
          style={{
            filter: 'blur(1px)'
          }}
          preserveAspectRatio="xMinYMid slice"
        >
          <path d="M908.954 232.827C908.954 253.251 912.853 271.077 920.651 286.301C928.82 301.154 940.518 312.666 955.743 320.835C970.967 328.633 989.719 332.532 1012 332.532C1034.28 332.532 1053.03 328.633 1068.26 320.835C1083.48 312.666 1094.99 301.154 1102.79 286.301C1110.96 271.077 1115.05 253.251 1115.05 232.827V0H1220.32V237.842C1220.32 275.718 1211.59 308.768 1194.14 336.989C1176.69 365.21 1152.36 387.305 1121.17 403.272C1089.98 418.868 1053.59 426.667 1012 426.667C970.41 426.667 934.019 418.868 902.827 403.272C871.635 387.305 847.312 365.21 829.859 336.989C812.406 308.768 803.68 275.718 803.68 237.842V0H908.954V232.827Z" fill="#277079"/>
          <path d="M309.726 89.6778H51.2758V173.785H299.699V263.463H51.2758V417.754H-54V0H309.726V89.6778Z" fill="#277079"/>
          <path d="M737.335 86.3353H471.375L484.849 169.887H722.295V247.867H484.849L471.375 331.418H740.119V417.754H358.016L390.321 208.877L358.016 0H737.335V86.3353Z" fill="#277079"/>
        </svg>

        {/* X Logo - Right */}
        <svg 
          viewBox="0 0 486 418" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-5 flex-1"
          style={{
            filter: 'blur(1px)'
          }}
          preserveAspectRatio="xMaxYMid slice"
        >
          <path d="M244.577 128.866L343.671 0H472.339L308.112 200.345L485.151 417.754H355.369L241.688 271.202L127.554 417.754H0L178.404 200.353L12.8115 0H143.708L244.577 128.866Z" fill="#FE5919"/>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left Side - Title & Buttons */}
          <div className="max-w-[380px]">
            <div className="text-[36px] font-bold text-[#111111] leading-[1.1] mb-[32px]">
              Download Our App or<br />Signup to View<br />Available Properties
            </div>
            
            <div className="flex gap-[12px] mb-[12px]">
              {/* App Store Button */}
              <a href="#" className="flex items-center gap-[8px] bg-black text-white px-[14px] py-[10px] rounded-[8px] hover:bg-gray-800 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[9px] leading-tight opacity-80">Download on the</span>
                  <span className="text-[13px] font-semibold leading-tight">App Store</span>
                </div>
              </a>
              
              {/* Google Play Button */}
              <a href="#" className="flex items-center gap-[8px] bg-black text-white px-[14px] py-[10px] rounded-[8px] hover:bg-gray-800 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#00D7FE"/>
                  <path d="M14.5 12.707l2.302 2.302-10.937 6.333 8.635-8.635z" fill="#FF3A44"/>
                  <path d="M17.699 9.509l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.493-2.491z" fill="#FFB800"/>
                  <path d="M5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" fill="#00F076"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[9px] leading-tight opacity-80">GET IT ON</span>
                  <span className="text-[13px] font-semibold leading-tight">Google Play</span>
                </div>
              </a>
            </div>
            
            <div className="flex items-center gap-[20px] text-[11px] text-[#666666]">
              <div className="flex items-center gap-[4px]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFB800">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>4.5 App Store Ratings</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFB800">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>4.5 Play Store Ratings</span>
              </div>
            </div>
          </div>

          {/* Center - Phone Image */}
          <div className="relative w-[380px] h-[480px] flex-shrink-0 flex items-center justify-center">
            <img 
              src="/image 9.png" 
              alt="FEU X Mobile App"
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            />
          </div>

          {/* Right Side - Description */}
          <div className="max-w-[260px]">
            <p className="text-[15px] text-[#666666] leading-[26px]">
              Access your FEU X account anytime, anywhere - available on both iOS and Android Devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
