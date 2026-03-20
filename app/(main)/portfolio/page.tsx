"use client";

import React from 'react';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { Filter, MapPin, Users, Download ,SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

export default function DashboardComponent() {


    function DistributionHistory() {
        const historyData = [
          {
            quarter: 'Q4 2023',
            grossIncome: '40K AED',
            fees: '800 AED',
            netPayout: '39.2K AED',
            status: 'Pending',
          },
          {
            quarter: 'Q3 2024',
            grossIncome: '40.2K AED',
            fees: '800 AED',
            netPayout: '39.4K AED',
            status: 'Paid',
          },
          {
            quarter: 'Q2 2024',
            grossIncome: '39.8K AED',
            fees: '800 AED',
            netPayout: '39K AED',
            status: 'Paid',
          },
          {
            quarter: 'Q1 2024',
            grossIncome: '40K AED',
            fees: '800 AED',
            netPayout: '39.2K AED',
            status: 'Paid',
          },
          {
            quarter: 'Q4 2023',
            grossIncome: '38.5K AED',
            fees: '770 AED',
            netPayout: '37.7K AED',
            status: 'Paid',
          },
        ];
      
        return (
          <div className="w-full mx-auto font-sans">
            <div className="bg-white rounded-[1.25rem] border border-gray-100 p-6 lg:p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)]">
              
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-[17px] font-bold text-[#1e293b]">Distribution History</h2>
                <button className="bg-[#277079] hover:bg-[#1f5a61] text-white px-4 py-2.5 rounded-lg flex items-center gap-2 text-[13px] font-medium transition-colors">
                  <SlidersHorizontal className="w-4 h-4" />
                  Export CSV
                </button>
              </div>
      
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-2 border-y border-gray-200 bg-[#F8FAFC]  text-[13px] font-medium text-gray-500 first:rounded-tl-lg last:rounded-tr-lg">
                        Quarter
                      </th>
                      <th className="  py-2 px-2 border-y border-gray-200 bg-[#F8FAFC] text-[13px] font-medium text-gray-500 text-center">
                        Gross Income
                      </th>
                      <th className="  py-2 px-2 border-y border-gray-200 bg-[#F8FAFC] text-[13px] font-medium text-gray-500 text-center">
                        Fees
                      </th>
                      <th className="  py-2 px-2 border-y border-gray-200 bg-[#F8FAFC] text-[13px] font-medium text-gray-500 text-right">
                        Net Payout
                      </th>
                      <th className="text-left py-2 px-2 border-y border-gray-200 bg-[#F8FAFC] text-[13px] font-medium text-gray-500 pl-8">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {historyData.map((row, index) => (
                      <tr key={index} className="group hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-2 border-b border-gray-200 text-[14px] font-bold text-[#1e293b]">
                          {row.quarter}
                        </td>
                        <td className="py-4 px-2 border-b border-gray-200 text-[14px] font-medium text-[#1e293b] text-center">
                          {row.grossIncome}
                        </td>
                        <td className="py-4 px-2 border-b border-gray-200 text-[14px] font-medium text-[#1e293b] text-center">
                          {row.fees}
                        </td>
                        <td className="py-4 px-2 border-b border-gray-200 text-[14px] font-medium text-[#277079] text-right">
                          {row.netPayout}
                        </td>
                        <td className="py-4 px-2 border-b border-gray-200    text-[14px] pl-8">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold ${
                              row.status === 'Pending'
                                ? 'bg-[#FE5919]/10 text-[#FE5919]'
                                : 'bg-emerald-50 text-emerald-500'
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
      
            </div>
          </div>
        );
      }

    const InvestmentCard = () => {
        return (
          <div className="bg-white rounded-[1.25rem] border border-gray-100 p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col font-sans">
            
            {/* Image Container */}
            <div className="relative h-44 rounded-xl overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="JVC Tower" 
                className="w-full h-full object-cover"
              />
              
              {/* Top Badges */}
              <div className="absolute top-3 left-3">
                <span className="bg-[#FE5919] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  9.1% Yield
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-white/95 text-[#277079] text-[12px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  Residential
                </span>
              </div>
              
              {/* Bottom Badge */}
              <div className="absolute bottom-3 left-3">
                <span className="bg-white/95 text-[#277079] text-[12px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
                  <MapPin className="w-3 h-3 text-[#277079]" />
                  Jumeirah Village Circle
                </span>
              </div>
            </div>
      
            <h3 className="text-[17px] font-medium text-[#1e293b] mb-4">JVC Tower SPV</h3>
      
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[#2770791A]/90 p-3 rounded-[0.6rem]">
                <p className="text-[11px] text-[#6B7280] font-medium mb-1">Investment Amount</p>
                <p className="text-[14px] font-bold text-[#277079]">20L AED</p>
              </div>
              <div className="bg-[#2770791A]/90 p-3 rounded-[0.6rem]">
                <p className="text-[11px] text-[#6B7280] font-medium mb-1">Ownership</p>
                <p className="text-[14px] font-bold text-[#1e293b]">1.00%</p>
              </div>
              <div className="bg-[#FE5919]/10 p-3 rounded-[0.6rem]">
                <p className="text-[11px] text-[#6B7280] font-medium mb-1">Annual Income</p>
                <p className="text-[14px] font-bold text-[#FE5919]">128K AED</p>
              </div>
              <div className="bg-[#0AA43E1A]/90 p-3 rounded-[0.6rem]">
                <p className="text-[11px] text-[#6B7280] font-medium mb-1">Next Payout</p>
                <p className="text-[14px] font-bold text-[#0AA43E]">128K AED</p>
              </div>
            </div>
      
            {/* Funding Status */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[12px] font-medium text-gray-500">Funding Status</span>
                <span className="text-[12px] font-bold text-[#277079]">97%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#277079] rounded-full" style={{ width: '97%' }}></div>
              </div>
            </div>
      
            {/* Investors */}
            <div className="flex items-center gap-1.5 mb-6 text-gray-500">
              <Users className="w-4 h-4" />
              <span className="text-[12px] font-medium">20 / 20 Investors</span>
            </div>
      
            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <Link href={"/portfolio/asset-details"} className="bg-[#277079] hover:bg-[#1f5a61] text-white text-[16px] font-medium px-4 py-2.5 rounded-lg transition-colors">
                View Asset Details
              </Link>
              <button className="border border-[#277079] text-[#277079] hover:bg-[#277079]/5 text-[16px] font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        );
      };
  return (
    <div className="w-full   mx-auto py-3 font-sans flex flex-col gap-3">
      
      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[14px] font-medium text-gray-600">Total Invested Capital</span>
            <span className="bg-[#277079]/10 text-[#277079] text-[11px] font-bold px-2 py-0.5 rounded-md">
              +0.2%
            </span>
          </div>
          <div className="text-[1.75rem] font-bold text-[#277079] mb-1">
            20.00L <span className="text-xl">AED</span>
          </div>
          <div className="text-[12px] text-gray-400">
            1 active investment
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[14px] font-medium text-gray-600">Average Net Yield</span>
            <span className="bg-[#FE5919]/10 text-[#FE5919] text-[11px] font-bold px-2 py-0.5 rounded-md">
              +0.8%
            </span>
          </div>
          <div className="text-[1.75rem] font-bold text-[#FE5919] mb-1">
            6.4%
          </div>
          <div className="text-[12px] text-[#277079] font-medium">
            Outperforming Benchmark by 0.8%
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[14px] font-medium text-gray-600">Next Payout Date</span>
            <span className="bg-[#277079]/10 text-[#277079] text-[11px] font-bold px-2 py-0.5 rounded-md">
              UPI Verified
            </span>
          </div>
          <div className="text-[1.75rem] font-bold text-[#277079] mb-1">
            Apr 15, 2024
          </div>
          <div className="text-[12px] text-gray-400">
            39.2K AED Expected Payout
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        
        {/* Left Chart Section (Takes up 2 columns) */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] lg:col-span-2 flex flex-col">
          <h3 className="text-[15px] font-bold text-[#1e293b] mb-6">Portfolio Performance</h3>
          
          <div className="relative flex-1 min-h-[250px] w-full mt-2">
            {/* Y-Axis Labels & Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-[11px] text-gray-400 font-medium z-0">
              {[9, 8, 7, 6, 5].map((val, i) => (
                <div key={val} className="flex items-center w-full h-0">
                  <span className="w-8 text-right pr-3 -translate-y-1/2">{val}%</span>
                  <div className="flex-1 border-b border-dashed border-gray-200"></div>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className="absolute top-0 bottom-0 right-0 left-8 z-10">
              <svg viewBox="0 0 1000 240" className="w-full h-full preserve-aspect-ratio-none overflow-visible">
                {/* Green Line (Investment Value) */}
                <polyline 
                  points="0,96 142,48 285,108 428,54 571,96 714,150 857,144 1000,48" 
                  fill="none" 
                  stroke="#277079" 
                  strokeWidth="2" 
                  vectorEffect="non-scaling-stroke"
                />
                
                {/* Orange Line (Net Earnings) */}
                <polyline 
                  points="0,102 142,30 285,132 428,66 571,54 714,102 857,102 1000,48" 
                  fill="none" 
                  stroke="#FE5919" 
                  strokeWidth="2" 
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {/* X-Axis Labels */}
            <div className="absolute bottom-[-24px] right-0 left-8 flex justify-between text-[11px] text-gray-400 font-medium">
              {['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'].map((label) => (
                <span key={label} className="text-center w-8 -ml-4 first:ml-0 last:mr-0">{label}</span>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1.5 rounded-full bg-[#277079]"></div>
              <span className="text-[12px] font-semibold text-[#1e293b]">Investment Value</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1.5 rounded-full bg-[#FE5919]"></div>
              <span className="text-[12px] font-semibold text-[#1e293b]">Net Earnings</span>
            </div>
          </div>
        </div>

        {/* Right Insights Section */}
        <div className="bg-[#fff9f5] rounded-3xl p-6 border-2 border-[#FE5919]  flex flex-col justify-between">
  
  <div>
    {/* Header */}
    <div className="flex items-start gap-4 mb-5">
      <div className="w-12 h-12 rounded-full bg-[#FE5919]/10 flex items-center justify-center shrink-0">
        <Lightbulb className="w-6 h-6 text-[#FE5919]" />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-[20px] font-bold text-[#1F2937]">
            Portfolio Insights
          </h3>

          <span className="bg-[#FE5919] text-white text-[11px] font-bold px-3 py-[3px] rounded-full uppercase">
            NEW
          </span>
        </div>

        <p className="text-[14px] text-[#6B7280] leading-relaxed max-w-[520px]">
          Your portfolio yield increased by{" "}
          <span className="font-semibold text-[#277079]">
            0.3% this quarter
          </span>{" "}
          due to higher occupancy rates at JVC Tower SPV. The property is now
          operating at{" "}
          <span className="font-semibold text-[#277079]">
            96% occupancy
          </span>
          , exceeding initial projections.
        </p>
      </div>
    </div>

    {/* Recommendation */}
    <div className="bg-[#FE59191A] rounded-2xl p-5 mb-6">
      <h4 className="text-[16px] font-bold text-[#1F2937] mb-2">
        Recommendation
      </h4>

      <p className="text-[14px] text-[#6B7280] leading-relaxed">
        Consider diversifying into{" "}
        <span className="font-semibold text-[#277079]">
          commercial SPVs
        </span>{" "}
        to balance your portfolio risk. Commercial properties in Dubai Marina
        are showing{" "}
        <span className="font-semibold text-[#277079]">
          strong 7.2% yields
        </span>.
      </p>
    </div>
  </div>

  <div>
    {/* CTA */}
    <button className="w-full bg-[#FE5919] hover:bg-[#e04810] text-white font-semibold py-4 rounded-2xl transition-colors flex items-center justify-center gap-2 text-[16px] mb-6">
      Explore Properties
      <ArrowRight className="w-5 h-5" />
    </button>

    {/* Divider */}
    <div className="border-t border-[#E5E7EB] mb-4" />

    {/* Stats */}
    <div className="flex justify-between items-center px-2">
      <div className="text-center">
        <p className="text-[13px] text-[#6B7280] mb-1 font-medium">
          Avg. Growth
        </p>
        <p className="text-[18px] font-bold text-green-600">
          +2.4%
        </p>
      </div>

      <div className="text-center">
        <p className="text-[13px] text-[#6B7280] mb-1 font-medium">
          Properties Analyzed
        </p>
        <p className="text-[18px] font-bold text-[#1F2937]">
          248
        </p>
      </div>

      <div className="text-center">
        <p className="text-[13px] text-[#6B7280] mb-1 font-medium">
          Best Opportunity
        </p>
        <p className="text-[18px] font-bold text-[#FE5919]">
          Marina
        </p>
      </div>
    </div>
  </div>
</div>

      </div>


      <div className="w-full bg-white rounded-2xl mx-auto p-4 font-sans">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[16px] font-semibold text-[#1e293b]">My Investments</h2>
        <button className="bg-[#277079] hover:bg-[#1f5a61] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-[13px] font-medium transition-colors">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Investments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InvestmentCard />
        <InvestmentCard />
        <InvestmentCard />
      </div>

    </div>

    <DistributionHistory/>
    </div>
  );
}