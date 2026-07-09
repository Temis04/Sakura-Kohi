"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { MenuItem } from "./menu-data";

type CustomizeContextType = {
  activeItem: MenuItem | null;
  open: (item: MenuItem) => void;
  close: () => void;
};

const CustomizeContext = createContext<CustomizeContextType | null>(null);

export function CustomizeProvider({ children }: { children: ReactNode }) {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  return (
    <CustomizeContext.Provider
      value={{
        activeItem,
        open: (item) => setActiveItem(item),
        close: () => setActiveItem(null),
      }}
    >
      {children}
    </CustomizeContext.Provider>
  );
}

export function useCustomize() {
  const ctx = useContext(CustomizeContext);
  if (!ctx) throw new Error("useCustomize must be used within CustomizeProvider");
  return ctx;
}
