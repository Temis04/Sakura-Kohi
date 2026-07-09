"use client";

import { MenuItem } from "@/lib/menu-data";
import { useCustomize } from "@/lib/customize-context";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ item }: { item: MenuItem }) {
  const { open } = useCustomize();
  const { addLine } = useCart();

  const handleClick = () => {
    if (item.customizable) {
      open(item);
    } else {
      addLine({
        itemId: item.id,
        name: item.name,
        jp: item.jp,
        sizeLabel: "Standard",
        milkLabel: "—",
        extraLabels: [],
        unitPrice: item.basePrice,
        quantity: 1,
      });
    }
  };

  return (
    <div className="group border border-bone/8 rounded-lg p-6 flex flex-col justify-between bg-surface/40 hover:bg-surface transition-colors duration-300 hover:border-blush/50">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-bone leading-snug">{item.name}</h3>
          <span className="font-mono text-sm text-gold shrink-0 tabular-nums">
            £{item.basePrice.toFixed(2)}
          </span>
        </div>
        {item.jp && <p className="font-body text-xs text-mist/70 mt-0.5">{item.jp}</p>}
        <p className="font-body text-sm text-mist mt-3 leading-relaxed">{item.description}</p>
        {item.tags && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {item.tags.map((t) => (
              <span
                key={t}
                className="font-body text-[10px] tracking-wide uppercase text-sakura border border-sakura/30 rounded-full px-2.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={handleClick}
        className="focus-ring mt-6 w-full rounded-md border border-bone/15 py-2.5 text-sm font-body text-bone group-hover:border-sakura group-hover:text-sakura transition-colors duration-300"
      >
        {item.customizable ? "Customise & add" : "Add to cart"}
      </button>
    </div>
  );
}
