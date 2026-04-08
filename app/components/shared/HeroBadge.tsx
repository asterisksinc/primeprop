'use client';
import React from 'react';

interface HeroBadgeProps {
  text?: string;
  icon?: React.ReactNode ;
}

export default function HeroBadge({ text, icon }: HeroBadgeProps) {
  return (
    <div className="inline-flex items-center gap-[6px] bg-[#FFFFFF] h-[28px] pl-[4px] pr-[8px] py-[4px] rounded-[169px] border border-[#E5E5E5] shadow-sm mb-4">
      <div className="w-[20px] h-[20px] rounded-[56px] bg-[#FF6500] flex items-center justify-center p-[3px]">
        {icon}
      </div>
      <span className="text-[#111111] text-[12px] font-semibold leading-[14px]">{text}</span>
    </div>
  );
}
