export function FinancialsTab() {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Investment Waterfall */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="text-[18px] font-semibold text-[#111827]">Investment Waterfall</div>
        
        <div className="flex gap-[16px] justify-between px-[16px]">
          <div className="flex flex-col gap-[4px]">
            <div className="text-[13px] text-[#6B7280]">Gross Rental</div>
            <div className="text-[20px] font-bold text-[#16A34A]">40k AED</div>
          </div>
          <div className="flex flex-col gap-[4px] items-center">
            <div className="text-[13px] text-[#6B7280]">Acquisition Fee</div>
            <div className="text-[20px] font-bold text-[#DC2626]">-1200 AED</div>
          </div>
          <div className="flex flex-col gap-[4px] items-center">
            <div className="text-[13px] text-[#6B7280]">Management Fee</div>
            <div className="text-[20px] font-bold text-[#EA580C]">-200 AED</div>
          </div>
          <div className="flex flex-col gap-[4px] items-center">
            <div className="text-[13px] text-[#6B7280]">Platform Fee</div>
            <div className="text-[20px] font-bold text-[#EA580C]">-400 AED</div>
          </div>
          <div className="flex flex-col gap-[4px] items-end">
            <div className="text-[13px] text-[#6B7280]">Net Distribution</div>
            <div className="text-[20px] font-bold text-[#0F766E]">39,200 AED</div>
          </div>
        </div>

        {/* Waterfall Chart */}
        <div className="w-full h-[300px] relative mt-[16px]">
          {/* Y-Axis Grid */}
          <div className="absolute left-0 top-[10px] bottom-[40px] w-[50px]">
            {[45, 40, 35, 30, 25, 20, 15, 10, 5, 0].map((val) => (
              <div key={val} className="absolute left-0 w-full text-right pr-[12px]" style={{ bottom: `${(val / 45) * 100}%` }}>
                <span className="text-[11px] text-[#9CA3AF]">{val}k</span>
              </div>
            ))}
          </div>

          {/* Grid Lines */}
          <div className="absolute left-[50px] top-[10px] right-0 bottom-[40px]">
            {[45, 40, 35, 30, 25, 20, 15, 10, 5, 0].map((val) => (
              <div
                key={val}
                className="absolute left-0 right-0 border-t border-[#E5E7EB]"
                style={{ top: `${100 - (val / 45) * 100}%` }}
              ></div>
            ))}
          </div>

          {/* Bars Container */}
          <div className="absolute left-[50px] top-[10px] right-0 bottom-[40px] flex justify-around items-end px-[20px] gap-[4px]">
            {/* Bar 1: Gross Rental 40k */}
            <div className="flex flex-col items-center gap-[2px] flex-1 h-full">
              <div className="w-[50px] h-full flex flex-col items-center justify-end">
                <div className="w-full bg-[#22C55E] rounded-t-[4px] hover:shadow-lg transition-all" style={{ height: `${(40 / 45) * 100}%` }}></div>
              </div>
              <div className="text-center mt-[4px]">
                <div className="text-[12px] font-bold text-[#111827]">40k AED</div>
                <div className="text-[11px] text-[#6B7280]">Gross Rental</div>
              </div>
            </div>

            {/* Connector and Fee 1: -1.2k */}
            <div className="flex flex-col items-center gap-[2px] flex-1 h-full relative">
              <div className="w-[50px] h-full flex flex-col items-center justify-end">
                <div className="absolute -left-[2px] top-0 w-[calc(100%+4px)] h-[1px] border-b border-dashed border-[#D1D5DB]" style={{ top: `${(1.2 / 45) * 100}%` }}></div>
                <div className="w-full bg-[#DC2626] rounded-[3px] hover:shadow-lg transition-all" style={{ height: `${(1.2 / 45) * 100}%` }}></div>
              </div>
              <div className="text-center mt-[4px]">
                <div className="text-[12px] font-bold text-[#DC2626]">-1.2k</div>
                <div className="text-[11px] text-[#6B7280]">Acq. Fee</div>
              </div>
            </div>

            {/* Connector and Fee 2: -0.2k */}
            <div className="flex flex-col items-center gap-[2px] flex-1 h-full relative">
              <div className="w-[50px] h-full flex flex-col items-center justify-end">
                <div className="absolute -left-[2px] top-0 w-[calc(100%+4px)] h-[1px] border-b border-dashed border-[#D1D5DB]" style={{ top: `${(0.2 / 45) * 100}%` }}></div>
                <div className="w-full bg-[#F97316] rounded-[3px] hover:shadow-lg transition-all" style={{ height: `${(0.2 / 45) * 100}%` }}></div>
              </div>
              <div className="text-center mt-[4px]">
                <div className="text-[12px] font-bold text-[#F97316]">-0.2k</div>
                <div className="text-[11px] text-[#6B7280]">Mgmt Fee</div>
              </div>
            </div>

            {/* Connector and Fee 3: -0.4k */}
            <div className="flex flex-col items-center gap-[2px] flex-1 h-full relative">
              <div className="w-[50px] h-full flex flex-col items-center justify-end">
                <div className="absolute -left-[2px] top-0 w-[calc(100%+4px)] h-[1px] border-b border-dashed border-[#D1D5DB]" style={{ top: `${(0.4 / 45) * 100}%` }}></div>
                <div className="w-full bg-[#F97316] rounded-[3px] hover:shadow-lg transition-all" style={{ height: `${(0.4 / 45) * 100}%` }}></div>
              </div>
              <div className="text-center mt-[4px]">
                <div className="text-[12px] font-bold text-[#F97316]">-0.4k</div>
                <div className="text-[11px] text-[#6B7280]">Platform Fee</div>
              </div>
            </div>

            {/* Bar 5: Net Distribution 39.2k */}
            <div className="flex flex-col items-center gap-[2px] flex-1 h-full">
              <div className="w-[50px] h-full flex flex-col items-center justify-end">
                <div className="w-full bg-[#14B8A6] rounded-t-[4px] hover:shadow-lg transition-all" style={{ height: `${(39.2 / 45) * 100}%` }}></div>
              </div>
              <div className="text-center mt-[4px]">
                <div className="text-[12px] font-bold text-[#0F766E]">39.2k AED</div>
                <div className="text-[11px] text-[#6B7280]">Net Return</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-[6px] left-[50px] right-0 flex justify-center gap-[24px] text-[12px]">
            <div className="flex items-center gap-[6px]">
              <div className="w-[10px] h-[10px] rounded-[2px] bg-[#22C55E]"></div>
              <span className="text-[#4B5563]">Gross Yield</span>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="w-[10px] h-[10px] rounded-[2px] bg-[#DC2626]"></div>
              <span className="text-[#4B5563]">Fees</span>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="w-[10px] h-[10px] rounded-[2px] bg-[#14B8A6]"></div>
              <span className="text-[#4B5563]">Net Distribution</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario Comparison (Graph) */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="text-[18px] font-semibold text-[#111827]">Scenario Comparison</div>
        {/* Same Graph as Yield Analysis essentially based on screenshot */}
        <div className="w-full h-[240px] flex flex-col relative">
          <div className="flex-1 flex flex-col justify-between relative pt-[10px] pb-[30px]">
             {[9,8,7,6,5].map((y) => (
              <div key={y} className="flex items-center w-full relative">
                <span className="text-[11px] text-[#9CA3AF] w-[30px]">{y}%</span>
                <div className="flex-1 border-t border-dashed border-[#E5E7EB]"></div>
              </div>
            ))}
            <svg className="absolute top-[20px] left-[30px] right-0 bottom-[30px] w-[calc(100%-30px)] h-[calc(100%-50px)]" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 50 L14 25 L28 45 L42 20 L57 35 L71 55 L85 50 L100 25" fill="none" stroke="#22C55E" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <path d="M0 50 L14 15 L28 35 L42 25 L57 20 L71 35 L85 30 L100 20" fill="none" stroke="#F97316" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="absolute bottom-0 left-[30px] right-0 flex justify-between px-[10px]">
              {['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8'].map((q) => (
                <span key={q} className="text-[11px] text-[#9CA3AF]">{q}</span>
              ))}
            </div>
          </div>
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

      {/* Scenario Comparison (Table) */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="text-[18px] font-semibold text-[#111827]">Scenario Comparison</div>
        <div className="flex flex-col gap-[16px]">
           <div className="grid grid-cols-4 px-[16px] py-[8px] border-b border-[#E5E7EB] text-[13px] font-medium text-[#6B7280]">
              <div>Scenario</div>
              <div>Net Yield</div>
              <div>Annual Return</div>
              <div>Status</div>
           </div>
           
           <div className="grid grid-cols-4 px-[16px] items-center text-[14px]">
              <div className="flex items-center gap-[8px]">
                <div className="w-[10px] h-[10px] rounded-full bg-[#DC2626]"></div>
                <span className="font-medium text-[#111827]">Bear Case</span>
              </div>
              <div className="text-[#DC2626] font-medium">5.4%</div>
              <div className="font-medium text-[#111827]">108K AED</div>
              <div></div>
           </div>

           <div className="grid grid-cols-4 px-[16px] items-center text-[14px]">
              <div className="flex items-center gap-[8px]">
                <div className="w-[10px] h-[10px] rounded-full bg-[#0F766E]"></div>
                <span className="font-medium text-[#111827]">Base Case</span>
              </div>
              <div className="text-[#0F766E] font-medium">6.4%</div>
              <div className="font-medium text-[#111827]">128K AED</div>
              <div>
                <span className="bg-[#F0FDFA] text-[#0F766E] text-[12px] font-medium px-[10px] py-[4px] rounded-full border border-[#CCFBF1]">
                  Most Likely
                </span>
              </div>
           </div>

           <div className="grid grid-cols-4 px-[16px] items-center text-[14px]">
              <div className="flex items-center gap-[8px]">
                <div className="w-[10px] h-[10px] rounded-full bg-[#16A34A]"></div>
                <span className="font-medium text-[#111827]">Bull Case</span>
              </div>
              <div className="text-[#16A34A] font-medium">8.4%</div>
              <div className="font-medium text-[#111827]">168K AED</div>
              <div></div>
           </div>
        </div>

        <div className="mt-[8px] bg-[#FFF7ED] border border-[#FFEDD5] rounded-[8px] p-[20px] flex flex-col gap-[12px]">
           <div className="text-[14px] font-semibold text-[#EA580C]">Fee Structure Transparency</div>
           
           <div className="flex justify-between items-center text-[13px] border-b border-[#FFEDD5] pb-[8px]">
             <span className="text-[#4B5563]">Acquisition Fee (one-time)</span>
             <span className="font-medium text-[#111827]">3.0%</span>
           </div>
           <div className="flex justify-between items-center text-[13px] border-b border-[#FFEDD5] pb-[8px]">
             <span className="text-[#4B5563]">Annual Management Fee</span>
             <span className="font-medium text-[#111827]">0.5%</span>
           </div>
           <div className="flex justify-between items-center text-[13px] border-b border-[#FFEDD5] pb-[8px]">
             <span className="text-[#4B5563]">Platform Fee (quarterly)</span>
             <span className="font-medium text-[#111827]">1.0%</span>
           </div>
           <div className="flex justify-between items-center text-[14px] pt-[4px]">
             <span className="font-semibold text-[#111827]">Total Effective Fee</span>
             <span className="font-semibold text-[#EA580C]">~4.5% Annually</span>
           </div>
        </div>
      </div>
    </div>
  );
}