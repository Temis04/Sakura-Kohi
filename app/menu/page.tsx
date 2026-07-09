"use client";

import { useState } from "react";
import { menu, categories, Category } from "@/lib/menu-data";
import ProductCard from "@/components/ProductCard";

export default function MenuPage() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = active === "All" ? menu : menu.filter((m) => m.category === active);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="flex items-center gap-2 font-body text-xs tracking-widest2 uppercase text-gold mb-3">
        <span className="inline-block w-1 h-1 rounded-full bg-blush" aria-hidden="true" />
        メニュー
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-bone mb-4">The Menu</h1>
      <p className="font-body text-sm text-mist max-w-lg leading-relaxed mb-12">
        Every espresso drink can be customised: size, milk, and a few seasonal extras.
        Pour overs and pastries are served as the counter intends.
      </p>

      <div className="flex flex-wrap gap-3 mb-12">
        {(["All", ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`focus-ring rounded-full border px-4 py-1.5 text-sm font-body transition-colors duration-200
              ${
                active === c
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-bone/12 text-mist hover:border-blush hover:text-bone"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
