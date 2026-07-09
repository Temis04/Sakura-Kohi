"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const { count, openDrawer } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ink/85 backdrop-blur-md border-b border-bone/5">
      <nav className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <Logo />

        <ul className="hidden md:flex items-center gap-11">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`focus-ring group relative font-body text-sm tracking-wide pb-1 ${
                  pathname === l.href ? "text-bone" : "text-mist/80 hover:text-bone transition-colors duration-200"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px w-full origin-left transition-transform duration-300 ${
                    pathname === l.href ? "bg-gold scale-x-100" : "bg-sakura scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={openDrawer}
            aria-label={`Open cart, ${count} items`}
            className="focus-ring relative flex items-center gap-2 rounded-full border border-bone/15 px-4 py-2 text-sm text-bone hover:border-gold transition-colors duration-200"
          >
            <span className="font-body">Cart</span>
            {count > 0 && (
              <span className="flex items-center justify-center min-w-[18px] h-[18px] rounded-full bg-gold text-ink text-[10px] font-mono px-1">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="focus-ring md:hidden flex flex-col gap-1.5 w-6"
          >
            <span className={`h-px bg-bone transition-transform ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px bg-bone transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-px bg-bone transition-transform ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-bone/5 bg-ink px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="focus-ring font-body text-base text-bone"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
