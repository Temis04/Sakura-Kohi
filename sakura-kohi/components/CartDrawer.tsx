"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { lines, isDrawerOpen, closeDrawer, removeLine, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        aria-label="Close cart"
        onClick={closeDrawer}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Your cart"
        className="relative h-full w-full max-w-md bg-surface border-l border-gold/20 shadow-2xl flex flex-col"
        style={{ animation: "cartSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards" }}
      >
        <style>{`
          @keyframes cartSlideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        `}</style>

        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-bone/10">
          <h2 className="font-display text-2xl text-bone">Your Cart</h2>
          <button
            onClick={closeDrawer}
            aria-label="Close"
            className="focus-ring text-mist hover:text-bone transition-colors text-xl leading-none"
          >
            ×
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="font-body text-mist text-sm">
              Your cart is empty. Add something warm from the menu.
            </p>
            <Link
              href="/menu"
              onClick={closeDrawer}
              className="focus-ring mt-5 text-sm text-gold border border-gold/40 rounded-md px-5 py-2 hover:bg-gold/10 transition-colors"
            >
              Browse the menu
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {lines.map((l) => (
                <div key={l.lineId} className="border-b border-bone/8 pb-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-base text-bone">{l.name}</h3>
                      <p className="font-body text-xs text-mist mt-1">
                        {l.sizeLabel} · {l.milkLabel}
                        {l.extraLabels.length > 0 && <> · {l.extraLabels.join(", ")}</>}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-bone tabular-nums shrink-0">
                      £{(l.unitPrice * l.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(l.lineId, l.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="focus-ring w-7 h-7 rounded-full border border-bone/15 text-bone text-sm hover:border-blush transition-colors"
                      >
                        −
                      </button>
                      <span className="font-mono text-sm text-bone w-4 text-center">{l.quantity}</span>
                      <button
                        onClick={() => updateQuantity(l.lineId, l.quantity + 1)}
                        aria-label="Increase quantity"
                        className="focus-ring w-7 h-7 rounded-full border border-bone/15 text-bone text-sm hover:border-blush transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeLine(l.lineId)}
                      className="focus-ring font-body text-xs text-mist hover:text-sakura transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-bone/10 px-6 py-5 bg-raised/60">
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-sm text-mist">Subtotal</span>
                <span className="font-mono text-xl text-bone tabular-nums">£{subtotal.toFixed(2)}</span>
              </div>
              <Link
                href="/cart"
                onClick={closeDrawer}
                className="focus-ring block w-full text-center rounded-md bg-gold text-ink font-body font-semibold text-sm tracking-wide py-3 hover:bg-gold-bright hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Review order
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
