'use client';

import React, { createContext, useContext, useState } from 'react';

interface FilterContextType {
  showPropertyFilter: boolean;
  setShowPropertyFilter: (value: boolean) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [showPropertyFilter, setShowPropertyFilter] = useState(false);

  return (
    <FilterContext.Provider value={{ showPropertyFilter, setShowPropertyFilter }}>
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
