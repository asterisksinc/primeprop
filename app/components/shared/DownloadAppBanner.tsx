'use client';
import React from 'react';

export default function DownloadAppBanner() {
  return (
    <section className="w-full py-16 md:py-[100px] relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden flex h-[200px] md:h-[300px]">
        
        {/* FEU Logo - Left */}
        <svg
          viewBox="0 0 1221 427"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-5 flex-1"
          style={{ filter: 'blur(1px)' }}
          preserveAspectRatio="xMinYMid slice"
        >
          <path d="M908.954 232.827C908.954 253.251 912.853 271.077 920.651 286.301C928.82 301.154 940.518 312.666 955.743 320.835C970.967 328.633 989.719 332.532 1012 332.532C1034.28 332.532 1053.03 328.633 1068.26 320.835C1083.48 312.666 1094.99 301.154 1102.79 286.301C1110.96 271.077 1115.05 253.251 1115.05 232.827V0H1220.32V237.842C1220.32 275.718 1211.59 308.768 1194.14 336.989C1176.69 365.21 1152.36 387.305 1121.17 403.272C1089.98 418.868 1053.59 426.667 1012 426.667C970.41 426.667 934.019 418.868 902.827 403.272C871.635 387.305 847.312 365.21 829.859 336.989C812.406 308.768 803.68 275.718 803.68 237.842V0H908.954V232.827Z" fill="#277079" />
        </svg>

        {/* X Logo - Right */}
        <svg
          viewBox="0 0 486 418"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-5 flex-1"
          style={{ filter: 'blur(1px)' }}
          preserveAspectRatio="xMaxYMid slice"
        >
          <path d="M244.577 128.866L343.671 0H472.339L308.112 200.345L485.151 417.754H355.369L241.688 271.202L127.554 417.754H0L178.404 200.353L12.8115 0H143.708L244.577 128.866Z" fill="#FE5919" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between lg:gap-0">

          {/* Left */}
          <div className="w-full text-center md:text-left md:max-w-[380px]">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#111] leading-[1.15] mb-7">
              Download Our App or<br />
              Signup to View<br />
              Available Properties
            </h2>

            <div className="flex gap-3 mb-3 justify-center md:justify-start flex-wrap">

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-2 bg-black text-white px-[14px] py-[10px] rounded-[8px] hover:bg-gray-800 active:scale-95 transition-all"
              >
                <span className="text-[13px] font-semibold">App Store</span>
              </a>

              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-2 bg-black text-white px-[14px] py-[10px] rounded-[8px] hover:bg-gray-800 active:scale-95 transition-all"
              >
                <span className="text-[13px] font-semibold">Google Play</span>
              </a>

            </div>

            {/* Ratings */}
            <div className="flex gap-5 text-[11px] text-[#666] justify-center md:justify-start">
              <span>⭐ 4.5 App Store</span>
              <span>⭐ 4.5 Play Store</span>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-[300px] h-[400px] flex items-center justify-center">
            <img
              src="/image 9.png"
              alt="App"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right */}
          <div className="text-center md:text-left max-w-[260px]">
            <p className="text-[15px] text-[#666] leading-[26px]">
              Access your FEU X account anytime, anywhere — available on both iOS and Android devices.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}