'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

import dynamic from 'next/dynamic';
import { usePropertyFilter } from '../../context/FilterContext';

const PropertiesMap = dynamic(() => import('./components/PropertiesMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#f0f9f4] animate-pulse flex items-center justify-center text-slate-400">Loading map...</div>
});

export default function PropertiesPage() {
  const { showPropertyFilter, setShowPropertyFilter, filters, setFilters, resetFilters, applyFilters } = usePropertyFilter();
  const [showLocationSelect, setShowLocationSelect] = useState(false);
  const [locationSearchQuery, setLocationSearchQuery] = useState('');

  // Comprehensive locations list organized by region
  const allLocations = [
    'Dubai Marina', 'JVC', 'Downtown Dubai', 'Business Bay', 'DIFC', 'Jumeirah Village Circle',
    'Al Barari', 'Al Barsha', 'Al Furjan', 'Al Quoz', 'Al Safa', 'Al Sufouh', 'Al Wasl',
    'Barsha Heights', 'Bluewaters Island', 'City Walk', 'Deira', 'Discovery Gardens',
    'Dubailand', 'Emirates Hills', 'International City', 'Jebel Ali', 'Jumeirah',
    'Meydan', 'Mirdif', 'Motor City', 'MBR City', 'Palm Jumeirah', 'The Greens',
    'Arabian Ranches', 'Dubai Investment Park', 'Ras Al Khor', 'Sheikh Zayed Road',
    'Sports City', 'Tecom', 'Umm Suqeim', 'Wasl', 'World Trade Centre', 'Zabeel'
  ].sort();

  // Filter locations based on search query
  const filteredLocations = useMemo(() => {
    if (!locationSearchQuery.trim()) {
      return allLocations;
    }
    const query = locationSearchQuery.toLowerCase();
    return allLocations.filter(loc => loc.toLowerCase().includes(query));
  }, [locationSearchQuery]);

  // Highlight matching text in location name
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? <span key={i} className="font-semibold text-[#EB6601]">{part}</span> : part
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full font-sans py-4">
      {/* Header Banner */}
      

      <div className={`flex gap-6 mt-2 relative transition-all ${showPropertyFilter ? 'pr-[30vw]' : ''}`}>
        {/* Left Map Area */}
        <div className="flex-1 relative bg-white rounded-xl overflow-hidden h-[710px] shadow-sm border border-slate-200 p-3">
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100">
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
                   <div className="w-3 h-3 rounded-full bg-[#EB6601]"></div>
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
              <Link href={`/properties/${i}`} key={i} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all h-[300px] flex flex-col block cursor-pointer group bg-white p-3">
                <div className="relative h-[122px] bg-blue-100 overflow-hidden shrink-0 rounded-xl">
                  <img src="/bul1.png" alt="Property image" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {/* Base overlay for subtle hover effect on image */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10"></div>
                  <div className="absolute top-2.5 left-2.5 bg-[#EB6601] text-white text-[13px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm z-20">
                    9.1% Yield
                  </div>
                  <div className="absolute top-2.5 right-2.5 bg-white text-[#277079] text-[13px] font-bold px-3 py-0.5 rounded-full shadow-sm z-20">
                    AAA
                  </div>
                  <div className="absolute bottom-2 left-2.5 bg-white/95 text-[#277079] text-[13px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm z-20">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Downtown Dubai
                  </div>
                </div>
                <div className="pt-3.5 flex flex-col gap-3 flex-1 overflow-hidden">
                  <h4 className="font-semibold text-[#1f2937] text-[17px] leading-tight m-0 truncate">Downtown Office SPV</h4>
                  
                  <div className="grid grid-cols-3 gap-1">
                    <div className="flex flex-col gap-1">
                      <span className="text-[13px] text-slate-500 font-medium leading-none">Target Funding</span>
                      <span className="font-semibold text-[#1f2937] text-[15px] leading-none">5 CR AED</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[13px] text-slate-500 font-medium leading-none">Gross Yield</span>
                      <span className="font-bold text-[#16a34a] text-[15px] leading-none">9.1%</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[13px] text-slate-500 font-medium leading-none">Investors</span>
                      <span className="font-semibold text-[#1f2937] text-[15px] leading-none">12/25</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[13px] font-medium text-[#1f2937] bg-[#f8fafc] px-3 py-2 rounded-lg -mx-0.5">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      Commercial
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                      30L AED
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      21 Days
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="flex items-center justify-between text-[14px] font-medium text-slate-500">
                      <span>65% Funded</span>
                      <span>12 of 25 Investors</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
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
                    <input 
                      type="number" 
                      value={filters.minAmount} 
                      onChange={(e) => setFilters({ ...filters, minAmount: parseInt(e.target.value) || 0 })}
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 font-medium text-center outline-none focus:border-[#EB6601] transition-colors" 
                    />
                  </div>
                  <span className="text-slate-400 font-medium">-</span>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <span className="text-xs text-slate-500">Max. Amount</span>
                    <input 
                      type="number" 
                      value={filters.maxAmount} 
                      onChange={(e) => setFilters({ ...filters, maxAmount: parseInt(e.target.value) || 0 })}
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 font-medium text-center outline-none focus:border-[#EB6601] transition-colors" 
                    />
                  </div>
                </div>
              </div>

              {/* Minimum Yield */}
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-slate-700 m-0">Minimum Yield</h4>
                <div className="flex gap-3">
                  {['6%', '7%', '8%'].map((yield_option) => (
                    <button
                      key={yield_option}
                      onClick={() => setFilters({ ...filters, minYield: yield_option })}
                      className={`flex-1 py-2.5 px-4 rounded-lg border font-medium text-sm flex justify-between items-center transition-colors ${
                        filters.minYield === yield_option
                          ? 'border-[#EB6601] bg-[#fff2e8] text-[#EB6601]'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {yield_option}+ Yield
                      <div className={`w-4 h-4 rounded-full border-4 flex items-center justify-center ${
                        filters.minYield === yield_option
                          ? 'border-[#EB6601] bg-white'
                          : 'border-slate-300 bg-white'
                      }`}></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-slate-700 m-0">Property Type</h4>
                <div className="flex gap-3">
                  {['Residential', 'Commercial', 'Mixed Use'].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        const updated = filters.propertyTypes.includes(type)
                          ? filters.propertyTypes.filter(t => t !== type)
                          : [...filters.propertyTypes, type];
                        setFilters({ ...filters, propertyTypes: updated });
                      }}
                      className={`flex-1 py-4 flex flex-col items-center gap-2 rounded-xl border transition-colors group ${
                        filters.propertyTypes.includes(type)
                          ? 'border-[#EB6601] bg-[#fff2e8]'
                          : 'border-slate-200 bg-white hover:border-[#EB6601]'
                      }`}
                    >
                      <span className={`text-2xl transition-opacity ${
                        filters.propertyTypes.includes(type) ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'
                      }`}>
                        {type === 'Residential' ? '🏠' : type === 'Commercial' ? '🏢' : '🏬'}
                      </span>
                      <span className={`text-sm font-medium transition-colors ${
                        filters.propertyTypes.includes(type) ? 'text-[#EB6601]' : 'text-slate-600 group-hover:text-[#EB6601]'
                      }`}>{type}</span>
                    </button>
                  ))}
                </div>
              </div>

               {/* Grades */}
               <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-slate-700 m-0">Grades</h4>
                <div className="flex gap-3">
                  {['Asset Grade', 'Grade A', 'Institutional AAA'].map((grade) => (
                    <button
                      key={grade}
                      onClick={() => {
                        const updated = filters.grades.includes(grade)
                          ? filters.grades.filter(g => g !== grade)
                          : [...filters.grades, grade];
                        setFilters({ ...filters, grades: updated });
                      }}
                      className={`flex-1 py-2.5 px-4 rounded-full border font-medium text-sm transition-colors ${
                        filters.grades.includes(grade)
                          ? 'border-[#EB6601] bg-[#fff2e8] text-[#EB6601]'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-[#EB6601] hover:text-[#EB6601]'
                      }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-4">
                <h4 className="font-medium text-sm text-slate-700 m-0">Location</h4>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <input 
                    type="text" 
                    placeholder="Search 40+ locations..." 
                    value={locationSearchQuery}
                    onChange={(e) => setLocationSearchQuery(e.target.value)}
                    onClick={() => setShowLocationSelect(true)}
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-[#EB6601] transition-colors cursor-pointer hover:border-slate-300" 
                  />
                  {locationSearchQuery && (
                    <button
                      onClick={() => setLocationSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  )}
                </div>
                
                {/* Selected Locations Display */}
                {filters.locations.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {filters.locations.map(loc => (
                      <button
                        key={loc}
                        onClick={() => {
                          const updated = filters.locations.filter(l => l !== loc);
                          setFilters({ ...filters, locations: updated });
                        }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-[#fff2e8] border border-[#EB6601] text-[#EB6601] text-xs font-medium rounded-full hover:bg-[#ffe8cc] transition-colors group"
                      >
                        {loc}
                        <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    ))}
                  </div>
                )}

                {/* Quick Access Locations */}
                {!locationSearchQuery && filters.locations.length === 0 && (
                  <div className="flex flex-col gap-2 text-xs text-slate-500">
                    <span className="font-medium">Quick access:</span>
                    <div className="flex flex-wrap gap-2">
                      {['Dubai Marina', 'Downtown Dubai', 'Business Bay'].map(loc => (
                        <button
                          key={loc}
                          onClick={() => {
                            const updated = [...filters.locations, loc];
                            setFilters({ ...filters, locations: updated });
                          }}
                          className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium rounded-lg hover:border-[#EB6601] hover:text-[#EB6601] hover:bg-[#fff2e8] transition-colors"
                        >
                          + {loc}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex items-center justify-between bg-white">
                <button 
                  onClick={() => resetFilters()}
                  className="px-6 py-2.5 border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                >
                Reset Filter
              </button>
              <button 
                onClick={() => {
                  applyFilters();
                  setShowPropertyFilter(false);
                }}
                className="px-8 py-2.5 bg-[#EB6601] text-white font-medium rounded-lg hover:bg-[#d85e01] transition-colors shadow-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Apply Filter
              </button>
            </div>
          </div>
        )}

        {/* Location Select Popover - Dynamic Search */}
        {showLocationSelect && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setShowLocationSelect(false)}
            />
            
            {/* Modal */}
            <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl border border-slate-200 z-[70] flex flex-col max-h-[80vh] overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-white to-slate-50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-800 m-0">Select Locations</h3>
                  <button 
                    onClick={() => {
                      setShowLocationSelect(false);
                      setLocationSearchQuery('');
                    }} 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                {/* Search Input - Larger for modal */}
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  <input 
                    type="text" 
                    placeholder="Search locations..." 
                    autoFocus
                    value={locationSearchQuery}
                    onChange={(e) => setLocationSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 border border-slate-300 rounded-xl text-base text-slate-700 outline-none focus:border-[#EB6601] focus:ring-2 focus:ring-[#EB6601]/20 transition-all"
                  />
                  {locationSearchQuery && (
                    <button
                      onClick={() => setLocationSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  )}
                </div>

                {/* Result Count */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-medium text-slate-500">
                    {filteredLocations.length} location{filteredLocations.length !== 1 ? 's' : ''} found
                  </span>
                  {filters.locations.length > 0 && (
                    <span className="text-xs font-medium text-[#EB6601] bg-[#fff2e8] px-2.5 py-1 rounded-full">
                      {filters.locations.length} selected
                    </span>
                  )}
                </div>
              </div>

              {/* Results Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {filteredLocations.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {filteredLocations.map((location) => {
                      const isSelected = filters.locations.includes(location);
                      return (
                        <button
                          key={location}
                          onClick={() => {
                            const updated = isSelected
                              ? filters.locations.filter(l => l !== location)
                              : [...filters.locations, location];
                            setFilters({ ...filters, locations: updated });
                          }}
                          className={`p-4 rounded-xl border-2 text-left transition-all group ${
                            isSelected
                              ? 'border-[#EB6601] bg-[#fff2e8]'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                              isSelected
                                ? 'border-[#EB6601] bg-[#EB6601]'
                                : 'border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {isSelected && (
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-medium truncate ${
                                isSelected ? 'text-[#EB6601]' : 'text-slate-800'
                              }`}>
                                {highlightMatch(location, locationSearchQuery)}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">Click to {isSelected ? 'remove' : 'add'}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 gap-3">
                    <svg className="w-12 h-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <p className="text-slate-600 font-medium">No locations found</p>
                    <p className="text-xs text-slate-500">Try a different search term</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {filters.locations.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-3">
                  <button
                    onClick={() => setFilters({ ...filters, locations: [] })}
                    className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowLocationSelect(false)}
                    className="flex-1 px-4 py-2.5 bg-[#EB6601] text-white font-medium rounded-lg hover:bg-[#d85e01] transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Done ({filters.locations.length})
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
