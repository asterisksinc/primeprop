'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { Header, Footer, Newsletter, HeroBadge, HeroBackground, DownloadApp } from '../components/shared';

export default function ROICalculatorPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [monthlyDeposit, setMonthlyDeposit] = useState(2000);
  const [timeframe, setTimeframe] = useState(10);
  const [netYield, setNetYield] = useState(10);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const calculations = useMemo(() => {
    const annualYield = netYield / 100;
    const monthlyYield = annualYield / 12;
    
    let portfolioValue = 0;
    for (let month = 0; month < timeframe * 12; month++) {
      portfolioValue = (portfolioValue + monthlyDeposit) * (1 + monthlyYield);
    }
    
    const monthlyRentalIncome = (portfolioValue * annualYield) / 12;
    
    const years = [1, 4, 7, 10].filter(y => y <= timeframe);
    const projectionData = years.map(year => {
      let value = 0;
      for (let month = 0; month < year * 12; month++) {
        value = (value + monthlyDeposit) * (1 + monthlyYield);
      }
      return { year, value: Math.round(value) };
    });

    return {
      portfolioValue: Math.round(portfolioValue),
      monthlyRentalIncome: Math.round(monthlyRentalIncome),
      projectionData,
      maxValue: Math.max(...projectionData.map(d => d.value)) * 1.3
    };
  }, [monthlyDeposit, timeframe, netYield]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-AE').format(value);
  };

  const sliderPercent = ((monthlyDeposit - 500) / (10000 - 500)) * 100;

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className="m-0 p-0 bg-white">
        <div className="min-h-screen text-[#111111] overflow-x-hidden" style={{ fontFamily: '"Figtree", sans-serif' }}>
          
          {/* Hero Section */}
          <div className="relative">
            <HeroBackground />
            <Header activeLink="Home" />

            {/* Hero Content */}
            <section className="relative z-10 flex flex-col items-center pt-[52px] pb-[100px] gap-[20px]">
              <div className="flex justify-center mb-[-12px]">
                <HeroBadge 
                  text="ROI Calculator" 
                  icon={
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <rect x="4" y="2" width="16" height="20" rx="2"/>
                      <line x1="8" y1="6" x2="16" y2="6"/>
                      <line x1="8" y1="10" x2="16" y2="10"/>
                      <circle cx="8" cy="15" r="1.5"/>
                      <circle cx="12" cy="15" r="1.5"/>
                      <circle cx="16" cy="15" r="1.5"/>
                    </svg>
                  }
                />
              </div>
              
              <div className="flex flex-col items-center gap-[20px] max-w-[699px]">
                <div className="text-[60px] font-bold text-[#111111] leading-[1.2] text-center w-full">
                  Calculate Your Potential<br />Returns
                </div>
                
                <p className="text-[14px] font-normal text-[#111111] leading-[20px] tracking-[-0.14px] text-center w-[538px]">
                  Calculate the potential returns on your monthly investment.
                </p>
              </div>
            </section>
          </div>

          {/* Calculator Section - Gray Background */}
          <div className="w-full bg-[#F8F8F8] py-[60px]">
            <div className="max-w-[1100px] mx-auto px-5">
              <div className="flex gap-[24px]">
                
                {/* Left Card - Calculator Inputs */}
                <div className="flex-1 bg-white rounded-[16px] p-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  {/* Monthly Deposit */}
                  <div className="mb-[24px]">
                    <label className="block text-[13px] font-medium text-[#666666] mb-[12px]">Monthly Deposit</label>
                    <div className="flex items-center justify-between border border-[#DADADA] rounded-[8px] px-[16px] h-[52px] mb-[16px]">
                      <span className="text-[18px] font-semibold text-[#111111]">{formatCurrency(monthlyDeposit)}</span>
                      <span className="text-[13px] text-[#999999]">AED</span>
                    </div>
                    
                    {/* Slider - solid orange */}
                    <div className="relative h-[6px] rounded-full bg-[#E8E8E8]">
                      <div 
                        className="absolute h-full rounded-full bg-[#FF6500]"
                        style={{ width: `${sliderPercent}%` }}
                      />
                      <input
                        type="range"
                        min="500"
                        max="10000"
                        step="100"
                        value={monthlyDeposit}
                        onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                        className="absolute w-full h-full opacity-0 cursor-pointer"
                      />
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-white border-[4px] border-[#FF6500] rounded-full shadow-sm pointer-events-none"
                        style={{ left: `calc(${sliderPercent}% - 10px)` }}
                      />
                    </div>
                  </div>

                  {/* Timeframe & Net Yield Row */}
                  <div className="flex gap-[16px] mb-[24px]">
                    {/* Timeframe */}
                    <div className="flex-1">
                      <label className="block text-[13px] font-medium text-[#666666] mb-[10px]">Timeframe</label>
                      <div className="relative">
                        <select 
                          value={timeframe}
                          onChange={(e) => setTimeframe(Number(e.target.value))}
                          className="w-full h-[52px] border border-[#DADADA] rounded-[8px] px-[16px] text-[15px] font-medium text-[#111111] appearance-none cursor-pointer focus:outline-none focus:border-[#FF6500] bg-white"
                        >
                          <option value={5}>5 years</option>
                          <option value={10}>10 years</option>
                          <option value={15}>15 years</option>
                          <option value={20}>20 years</option>
                        </select>
                        <svg className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </div>
                    </div>

                    {/* Net Yield */}
                    <div className="flex-1">
                      <label className="block text-[13px] font-medium text-[#666666] mb-[10px]">Net Yield</label>
                      <div className="flex items-center gap-[8px]">
                        <button 
                          onClick={() => setNetYield(Math.max(1, netYield - 1))}
                          className="w-[44px] h-[44px] rounded-full bg-[#FF6500] text-white flex items-center justify-center hover:bg-[#e65b00] transition-colors flex-shrink-0"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14"/>
                          </svg>
                        </button>
                        <div className="flex-1 h-[52px] border border-[#DADADA] rounded-[8px] flex items-center justify-center">
                          <span className="text-[16px] font-semibold text-[#111111]">{netYield}%</span>
                        </div>
                        <button 
                          onClick={() => setNetYield(Math.min(20, netYield + 1))}
                          className="w-[44px] h-[44px] rounded-full bg-[#FF6500] text-white flex items-center justify-center hover:bg-[#e65b00] transition-colors flex-shrink-0"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M12 5v14M5 12h14"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Results Row */}
                  <div className="flex gap-[16px]">
                    {/* Portfolio Value */}
                    <div className="flex-1 bg-[#FFF8F3] rounded-[12px] p-[20px]">
                      <p className="text-[11px] text-[#888888] mb-[6px]">Portfolio Value After {timeframe} yrs</p>
                      <p className="text-[24px] font-bold text-[#FF6500]">AED {formatCurrency(calculations.portfolioValue)}</p>
                    </div>

                    {/* Monthly Rental Income */}
                    <div className="flex-1 bg-[#EAF8F5] rounded-[12px] p-[20px]">
                      <p className="text-[11px] text-[#888888] mb-[6px]">Monthly Rental Income ({timeframe} yrs)</p>
                      <p className="text-[24px] font-bold text-[#00A389]">AED {formatCurrency(calculations.monthlyRentalIncome)}</p>
                    </div>
                  </div>
                </div>

                {/* Right Card - Chart */}
                <div className="flex-1 bg-white rounded-[16px] p-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-[28px]">
                    <div className="text-[16px] font-semibold text-[#111111]">Projection & Likely Range</div>
                    <div className="flex items-center gap-[16px]">
                      <div className="flex items-center gap-[6px]">
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#FF6500]" />
                        <span className="text-[11px] text-[#888888]">Projection</span>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <div className="w-[10px] h-[10px] rounded-[2px] bg-[#00A389]" />
                        <span className="text-[11px] text-[#888888]">Likely Range</span>
                      </div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="relative h-[280px]">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-[36px] w-[80px] flex flex-col justify-between text-right pr-[12px]">
                      {[1.0, 0.8, 0.6, 0.4, 0.2, 0].map((ratio, i) => (
                        <span key={i} className="text-[10px] text-[#999999]">
                          AED {formatCurrency(Math.round(calculations.maxValue * ratio))}
                        </span>
                      ))}
                    </div>

                    {/* Chart grid and bars */}
                    <div className="absolute left-[90px] right-0 top-0 bottom-0">
                      {/* Horizontal grid lines */}
                      <div className="absolute inset-0 bottom-[36px] flex flex-col justify-between">
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="border-b border-dashed border-[#E8E8E8]" />
                        ))}
                      </div>

                      {/* Bars - candlestick style */}
                      <div className="absolute left-0 right-0 top-0 bottom-[36px] flex justify-around items-end px-[16px]">
                        {calculations.projectionData.map((data, index) => {
                          const targetGreenHeight = Math.max((data.value / calculations.maxValue) * 65, 5); // ensure min height
                          const targetWickHeight = Math.max((data.value / calculations.maxValue) * 25, 10); // ensure min wick
                          
                          const greenHeight = isMounted ? targetGreenHeight : 0;
                          const wickHeight = isMounted ? targetWickHeight : 0;
                          
                          return (
                            <div key={index} className="flex flex-col items-center">
                              <div className="relative flex items-end h-[200px] w-[28px]">
                                {/* Main bar (body) */}
                                <div 
                                  className="absolute bottom-0 w-[28px] bg-[#00A389] rounded-[2px] transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                                  style={{ 
                                    height: `${greenHeight}%`,
                                    transitionDelay: `${index * 150}ms`
                                  }}
                                />
                                {/* Wick (thin orange line) */}
                                <div 
                                  className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#FF6500] transition-all duration-700 ease-out"
                                  style={{ 
                                    bottom: `${greenHeight}%`,
                                    height: `${wickHeight}%`,
                                    transitionDelay: `${index * 150 + 400}ms`,
                                    opacity: isMounted ? 1 : 0
                                  }}
                                />
                                {/* Orange cap (top of candle) */}
                                <div 
                                  className="absolute w-[24px] left-[2px] h-[10px] bg-[#FF6500] rounded-[2px] transition-all duration-700 ease-out"
                                  style={{ 
                                    bottom: isMounted ? `calc(${greenHeight + wickHeight}% - 5px)` : '0%',
                                    transitionDelay: `${index * 150 + 400}ms`,
                                    opacity: isMounted ? 1 : 0,
                                    transform: isMounted ? 'scaleY(1)' : 'scaleY(0)',
                                    transformOrigin: 'bottom'
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* X-axis labels */}
                      <div className="absolute bottom-0 left-0 right-0 h-[36px] flex justify-around items-center px-[16px]">
                        {calculations.projectionData.map((data, index) => (
                          <span key={index} className="text-[11px] text-[#999999]">Year {data.year}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <p className="text-[12px] text-[#999999] mt-[20px]">
                Calculate the potential returns on your monthly investment.
              </p>
            </div>
          </div>

          {/* Download App Section */}
          <DownloadApp />

          {/* Newsletter Section */}
          <Newsletter />

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
