"use client";

import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface FilterContextValue {
  selectedType: string[];
  setSelectedType: (types: string[]) => void;
  selectedColor: string[];
  setSelectedColor: (colors: string[]) => void;
}

const FilterContext = createContext<FilterContextValue>({
  selectedType: [],
  setSelectedType: () => {},
  selectedColor: [],
  setSelectedColor: () => {},
});

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);

  const valueContext = {
    selectedType,
    setSelectedType,
    selectedColor,
    setSelectedColor,
  };

  return (
    <FilterContext.Provider value={valueContext}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined)
    throw new Error("FilterContext was used outside of the QuizProvider");
  return context;
};

export { FilterProvider, useFilter };
