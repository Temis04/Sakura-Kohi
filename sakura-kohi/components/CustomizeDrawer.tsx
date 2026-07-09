"use client";

import { useEffect, useState } from "react";
import { useCustomize } from "@/lib/customize-context";
import { useCart } from "@/lib/cart-context";
import { sizes, milks, extras } from "@/lib/menu-data";

function OptionPill({
  label,
  selected,
  onClick,
  suffix,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  suffix?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`focus-ring flex items-center justify-between gap-2 w-full rounded-md border px-4 py-2.5 text-sm transition-all duration-200
        ${
          selected
            ? "border-gold bg-gold/10 text-bone"
            : "border-bone/10 text-mist hover:border-blush hover:text-bone"
        }`}
      aria-pressed={selected}
    >
      <span>{label}</span>
      {suffix && <span className="font-mono text-xs opacity-70">{suffix}</span>}
    </button>
  );
}

export default function CustomizeDrawer() {
  const { activeItem, close } = useCustomize();
  const { addLine } = useCart();

  const [sizeId, setSizeId] = useState(sizes[0].id);
  const [milkId, setMilkId] = useState(milks[0].id);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (activeItem) {
      setSizeId(sizes[0].id);
      setMilkId(milks[0].id);
      setSelectedExtras([]);
      setQuantity(1);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  if (!activeItem) return null;

  const size = sizes.find((s) => s.id === sizeId)!;
  const milk = milks.find((m) => m.id === milkId)!;
  const extraObjs = extras.filter((e) => selectedExtras.includes(e.id));
  const unitPrice =
    activeItem.basePrice + size.priceDelta + milk.priceDelta + extraObjs.reduce((s, e) => s + e.price, 0);
  const total = unitPrice * quantity;

  const toggleExtra = (id: string) =>
    setSelectedExtras((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]));

  const handleAdd = () => {
    addLine({
      itemId: activeItem.id,
      name: activeItem.name,
      jp: activeItem.jp,
      sizeLabel: size.label,
      milkLabel: milk.label,
      extraLabels: extraObjs.map((e) => e.label),
      unitPrice,
      quantity,
    });
    close();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* backdrop */}
      <button
        aria-label="Close customisation panel"
        onClick={close}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-rise"
        style={{ animationDuration: "0.4s" }}
      />

      {/* panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Customise ${activeItem.name}`}
        className="relative h-full w-full max-w-md bg-surface border-l border-gold/20 shadow-2xl flex flex-col"
        style={{ animation: "slideIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards" }}
      >
        <style>{`
          @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        `}</style>

        {/* gold seam along the inner edge */}
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />

        <div className="flex items-start justify-between px-6 pt-6">
          <div>
            <p className="font-body text-[11px] tracking-widest2 text-gold uppercase">Customise</p>
            <h2 className="font-display text-2xl text-bone mt-1">{activeItem.name}</h2>
            <p className="font-body text-xs text-mist mt-0.5">{activeItem.jp}</p>
          </div>
          <button
            onClick={close}
            aria-label="Close"
            className="focus-ring text-mist hover:text-bone transition-colors text-xl leading-none mt-1"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-7">
          <section>
            <h3 className="font-body text-xs tracking-widest2 uppercase text-mist mb-3">Size</h3>
            <div className="grid grid-cols-1 gap-2">
              {sizes.map((s) => (
                <OptionPill
                  key={s.id}
                  label={s.label}
                  selected={sizeId === s.id}
                  onClick={() => setSizeId(s.id)}
                  suffix={s.priceDelta > 0 ? `+£${s.priceDelta.toFixed(2)}` : "included"}
                />
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-body text-xs tracking-widest2 uppercase text-mist mb-3">Milk</h3>
            <div className="grid grid-cols-1 gap-2">
              {milks.map((m) => (
                <OptionPill
                  key={m.id}
                  label={m.label}
                  selected={milkId === m.id}
                  onClick={() => setMilkId(m.id)}
                  suffix={m.priceDelta > 0 ? `+£${m.priceDelta.toFixed(2)}` : "included"}
                />
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-body text-xs tracking-widest2 uppercase text-mist mb-3">Extras</h3>
            <div className="grid grid-cols-1 gap-2">
              {extras.map((e) => (
                <OptionPill
                  key={e.id}
                  label={e.label}
                  selected={selectedExtras.includes(e.id)}
                  onClick={() => toggleExtra(e.id)}
                  suffix={`+£${e.price.toFixed(2)}`}
                />
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-body text-xs tracking-widest2 uppercase text-mist mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="focus-ring w-9 h-9 rounded-full border border-bone/15 text-bone hover:border-blush transition-colors"
              >
                −
              </button>
              <span className="font-mono text-bone w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="focus-ring w-9 h-9 rounded-full border border-bone/15 text-bone hover:border-blush transition-colors"
              >
                +
              </button>
            </div>
          </section>
        </div>

        <div className="border-t border-bone/10 px-6 py-5 bg-raised/60">
          <div className="flex items-center justify-between mb-4">
            <span className="font-body text-sm text-mist">Running total</span>
            <span className="font-mono text-xl text-bone tabular-nums">£{total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleAdd}
            className="focus-ring w-full rounded-md bg-gold text-ink font-body font-semibold text-sm tracking-wide py-3 hover:bg-gold-bright hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Add to cart — £{total.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}
