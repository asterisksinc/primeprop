'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { Header, Footer, Newsletter, HeroBadge, HeroBackground, DownloadApp } from '../components/shared';
import Navbar from '../components/shared/Navbar';
import DownloadAppBanner from '../components/shared/DownloadAppBanner';

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
    <section className="m-0 p-0 bg-white">
        <Navbar activeLink="roi-calculator" />
        <div className="min-h-screen text-[#111111] overflow-x-hidden" style={{ fontFamily: '"Figtree", sans-serif' }}>
          
          {/* Hero Section */}
          <div className="relative">
            <HeroBackground />

            {/* Hero Content */}
            <section className="relative z-10 flex flex-col items-center pt-[200px] pb-[100px] gap-[20px]">
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
              
              <div className="flex flex-col items-center gap-[20px] max-w-[699px] ">
                <div className="text-[35px] md:text-[60px] font-bold text-[#111111] leading-[1.2] text-center w-full">
                  Calculate Your Potential<br />Returns
                </div>
                
                <p className="text-[13px] md:text-[14px] font-normal text-[#111111] leading-[20px] tracking-[-0.14px] text-center w-[538px]">
                  Calculate the potential returns on your monthly investment.
                </p>
              </div>
            </section>
          </div>

          {/* Calculator Section - Gray Background */}
          <div className="w-full bg-white text-[#111111]">
  <div className="max-w-[1100px] mx-auto px-4 sm:px-5">
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-[24px]">

      {/* ── Left Card – Calculator Inputs ── */}
      <div className="w-full lg:flex-1 bg-white text-[#111111] rounded-[16px] p-5 sm:p-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#F0F0F0]">

        {/* Monthly Deposit */}
        <div className="mb-[24px]">
          <label className="block text-[13px] font-semibold text-[#111111] mb-[12px]">
            Monthly Deposit
          </label>
          <div className="flex items-center justify-between border border-[#DADADA] rounded-[8px] px-[16px] h-[52px] mb-[16px] bg-white">
            <span className="text-[18px] font-bold text-[#111111]">
              {formatCurrency(monthlyDeposit)}
            </span>
            <span className="text-[13px] font-medium text-[#666666]">AED</span>
          </div>

          {/* Slider */}
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
              className="absolute w-full h-full opacity-0 cursor-pointer top-0 left-0"
              style={{ zIndex: 2 }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-white border-[4px] border-[#FF6500] rounded-full shadow-md pointer-events-none"
              style={{ left: `calc(${sliderPercent}% - 10px)`, zIndex: 1 }}
            />
          </div>
        </div>

        {/* Timeframe & Net Yield */}
        <div className="flex gap-[12px] sm:gap-[16px] mb-[24px]">

          {/* Timeframe */}
          <div className="flex-1 min-w-0">
            <label className="block text-[13px] font-semibold text-[#111111] mb-[10px]">
              Timeframe
            </label>
            <div className="relative">
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(Number(e.target.value))}
                className="w-full h-[52px] border border-[#DADADA] rounded-[8px] px-[12px] sm:px-[16px] pr-[32px] text-[14px] sm:text-[15px] font-semibold text-[#111111] appearance-none cursor-pointer focus:outline-none focus:border-[#FF6500] bg-white"
              >
                <option value={5}>5 years</option>
                <option value={10}>10 years</option>
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
              </select>
              <svg
                className="absolute right-[10px] top-1/2 -translate-y-1/2 pointer-events-none"
                width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="#444444" strokeWidth="2.5"
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>

          {/* Net Yield */}
          <div className="flex-1 min-w-0">
            <label className="block text-[13px] font-semibold text-[#111111] mb-[10px]">
              Net Yield
            </label>
            <div className="flex items-center gap-[6px] sm:gap-[8px]">
              <button
                onClick={() => setNetYield(Math.max(1, netYield - 1))}
                className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] rounded-full bg-[#FF6500] text-white flex items-center justify-center hover:bg-[#e65b00] active:scale-95 transition-all flex-shrink-0"
                aria-label="Decrease net yield"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14"/>
                </svg>
              </button>
              <div className="flex-1 min-w-0 h-[52px] border border-[#DADADA] rounded-[8px] flex items-center justify-center bg-white">
                <span className="text-[15px] sm:text-[16px] font-bold text-[#111111]">
                  {netYield}%
                </span>
              </div>
              <button
                onClick={() => setNetYield(Math.min(20, netYield + 1))}
                className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] rounded-full bg-[#FF6500] text-white flex items-center justify-center hover:bg-[#e65b00] active:scale-95 transition-all flex-shrink-0"
                aria-label="Increase net yield"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Result Cards */}
        <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[16px]">
          <div className="flex-1 bg-[#FFF8F3] rounded-[12px] p-[16px] sm:p-[20px]">
            <p className="text-[11px] font-medium text-[#777777] mb-[6px]">
              Portfolio Value After {timeframe} yrs
            </p>
            <p className="text-[18px] sm:text-[22px] font-bold text-[#FF6500] break-all leading-tight">
              AED {formatCurrency(calculations.portfolioValue)}
            </p>
          </div>
          <div className="flex-1 bg-[#EAF8F5] rounded-[12px] p-[16px] sm:p-[20px]">
            <p className="text-[11px] font-medium text-[#777777] mb-[6px]">
              Monthly Rental Income ({timeframe} yrs)
            </p>
            <p className="text-[18px] sm:text-[22px] font-bold text-[#00A389] break-all leading-tight">
              AED {formatCurrency(calculations.monthlyRentalIncome)}
            </p>
          </div>
        </div>
      </div>

      {/* ── Right Card – Chart ── */}
      <div className="w-full lg:flex-1 bg-white rounded-[16px] p-5 sm:p-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#F0F0F0]">

        {/* Chart Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 sm:mb-[28px]">
          <div className="text-[15px] sm:text-[16px] font-bold text-[#111111]">
            Projection & Likely Range
          </div>
          <div className="flex items-center gap-3 sm:gap-[16px]">
            <div className="flex items-center gap-[6px]">
              <div className="w-[10px] h-[10px] rounded-[2px] bg-[#FF6500] flex-shrink-0" />
              <span className="text-[11px] font-medium text-[#555555]">Projection</span>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="w-[10px] h-[10px] rounded-[2px] bg-[#00A389] flex-shrink-0" />
              <span className="text-[11px] font-medium text-[#555555]">Likely Range</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="relative h-[240px] sm:h-[280px]">

          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-[36px] w-[58px] sm:w-[76px] flex flex-col justify-between text-right pr-[6px] sm:pr-[10px]">
            {[1.0, 0.8, 0.6, 0.4, 0.2, 0].map((ratio, i) => (
              <span key={i} className="text-[9px] sm:text-[10px] font-medium text-[#888888] leading-none">
                {formatCurrency(Math.round(calculations.maxValue * ratio))}
              </span>
            ))}
          </div>

          {/* Grid + Bars */}
          <div className="absolute left-[62px] sm:left-[82px] right-0 top-0 bottom-0">

            {/* Grid lines */}
            <div className="absolute inset-0 bottom-[36px] flex flex-col justify-between pointer-events-none">
              {[0,1,2,3,4,5].map((i) => (
                <div key={i} className="border-b border-dashed border-[#EBEBEB]" />
              ))}
            </div>

            {/* Bars */}
            <div className="absolute left-0 right-0 top-0 bottom-[36px] flex justify-around items-end px-[6px] sm:px-[16px]">
              {calculations.projectionData.map((data, index) => {
                const targetGreenHeight = Math.max((data.value / calculations.maxValue) * 65, 5);
                const targetWickHeight  = Math.max((data.value / calculations.maxValue) * 25, 10);
                const greenHeight = isMounted ? targetGreenHeight : 0;
                const wickHeight  = isMounted ? targetWickHeight  : 0;

                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative flex items-end h-[160px] sm:h-[200px] w-[18px] sm:w-[28px]">
                      {/* Body */}
                      <div
                        className="absolute bottom-0 w-full bg-[#00A389] rounded-[2px] transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                        style={{
                          height: `${greenHeight}%`,
                          transitionDelay: `${index * 150}ms`
                        }}
                      />
                      {/* Wick */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#FF6500] transition-all duration-700 ease-out"
                        style={{
                          bottom: `${greenHeight}%`,
                          height: `${wickHeight}%`,
                          transitionDelay: `${index * 150 + 400}ms`,
                          opacity: isMounted ? 1 : 0
                        }}
                      />
                      {/* Cap */}
                      <div
                        className="absolute left-[1px] right-[1px] h-[8px] sm:h-[10px] bg-[#FF6500] rounded-[2px] transition-all duration-700 ease-out"
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
            <div className="absolute bottom-0 left-0 right-0 h-[36px] flex justify-around items-center px-[6px] sm:px-[16px]">
              {calculations.projectionData.map((data, index) => (
                <span key={index} className="text-[9px] sm:text-[11px] font-medium text-[#666666]">
                  Yr {data.year}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footnote */}
    <p className="text-[12px] font-medium text-[#888888] mt-4 sm:mt-[20px]">
      Calculate the potential returns on your monthly investment.
    </p>
  </div>
</div>

          {/* Download App Section */}
          <DownloadAppBanner />

          {/* Newsletter Section */}
          <Newsletter />

          {/* Footer */}
          <Footer />
        </div>
      </section>
  );
}
