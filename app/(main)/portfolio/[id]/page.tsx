"use client";

import React from 'react';
import { MapPin, ArrowRight, CheckCircle2, Download, Check,ChevronLeft,ChevronRight,TrendingUp ,Users,FileText,PenTool} from 'lucide-react';
function PropertyDetailsDashboard() {
    const amenities = [
      "Swimming Pool",
      "24/7 Security",
      "BBQ Area",
      "Fitness Center",
      "Smart Access Control",
      "Concierge Service",
      "Covered Parking",
      "Children's Play Area"
    ];
  
    const activities = [
      {
        icon: TrendingUp,
        title: "Yield Updated",
        time: "2 hours ago",
        desc: "Downtown Office SPV yield increased to 8.2%",
        active: true
      },
      {
        icon: Users,
        title: "New Investor Joined",
        time: "5 hours ago",
        desc: "3 new commitments totaling ₹80L",
        active: false
      },
      {
        icon: FileText,
        title: "Document Uploaded",
        time: "1 day ago",
        desc: "Q4 Financial Report now available",
        active: false
      },
      {
        icon: CheckCircle2,
        title: "Funding Milestone",
        time: "2 days ago",
        desc: "75% funding target achieved",
        active: false
      },
      {
        icon: PenTool,
        title: "Lease Signed",
        time: "3 days ago",
        desc: "New tenant secured - 3 year contract",
        active: false
      }
    ];
  
    const documents = [
      { title: "Share Certificate", size: "2.4 MB" },
      { title: "SPV Agreement", size: "1.6 MB" },
      { title: "Tax Certificate", size: "0.9 MB" }
    ];
  
    return (
        <div className="w-full mx-auto font-sans min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_390px] gap-2">
          
          {/* Left Column: Property Details */}
          <div className="bg-white rounded-[1.25rem] p-4 flex flex-col ">
            <h2 className="text-[17px] font-bold text-[#1e293b] mb-4">Property Details</h2>
            
            {/* Main Image Viewer */}
            <div className="relative h-[300px] md:h-[380px] bg-[#d1d5db] rounded-xl mb-4 overflow-hidden flex-shrink-0">
              {/* Arrows */}
              <button className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-gray-700 hover:bg-gray-50 transition-colors z-10">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow text-gray-700 hover:bg-gray-50 transition-colors z-10">
                <ChevronRight className="w-5 h-5" />
              </button>
  
              {/* Badges */}
              <div className="absolute top-4 right-4 bg-black/40 text-white text-[12px] font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                1 / 6
              </div>
              <div className="absolute bottom-4 left-4 bg-white text-[#1e293b] text-[13px] font-bold px-4 py-2 rounded-lg shadow-sm">
                Living Room
              </div>
            </div>
  
            {/* Thumbnails */}
            <div className="flex gap-4 mb-8 overflow-hidden">
              <div className="w-[18.5%] h-24 rounded-xl border-2 border-[#EB6601] bg-white flex-shrink-0"></div>
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-[18.5%] h-24 rounded-xl bg-[#d1d5db] flex-shrink-0"
                ></div>
              ))}
            </div>
  
            {/* Divider */}
            {/* <div className="border-t border-gray-100 mb-6"></div> */}
  
            {/* Building Amenities */}
            <div className='border border-gray-200 p-4 rounded-2xl' >
              <h3 className="text-[14px] font-semibold text-[#1e293b] mb-4">Building Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0"></div>
                    <span className="text-[12px] font-medium text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* Right Column: Activity & Documents */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            
            {/* Property Activity */}
            <div className="bg-white rounded-[1.25rem] border border-gray-200 p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-[16px] font-semibold text-[#1e293b]">Property Activity</h2>
                <button className="text-[12px] font-semibold text-[#277079] hover:underline">
                  View All Activity
                </button>
              </div>
  
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gray-200 z-0"></div>
  
                <div className="flex flex-col gap-6">
                  {activities.map((item, index) => (
                    <div key={index} className="relative flex items-start gap-4">
                      {/* Icon */}
                      <div className="w-8 h-8 rounded-full bg-[#EB6601] text-white flex items-center justify-center shrink-0 z-10 shadow-sm mt-1">
                        <item.icon className="w-4 h-4" />
                      </div>
  
                      {/* Content */}
                      <div className={`flex-1 ${
                        item.active 
                          ? 'bg-[#2770791A] border border-gray-200 rounded-xl p-2 ' 
                          : 'bg-[#F8FAFC] border border-gray-200 rounded-xl p-2 '
                      }`}>
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-[13px] font-bold text-[#1e293b]">{item.title}</span>
                          <span className="text-[11px] text-gray-500 font-medium whitespace-nowrap ml-2 mt-0.5">{item.time}</span>
                        </div>
                        <p className="text-[12px] text-gray-500 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Asset Document Library */}
            <div className="bg-white rounded-[1.25rem] border border-gray-200 p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[16px] font-semibold text-[#1e293b]">Asset Document Library</h2>
                <button className="text-[12px] font-semibold text-[#277079] hover:underline">
                  Download All
                </button>
              </div>
  
              <div className="flex flex-col gap-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between border border-gray-200 rounded-xl p-3 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#277079]/10 flex items-center justify-center shrink-0 text-[#277079]">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#1e293b] mb-0.5">{doc.title}</p>
                        <p className="text-[11px] text-gray-500 font-medium">PDF • {doc.size}</p>
                      </div>
                    </div>
                    <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-[#277079] transition-colors shrink-0">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
}
export default function AssetDetails() {

    
  const historyData = [
    {
      quarter: 'Q4 2023',
      netPayout: '39.2K AED',
      status: 'Pending',
    },
    {
      quarter: 'Q3 2024',
      netPayout: '39.4K AED',
      status: 'Paid',
    },
    {
      quarter: 'Q2 2024',
      netPayout: '39K AED',
      status: 'Paid',
    },
    {
      quarter: 'Q1 2024',
      netPayout: '39.2K AED',
      status: 'Paid',
    },
    {
      quarter: 'Q4 2023',
      netPayout: '37.7K AED',
      status: 'Paid',
    },
  ];

  return (
    <div className="w-full mx-auto font-sans flex flex-col gap-2 py-2  min-h-screen">
      
      {/* Top Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-2">
        
        {/* Banner (Left) */}
        <div className=" relative h-64 md:h-72 rounded-[1.25rem] overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="JVC Tower" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#113032]/90 via-[#113032]/40 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#FE5919] text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                9.1% Yield
              </span>
              <span className="bg-white/95 text-[#277079] text-[11px] font-bold px-2.5 py-1 rounded-full">
                Residential
              </span>
            </div>
            <h1 className="text-[24px]  font-semibold text-white mb-2">JVC Tower SPV</h1>
            <div className="flex items-center gap-1.5 text-gray-200 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Jumeirah Village Circle, Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* Investment Insight (Right) */}
        <div className="bg-white   rounded-[1.25rem] p-4 border-2 border-[#FE5919] shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-[17px] font-bold text-[#1e293b] mb-3">Investment Insight</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
              JVC Tower SPV is currently outperforming the local benchmark by <span className="font-semibold text-[#277079]">1.4%</span>. Your ownership value has appreciated by 2.1% since entry.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-start gap-2.5">
                {/* <CheckCircle2 className="w-4 h-4 text-[#277079] mt-0.5 shrink-0" /> */}
                <div className="w-4 h-4 bg-[#277079]  rounded-full flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3  text-white  mt-0.5 shrink-0" strokeWidth={3} />
                </div>
                <span className="text-[13px] font-medium text-[#1e293b]">95% Occupancy Rate secured for 2024</span>
              </div>
              <div className="flex items-start gap-2.5">
              <div className="w-4 h-4 bg-[#277079]  rounded-full flex items-center justify-center shadow-sm">
                    <Check className="w-3 h-3  text-white  mt-0.5 shrink-0" strokeWidth={3} />
                </div>
                <span className="text-[13px] font-medium text-[#1e293b]">Next maintenance scheduled for Q3</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-[#FE5919] hover:bg-[#e04810] text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-[14px]">
            Explore New Opportunities
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Middle Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="bg-white rounded-[1.25rem] p-4 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
          <p className="text-[13px] font-medium text-gray-500 mb-1">Total Invested Capital</p>
          <p className="text-[1.5rem] font-semibold text-[#1F2937] mb-1">20L AED</p>
          <p className="text-[12px] text-gray-400">Invested Jan 2023</p>
        </div>
        <div className="bg-white rounded-[1.25rem] p-4 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
          <p className="text-[13px] font-medium text-gray-500 mb-1">Ownership Share</p>
          <p className="text-[1.5rem] font-semibold text-[#1F2937] mb-1">1.00%</p>
          <p className="text-[12px] text-gray-400">12,500 SPV Shares</p>
        </div>
        <div className="bg-white rounded-[1.25rem] p-4 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
          <p className="text-[13px] font-medium text-gray-500 mb-1">Est. Annual Income</p>
          <p className="text-[1.5rem] font-semibold text-[#277079] mb-1">1.28L AED</p>
          <p className="text-[12px] text-gray-400">39.2K AED Expected Payout</p>
        </div>
        <div className="bg-white rounded-[1.25rem] p-4 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
          <p className="text-[13px] font-medium text-gray-500 mb-1">Next Payout</p>
          <p className="text-[1.5rem] font-semibold text-[#1e293b] mb-1">39.2K AED</p>
          <p className="text-[12px] text-gray-400">Expected May 15</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_393px] gap-2">
        
        {/* Asset Analytics (Left, col-span-2) */}
        <div className="bg-white rounded-[1.25rem] p-6 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] flex flex-col">
          <h3 className="text-[16px] font-bold text-[#1e293b] mb-6">Asset Performance Analytics</h3>
          <div className="mb-6 h-[1.25px] w-full bg-[linear-gradient(to_right,#e5e7eb_55%,transparent_0%)] bg-[length:12px_1px]"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            <div className="border-r border-gray-100 last:border-0">
              <p className="text-[14px] font-medium text-gray-500 mb-1">Appreciation</p>
              <p className="text-[1.5rem] font-semibold text-[#277079]">+2.1%</p>
            </div>
            <div className="border-r border-gray-100 last:border-0 md:pl-4">
              <p className="text-[14px] font-medium text-gray-500 mb-1">Occupancy</p>
              <p className="text-[1.5rem] font-semibold text-[#277079]">95%</p>
            </div>
            <div className="border-r border-gray-100 last:border-0 md:pl-4">
              <p className="text-[14px] font-medium text-gray-500 mb-1">NOI(Annual)</p>
              <p className="text-[1.5rem] font-semibold text-[#277079]">3.3L AED</p>
            </div>
            <div className="md:pl-4">
              <p className="text-[14px] font-medium text-gray-500 mb-1">Actual IRR</p>
              <p className="text-[1.5rem] font-semibold text-[#FE5919]">12%</p>
            </div>
          </div>

          {/* <div className="border-t border-dashed border-gray-100 mb-6"></div> */}

          <div className="mb-6 h-[1.25px] w-full bg-[linear-gradient(to_right,#e5e7eb_55%,transparent_0%)] bg-[length:12px_1px]"></div>

          <div className='bg-[#F8FAFC] p-6 rounded-2xl' >
  <div className="relative flex-1 min-h-[250px] w-full mt-2">

    {/* Y-Axis Labels */}
    <div className="absolute top-0 bottom-0 left-0 w-8 flex flex-col justify-between text-[11px] text-[#1F2937] font-medium z-10 py-[1px]">
      {[9, 8, 7, 6, 5].map((val) => (
        <div key={val} className="flex items-center justify-end pr-2 h-0">
          <span className="-translate-y-1/2">{val}%</span>
        </div>
      ))}
    </div>

    {/* Chart Area */}
    <div className="absolute top-0 bottom-0 left-8 right-0 bg-[#F8FAFC] border-l border-b border-[#1F29374D] rounded-tr-xl overflow-visible">

      {/* Horizontal Dashed Lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-full h-[1px] border-b border-dashed border-gray-200 ${i === 0 || i === 4 ? 'opacity-0' : ''}`}
          />
        ))}
      </div>

      {/* Vertical Dashed Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 border-l border-dashed border-gray-200"
            style={{ left: `${(i / 7) * 100}%` }}
          />
        ))}
      </div>

      {/* SVG Lines */}
      <svg
        viewBox="0 0 1000 240"
        className="absolute inset-0 w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Green Line - Investment Value */}
        <polyline
          points="0,96 142.86,36 285.71,108 428.57,54 571.43,36 714.29,120 857.14,120 1000,30"
          fill="none"
          stroke="#277079"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Orange Line - Net Earnings */}
        <polyline
          points="0,96 142.86,12 285.71,144 428.57,54 571.43,36 714.29,96 857.14,96 1000,30"
          fill="none"
          stroke="#FE5919"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>

    {/* X-Axis Labels */}
    <div className="absolute left-8 right-0 flex justify-between text-[11px] text-[#1F2937] font-medium" style={{ bottom: '-24px' }}>
      {['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'].map((label) => (
        <span key={label} className="text-center">{label}</span>
      ))}
    </div>
  </div>

  {/* Legend */}
  <div className="flex justify-center items-center gap-6 mt-10">
    <div className="flex items-center gap-2">
      <div className="w-4 h-1.5 rounded-full bg-[#277079]" />
      <span className="text-[12px] font-semibold text-[#1e293b]">Asset Growth</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-4 h-1.5 rounded-full bg-[#FE5919]" />
      <span className="text-[12px] font-semibold text-[#1e293b]">Investor Income</span>
    </div>
  </div>
  </div>
 
        </div>

        {/* Distribution History (Right, col-span-1) */}
        <div className="bg-white rounded-[1.25rem] p-6 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-semibold text-[#1e293b]">Distribution History</h3>
            <button className="bg-[#EB6601] hover:bg-[#EB6601]/80 text-white px-3 py-2 rounded-lg flex items-center gap-1.5 text-[16px] font-medium transition-colors">
              <Download className="w-3.5 h-3.5" />
              Download
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-2 border-b border-gray-200 bg-[#F8FAFC] text-[14px] font-medium text-gray-500 first:rounded-tl-lg">
                    Quarter
                  </th>
                  <th className="py-2 px-2 border-b border-gray-200 bg-[#F8FAFC] text-[14px] font-medium text-gray-500 text-center">
                    Net Payout
                  </th>
                  <th className="py-2 px-2 border-b border-gray-200 bg-[#F8FAFC]  text-[14px] font-medium text-gray-500 text-right last:rounded-tr-lg">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((row, index) => (
                  <tr key={index} className="group hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-2 border-b border-gray-200 text-[13px] font-bold text-[#1e293b]">
                      {row.quarter}
                    </td>
                    <td className="py-4 px-2 border-b border-gray-200 text-[13px] font-medium text-[#277079] text-center">
                      {row.netPayout}
                    </td>
                    <td className="py-4 px-2 border-b border-gray-200 text-[13px] text-right">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
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
      <PropertyDetailsDashboard/>
    </div>
  );
}