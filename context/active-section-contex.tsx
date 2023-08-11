"use client";
import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContexProviderProps = { children: React.ReactNode };
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

const ActiveSectionContex = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContexProvider({
  children,
}: ActiveSectionContexProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContex.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContex.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContex);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
