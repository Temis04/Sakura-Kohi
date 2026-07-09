"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type CartLine = {
  lineId: string;
  itemId: string;
  name: string;
  jp: string;
  sizeLabel: string;
  milkLabel: string;
  extraLabels: string[];
  unitPrice: number;
  quantity: number;
};

type CartContextType = {
  lines: CartLine[];
  addLine: (line: Omit<CartLine, "lineId">) => void;
  removeLine: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  count: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const addLine = (line: Omit<CartLine, "lineId">) => {
    const lineId = `${line.itemId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setLines((prev) => [...prev, { ...line, lineId }]);
    setDrawerOpen(true);
  };

  const removeLine = (lineId: string) =>
    setLines((prev) => prev.filter((l) => l.lineId !== lineId));

  const updateQuantity = (lineId: string, quantity: number) =>
    setLines((prev) =>
      prev.map((l) => (l.lineId === lineId ? { ...l, quantity: Math.max(1, quantity) } : l))
    );

  const clearCart = () => setLines([]);

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.unitPrice * l.quantity, 0),
    [lines]
  );
  const count = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines]);

  return (
    <CartContext.Provider
      value={{
        lines,
        addLine,
        removeLine,
        updateQuantity,
        clearCart,
        subtotal,
        count,
        isDrawerOpen,
        openDrawer: () => setDrawerOpen(true),
        closeDrawer: () => setDrawerOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
