"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { lines, removeLine, updateQuantity, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handlePlaceOrder = () => {
    setPlaced(true);
    clearCart();
  };

  if (placed) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-28 text-center">
        <p className="font-display text-4xl text-gold mb-4">畏</p>
        <h1 className="font-display text-3xl md:text-4xl text-bone mb-4">Order placed.</h1>
        <p className="font-body text-sm text-mist leading-relaxed mb-8">
          This is a demo checkout for a front-end assessment — no payment was taken
          and no order was actually sent anywhere. Thank you for looking around.
        </p>
        <Link
          href="/menu"
          className="focus-ring inline-block rounded-md border border-gold/40 text-gold px-6 py-3 text-sm hover:bg-gold/10 transition-colors"
        >
          Back to the menu
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-body text-xs tracking-widest2 uppercase text-gold mb-3">Your order</p>
      <h1 className="font-display text-4xl md:text-5xl text-bone mb-12">Review &amp; checkout</h1>

      {lines.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-body text-mist text-sm mb-6">Your cart is empty.</p>
          <Link
            href="/menu"
            className="focus-ring inline-block rounded-md border border-gold/40 text-gold px-6 py-3 text-sm hover:bg-gold/10 transition-colors"
          >
            Browse the menu
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-14">
          <div className="space-y-6">
            {lines.map((l) => (
              <div key={l.lineId} className="border border-bone/8 rounded-lg p-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg text-bone">{l.name}</h3>
                  <p className="font-body text-xs text-mist/70">{l.jp}</p>
                  <p className="font-body text-xs text-mist mt-2">
                    {l.sizeLabel} · {l.milkLabel}
                    {l.extraLabels.length > 0 && <> · {l.extraLabels.join(", ")}</>}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
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
                </div>
                <div className="flex flex-col items-end justify-between h-full">
                  <span className="font-mono text-sm text-bone tabular-nums">
                    £{(l.unitPrice * l.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeLine(l.lineId)}
                    className="focus-ring font-body text-xs text-mist hover:text-sakura transition-colors mt-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="h-fit border border-bone/10 rounded-lg p-6 bg-surface/40 sticky top-28">
            <h2 className="font-display text-xl text-bone mb-5">Summary</h2>
            <div className="space-y-3 font-body text-sm">
              <div className="flex justify-between text-mist">
                <span>Subtotal</span>
                <span className="font-mono text-bone">£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-mist">
                <span>Tax (8%)</span>
                <span className="font-mono text-bone">£{tax.toFixed(2)}</span>
              </div>
              <div className="h-px bg-bone/10 my-2" />
              <div className="flex justify-between text-base">
                <span className="text-bone">Total</span>
                <span className="font-mono text-gold">£{total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="focus-ring w-full mt-6 rounded-md bg-gold text-ink font-body font-semibold text-sm tracking-wide py-3.5 hover:bg-gold-bright hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Place order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
