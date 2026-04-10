'use client';
import React from 'react';

export default function Newsletter() {
  return (
    <section className="w-full flex justify-center px-5 py-[80px] bg-white">
      <div 
        className="w-full max-w-[1200px] h-[448px] rounded-[24px] overflow-hidden relative bg-white flex items-center justify-center"
        style={{
          position: 'relative'
        }}
      >
        {/* Background Ellipses */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Ellipse 4 - Cyan Left */}
          <div 
            className="absolute"
            style={{
              width: '388px',
              height: '389px',
              left: '0px',
              top: 'calc(50% - 389px/2 + 78.5px)',
              background: '#22C3D8',
              filter: 'blur(250px)',
              opacity: 0.6
            }}
          />
          {/* Ellipse 8 - Cyan Center Left */}
          <div 
            className="absolute"
            style={{
              width: '388px',
              height: '389px',
              left: 'calc(50% - 388px/2 - 170px)',
              top: 'calc(50% - 389px/2 + 301.5px)',
              background: '#22C3D8',
              filter: 'blur(250px)',
              opacity: 0.6
            }}
          />
          {/* Ellipse 7 - Orange Center Left */}
          <div 
            className="absolute"
            style={{
              width: '388px',
              height: '389px',
              left: 'calc(50% - 388px/2 - 170px)',
              top: 'calc(50% - 389px/2 - 161.5px)',
              background: '#FF6500',
              filter: 'blur(250px)',
              opacity: 0.6
            }}
          />
          {/* Ellipse 6 - Orange Center Right */}
          <div 
            className="absolute"
            style={{
              width: '388px',
              height: '389px',
              right: '340px',
              top: 'calc(50% - 389px/2 + 78.5px)',
              background: '#FF6500',
              filter: 'blur(250px)',
              opacity: 0.6
            }}
          />
          {/* Ellipse 5 - Cyan Right */}
          <div 
            className="absolute"
            style={{
              width: '388px',
              height: '389px',
              right: '0px',
              top: '0px',
              background: '#22C3D8',
              filter: 'blur(250px)',
              opacity: 0.6
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-[30px]" style={{ maxWidth: '656px' }}>
          
          {/* Header */}
          <div className="flex flex-col items-center gap-[14px] text-center">
            <h2 className=" text-[40px]  max-w-xs mx-auto md:max-w-3xl md:text-[40px] font-semibold text-[#000000] leading-[48px] text-center" style={{ letterSpacing: '-1.2px' }}>
              Subscribe to Our Newsletter.
            </h2>
            <p className="text-[14px] font-normal text-[#000000] leading-[20px] text-center" style={{ letterSpacing: '-0.14px', maxWidth: '476px' }}>
              Analyze, understand, and act on your data with speed, clarity, and confidence.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-[24px] max-w-[360px] md:max-w-[560px] w-full">
            {/* Email Input Group */}
            <div className="flex flex-col gap-[8px] w-full">
              <label className="text-[14px] font-medium text-[#111111] leading-[20px]" style={{ letterSpacing: '-0.14px' }}>
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="Ex.example@gmail.com" 
                className="w-full h-[48px] rounded-[8px] px-[12px] py-[13px] text-[14px] font-normal text-[#111111] placeholder-[#999999] border border-[#DADADA] bg-white focus:outline-none focus:border-[#FF6500] transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full h-[48px] bg-[#FF6500] text-white text-[16px] font-semibold rounded-[69px] px-[16px] py-[14px] hover:bg-[#e65b00] transition-colors flex items-center justify-center" style={{ letterSpacing: 'normal' }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
