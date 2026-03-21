'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import dynamic from 'next/dynamic';
import { usePropertyFilter } from '../../context/FilterContext';

const PropertiesMap = dynamic(() => import('./components/PropertiesMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#f0f9f4] animate-pulse flex items-center justify-center text-slate-400">Loading map...</div>
});

export default function PropertiesPage() {
  const { showPropertyFilter, setShowPropertyFilter } = usePropertyFilter();
  const [showLocationSelect, setShowLocationSelect] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full font-sans">
      {/* Header Banner */}
      

      <div className={`flex gap-6 mt-6 relative transition-all ${showPropertyFilter ? 'pr-[30vw]' : ''}`}>
        {/* Left Map Area */}
        <div className="flex-1 relative bg-slate-100 rounded-xl overflow-hidden h-[710px] shadow-sm border border-slate-200">
          <PropertiesMap />
          
          <div className="absolute inset-x-0 inset-y-0 pointer-events-none"> 
             {/* Map Expand Button */}
             <div className="absolute top-4 right-4 p-2 bg-white rounded-lg shadow-sm z-10 pointer-events-auto cursor-pointer hover:bg-slate-50 transition-colors">
               <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
             </div>

             {/* Map legend */}
             <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-md z-10 flex flex-col gap-3 min-w-[150px] pointer-events-auto">
               <h4 className="font-semibold text-slate-800 text-sm m-0">Yield Indicator</h4>
               <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#277079]"></div>
                   <span className="text-sm text-slate-500">Standard</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#EB6601]"></div>
                   <span className="text-sm text-slate-500">High Yield</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Right Properties List */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-slate-800 m-0">100 Properties</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">Sort By:</span>
              <select className="border-none bg-slate-50 p-2 rounded-lg text-sm text-slate-700 font-medium outline-none shadow-sm cursor-pointer">
                <option>Highest Yield</option>
                <option>Lowest Yield</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <Link href={`/properties/${i}`} key={i} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-[300px] flex flex-col block cursor-pointer group">
                <div className="relative h-32 bg-blue-100 overflow-hidden">
                  {/* Base overlay for subtle hover effect on image */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10"></div>
                  <div className="absolute top-3 left-3 bg-[#EB6601] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-20">
                    9.1% Yield
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 text-[#277079] text-xs font-bold px-3 py-1 rounded-full shadow-sm z-20">
                    AAA
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/90 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm z-20">
                    <span className="w-3 h-3 rounded-full border border-current flex items-center justify-center">O</span>
                    Downtown Dubai
                  </div>
                </div>
                <div className="p-3 flex flex-col gap-2 flex-1 overflow-hidden">
                  <h4 className="font-bold text-slate-800 text-base m-0 truncate">Downtown Office SPV</h4>
                  
                  <div className="grid grid-cols-3 gap-1 border-b border-slate-100 pb-2">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] text-slate-500 uppercase">Target Funding</span>
                      <span className="font-semibold text-slate-800 text-xs">5 CR AED</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] text-slate-500 uppercase">Gross Yield</span>
                      <span className="font-semibold text-[#0AA43E] text-xs">9.1%</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] text-slate-500 uppercase">Investors</span>
                      <span className="font-semibold text-slate-800 text-xs">12/25</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500">
                    <span className="flex items-center gap-1"><span className="opacity-50">🏢</span> Commercial</span>
                    <span className="flex items-center gap-1"><span className="opacity-50">💰</span> 30L AED</span>
                    <span className="flex items-center gap-1"><span className="opacity-50">⏱</span> 21 Days</span>
                  </div>

                  <div className="flex flex-col gap-1 mt-auto">
                    <div className="flex items-center justify-between text-[10px] text-slate-500">
                      <span>65% Funded</span>
                      <span>12 of 25 Investors</span>
                    </div>
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#277079] w-[65%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filter Modal - Right Sidebar */}
        {showPropertyFilter && (
          <div className="fixed right-0 top-0 h-screen w-[30vw] bg-white shadow-lg border-l border-slate-200 z-50 flex flex-col overflow-hidden pointer-events-auto">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="font-bold text-lg text-slate-800 m-0">Filter</h3>
              <button onClick={() => setShowPropertyFilter(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-8">
              {/* Investment Range */}
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-slate-700 m-0">Investment Range</h4>
                <div className="w-full h-24 flex items-end gap-1 px-2">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className={`flex-1 rounded-t-sm ${i > 4 && i < 15 ? 'bg-[#EB6601]' : 'bg-slate-200'}`} style={{ height: `${Math.random() * 60 + 20}%`}}></div>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <span className="text-xs text-slate-500">Min. Amount</span>
                    <input type="text" value="2,000 AED" readOnly className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 font-medium text-center outline-none" />
                  </div>
                  <span className="text-slate-400 font-medium">-</span>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <span className="text-xs text-slate-500">Max. Amount</span>
                    <input type="text" value="10,000 AED" readOnly className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 font-medium text-center outline-none" />
                  </div>
                </div>
              </div>

              {/* Minimum Yield */}
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-slate-700 m-0">Minimum Yield</h4>
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 px-4 rounded-lg border border-[#EB6601] bg-[#fff2e8] text-[#EB6601] font-medium text-sm flex justify-between items-center">
                    6%+ Yield
                    <div className="w-4 h-4 rounded-full border-4 border-[#EB6601] bg-white"></div>
                  </button>
                  <button className="flex-1 py-2.5 px-4 rounded-lg border border-slate-200 bg-white text-slate-600 font-medium text-sm flex justify-between items-center hover:border-slate-300">
                    7%+ Yield
                    <div className="w-4 h-4 rounded-full border border-slate-300 bg-white"></div>
                  </button>
                  <button className="flex-1 py-2.5 px-4 rounded-lg border border-slate-200 bg-white text-slate-600 font-medium text-sm flex justify-between items-center hover:border-slate-300">
                    8%+ Yield
                    <div className="w-4 h-4 rounded-full border border-slate-300 bg-white"></div>
                  </button>
                </div>
              </div>

              {/* Property Type */}
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-slate-700 m-0">Property Type</h4>
                <div className="flex gap-3">
                  <button className="flex-1 py-4 flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white hover:border-[#EB6601] hover:text-[#EB6601] transition-colors group">
                    <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">🏠</span>
                    <span className="text-sm font-medium text-slate-600 group-hover:text-[#EB6601]">Residential</span>
                  </button>
                  <button className="flex-1 py-4 flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white hover:border-[#EB6601] hover:text-[#EB6601] transition-colors group">
                    <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">🏢</span>
                    <span className="text-sm font-medium text-slate-600 group-hover:text-[#EB6601]">Commercial</span>
                  </button>
                  <button className="flex-1 py-4 flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white hover:border-[#EB6601] hover:text-[#EB6601] transition-colors group">
                    <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">🏬</span>
                    <span className="text-sm font-medium text-slate-600 group-hover:text-[#EB6601]">Mixed Use</span>
                  </button>
                </div>
              </div>

               {/* Grades */}
               <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-slate-700 m-0">Grades</h4>
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 px-4 rounded-full border border-slate-200 bg-white text-slate-600 font-medium text-sm hover:border-[#EB6601] hover:text-[#EB6601] transition-colors">
                    Asset Grade
                  </button>
                  <button className="flex-1 py-2.5 px-4 rounded-full border border-slate-200 bg-white text-slate-600 font-medium text-sm hover:border-[#EB6601] hover:text-[#EB6601] transition-colors">
                    Grade A
                  </button>
                  <button className="flex-1 py-2.5 px-4 rounded-full border border-slate-200 bg-white text-slate-600 font-medium text-sm hover:border-[#EB6601] hover:text-[#EB6601] transition-colors">
                    Institutional AAA
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-slate-700 m-0">Location</h4>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <input type="text" placeholder="Search locations..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-[#EB6601] transition-colors" />
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  {['Dubai Marina', 'Jumeirah Village Circle', 'Downtown Dubai', 'Lorem ipsum', 'Lorem ipsum'].map((loc, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${i === 0 ? 'bg-[#EB6601] border-[#EB6601]' : 'border-slate-300 bg-white group-hover:border-[#EB6601]'}`}>
                        {i === 0 && <span className="text-white text-xs">?</span>}
                      </div>
                      <span className="text-sm text-slate-600">{loc}</span>
                    </label>
                  ))}
                  <button 
                    onClick={() => setShowLocationSelect(true)}
                    className="text-left text-[#EB6601] font-medium text-sm mt-1 hover:underline w-fit"
                  >
                    View 200 location more...
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex items-center justify-between bg-white">
                <button 
                  onClick={() => setShowPropertyFilter(false)}
                  className="px-6 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                >
                Reset Filter
              </button>
              <button className="px-8 py-2.5 bg-[#EB6601] text-white font-medium rounded-lg hover:bg-[#d85e01] transition-colors shadow-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Apply Filter
              </button>
            </div>
          </div>
        )}

        {/* Location Select Popover */}
        {showLocationSelect && (
          <div className="fixed right-[460px] top-1/2 -translate-y-1/2 w-[600px] bg-white rounded-2xl shadow-xl border border-slate-200 z-[70] p-6 flex flex-col max-h-[600px]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-slate-800 m-0">Locations</h3>
              <button onClick={() => setShowLocationSelect(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 overflow-y-auto pr-2 custom-scrollbar">
               {/* Column 1 */}
               <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">A</div>
                    {['Al Barari', 'Al Barsha', 'Al Furjan', 'Al Quoz', 'Al Safa', 'Al Sufouh', 'Al Wasl'].map(l => (
                      <label key={l} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                        <span className="text-sm text-slate-600 truncate">{l}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">B</div>
                    {['Barsha Heights', 'Bluewaters Island'].map(l => (
                      <label key={l} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                        <span className="text-sm text-slate-600 truncate">{l}</span>
                      </label>
                    ))}
                  </div>
               </div>

               {/* Column 2 */}
               <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="h-5"></div> {/* Spacer for alignment */}
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                      <span className="text-sm text-slate-600 truncate">Business Bay</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">C</div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                      <span className="text-sm text-slate-600 truncate">City Walk</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">D</div>
                    {['Deira', 'DIFC', 'Discovery Gardens', 'Downtown Dubai', 'Dubailand'].map(l => (
                      <label key={l} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                        <span className="text-sm text-slate-600 truncate">{l}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">E</div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                      <span className="text-sm text-slate-600 truncate">Emirates Hills</span>
                    </label>
                  </div>
               </div>

               {/* Column 3 */}
               <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">I</div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                      <span className="text-sm text-slate-600 truncate">International City</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">J</div>
                    {['Jebel Ali', 'Jumeirah'].map(l => (
                      <label key={l} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                        <span className="text-sm text-slate-600 truncate">{l}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">M</div>
                    {['Meydan', 'Mirdif', 'Motor City', 'MBR City'].map(l => (
                      <label key={l} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                        <span className="text-sm text-slate-600 truncate">{l}</span>
                      </label>
                    ))}
                  </div>
               </div>
               
               {/* Column 4 */}
               <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">P</div>
                     <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                      <span className="text-sm text-slate-600 truncate">Palm Jumeirah</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">R</div>
                     <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                      <span className="text-sm text-slate-600 truncate">Remraam</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">S</div>
                    {['Sports City', 'Studio City'].map(l => (
                      <label key={l} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                        <span className="text-sm text-slate-600 truncate">{l}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-sm text-slate-800">T</div>
                    {['The Hills', 'The Lakes', 'The Meadows'].map(l => (
                      <label key={l} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#EB6601] focus:ring-[#EB6601]" />
                        <span className="text-sm text-slate-600 truncate">{l}</span>
                      </label>
                    ))}
                  </div>
               </div>
            </div>

            <div className="mt-8">
              <div className="w-full h-1.5 bg-slate-100 rounded-full mb-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1/3 bg-slate-300 rounded-full"></div>
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowLocationSelect(false)}
                  className="px-8 py-2.5 bg-[#EB6601] text-white font-medium rounded-lg hover:bg-[#d85e01] transition-colors shadow-sm"
                >
                  Select Location
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
