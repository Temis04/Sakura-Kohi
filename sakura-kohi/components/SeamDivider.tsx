"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The kintsugi seam: a cracked gold line that "repairs" the space between
 * sections, echoing the Japanese art of mending pottery with gold.
 * Draws itself in when scrolled into view.
 */
export default function SeamDivider({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`w-full flex justify-center py-2 ${className}`} aria-hidden="true">
      <svg
        ref={ref}
        width="220"
        height="16"
        viewBox="0 0 220 16"
        className={`seam-line ${visible ? "in-view" : ""}`}
      >
        <path d="M2 8 C 40 2, 60 14, 90 7 C 120 1, 140 13, 168 6 C 188 2, 200 10, 218 8" />
      </svg>
    </div>
  );
}
