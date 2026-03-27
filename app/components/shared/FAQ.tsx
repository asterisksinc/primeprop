'use client';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const defaultFAQItems: FAQItem[] = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default function FAQ({ items = defaultFAQItems }: FAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number>(1);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-[90px]">
      <div className="max-w-[850px] mx-auto px-5">
        {/* Badge */}
        <div className="flex justify-center mb-[20px]">
          <div className="inline-flex items-center gap-[6px] bg-white h-[32px] px-[12px] rounded-full border border-[#E5E5E5] shadow-sm">
            <span className="w-[18px] h-[18px] rounded-full bg-[#FF6500]/10 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF6500" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
            </span>
            <span className="text-[#111111] text-[12px] font-semibold">FAQ</span>
          </div>
        </div>
        
        {/* Heading */}
        <div className="text-[36px] font-bold text-[#111111] text-center leading-[1.2] mb-[12px]">
          Got questions? we've<br />got answers
        </div>
        
        {/* Subtitle */}
        <p className="text-[14px] font-normal text-[#666666] text-center mb-[50px] leading-[22px]">
          We've compiled answers to frequently asked questions<br />to help you get started quickly and confidently.
        </p>

        {/* FAQ List */}
        <div className="w-full">
          {items.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const itemNumber = String(index + 1).padStart(2, '0');
            
            return (
              <div 
                key={index} 
                className={`border-t border-[#E8E8E8] ${index === items.length - 1 ? 'border-b' : ''}`}
              >
                <div 
                  className="flex items-start py-[22px] cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  {/* Number */}
                  <span className="text-[13px] font-medium text-[#AAAAAA] w-[50px] flex-shrink-0 pt-[2px]">
                    {itemNumber}
                  </span>
                  
                  {/* Content */}
                  <div className="flex-1 pr-[16px]">
                    <span className="text-[15px] font-medium text-[#222222] block">
                      {item.question}
                    </span>
                    
                    {isExpanded && (
                      <p className="text-[13px] font-normal leading-[22px] text-[#666666] mt-[14px]">
                        {item.answer}
                      </p>
                    )}
                  </div>
                  
                  {/* Toggle Icon */}
                  <div className={`w-[32px] h-[32px] rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${isExpanded ? 'border-[#333333]' : 'border-[#DADADA]'}`}>
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke={isExpanded ? "#333333" : "#999999"}
                      strokeWidth="1.5"
                    >
                      {isExpanded ? (
                        <path d="M5 12h14" />
                      ) : (
                        <path d="M12 5v14M5 12h14" />
                      )}
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
