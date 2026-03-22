'use client';

import React, { createContext, useContext, useState } from 'react';

interface FilterState {
  minAmount: number;
  maxAmount: number;
  minYield: string;
  propertyTypes: string[];
  grades: string[];
  locations: string[];
}

interface FilterContextType {
  showPropertyFilter: boolean;
  setShowPropertyFilter: (value: boolean) => void;
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  resetFilters: () => void;
  applyFilters: () => void;
}

const defaultFilters: FilterState = {
  minAmount: 2000,
  maxAmount: 10000,
  minYield: '6%',
  propertyTypes: [],
  grades: [],
  locations: [],
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [showPropertyFilter, setShowPropertyFilter] = useState(false);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const applyFilters = () => {
    console.log('Filters applied:', filters);
    // Filter logic would go here
  };

  return (
    <FilterContext.Provider 
      value={{ 
        showPropertyFilter, 
        setShowPropertyFilter,
        filters,
        setFilters,
        resetFilters,
        applyFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );  
}

export function usePropertyFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('usePropertyFilter must be used within FilterProvider');
  }
  return context;
}
