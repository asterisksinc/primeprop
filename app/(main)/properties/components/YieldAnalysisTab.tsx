export function YieldAnalysisTab() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Key Metrics */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="text-[18px] font-semibold text-[#111827]">Key Metrics</div>
        <div className="flex gap-[16px]">
          <div className="flex-1 rounded-[8px] p-[20px] border border-[#E5E7EB] flex flex-col gap-[8px]">
            <div className="text-[13px] font-medium text-[#4B5563]">Historical Average</div>
            <div className="text-[24px] font-bold text-[#111827]">7.8%</div>
            <div className="text-[11px] text-[#6B7280]">Past 5 Years Performance</div>
          </div>
          <div className="flex-1 rounded-[8px] p-[20px] border border-[#E5E7EB] flex flex-col gap-[8px]">
            <div className="text-[13px] font-medium text-[#4B5563]">Current Yield</div>
            <div className="text-[24px] font-bold text-[#0F766E]">8.2%</div>
            <div className="text-[11px] text-[#0F766E]">Live Q1 2024 tracking</div>
          </div>
          <div className="flex-1 rounded-[8px] p-[20px] border border-[#E5E7EB] flex flex-col gap-[8px]">
            <div className="text-[13px] font-medium text-[#4B5563]">Projected Yield</div>
            <div className="text-[24px] font-bold text-[#EA580C]">8.0%</div>
            <div className="text-[11px] text-[#6B7280]">Forecasted for next 4 quarters</div>
          </div>
        </div>
      </div>

      {/* Historical Yield Performance */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="text-[18px] font-semibold text-[#111827]">Historical Yield Performance</div>
        
        {/* Graph Placeholder */}
        <div className="w-full h-[240px] flex flex-col relative">
          <div className="flex-1 flex flex-col justify-between relative pt-[10px] pb-[30px]">
            {/* Grid lines and Y axis */}
            {[9,8,7,6,5].map((y) => (
              <div key={y} className="flex items-center w-full relative">
                <span className="text-[11px] text-[#9CA3AF] w-[30px]">{y}%</span>
                <div className="flex-1 border-t border-dashed border-[#E5E7EB]"></div>
              </div>
            ))}
            
            {/* Mocked Graph Lines */}
            <svg className="absolute top-[20px] left-[30px] right-0 bottom-[30px] w-[calc(100%-30px)] h-[calc(100%-50px)]" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 50 L14 25 L28 45 L42 20 L57 35 L71 55 L85 50 L100 25" fill="none" stroke="#22C55E" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <path d="M0 50 L14 15 L28 35 L42 25 L57 20 L71 35 L85 30 L100 20" fill="none" stroke="#F97316" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
            
            {/* X axis labels */}
            <div className="absolute bottom-0 left-[30px] right-0 flex justify-between px-[10px]">
              {['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8'].map((q) => (
                <span key={q} className="text-[11px] text-[#9CA3AF]">{q}</span>
              ))}
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-center gap-[16px] mt-[8px]">
            <div className="flex items-center gap-[6px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#22C55E]"></div>
              <span className="text-[12px] text-[#4B5563]">Gross Yield</span>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#F97316]"></div>
              <span className="text-[12px] text-[#4B5563]">Net Investor Yield</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Indicators */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="text-[18px] font-semibold text-[#111827]">Performance Indicators</div>
        <div className="flex gap-[16px]">
          <div className="flex-1 rounded-[8px] p-[20px] border border-[#E5E7EB] flex flex-col gap-[8px]">
            <div className="text-[13px] text-[#4B5563] font-medium">Capital Appreciation</div>
            <div className="text-[20px] font-bold text-[#111827]">+2.1% Monthly</div>
          </div>
          <div className="flex-1 rounded-[8px] p-[20px] border border-[#E5E7EB] flex flex-col gap-[8px]">
            <div className="text-[13px] text-[#4B5563] font-medium">Occupancy</div>
            <div className="text-[20px] font-bold text-[#111827]">95%</div>
          </div>
          <div className="flex-1 rounded-[8px] p-[20px] border border-[#E5E7EB] flex flex-col gap-[8px]">
            <div className="text-[13px] text-[#4B5563] font-medium">NOI</div>
            <div className="text-[20px] font-bold text-[#111827]">₹3.3L quarterly</div>
          </div>
          <div className="flex-1 rounded-[8px] p-[20px] border border-[#E5E7EB] flex flex-col gap-[8px]">
            <div className="text-[13px] text-[#4B5563] font-medium">Projected IRR</div>
            <div className="text-[20px] font-bold text-[#111827]">12%</div>
          </div>
        </div>
      </div>

      {/* Yield Analysis Insights */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[16px]">
        <div className="text-[18px] font-semibold text-[#111827]">Yield Analysis Insights</div>
        <div className="bg-[#F3F4F6] rounded-[8px] px-[14px] py-[12px] border border-[#E5E7EB]">
          <div className="text-[14px] leading-relaxed text-[#4B5563]">
            The property has demonstrated consistent yield performance over the past 8 quarters, with current gross yields of 8.2% exceeding the historical average of 7.8%. Net Investor yields remain strong at 6.5%, accounting for all fees and expenses. The steady occupancy rate of 95% and increasing capital appreciation of 2.1% monthly position this asset for continued strong performance.
          </div>
        </div>
      </div>
    </div>
  );
}