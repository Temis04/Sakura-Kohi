"use client";

import { useMemo } from "react";

function Petal({ style }: { style: React.CSSProperties }) {
  return (
    <svg className="petal" style={style} width="14" height="14" viewBox="0 0 14 14">
      <path
        d="M7 0 C 9 3, 14 4, 12 7 C 14 10, 9 11, 7 14 C 5 11, 0 10, 2 7 C 0 4, 5 3, 7 0 Z"
        fill="#C65C77"
      />
    </svg>
  );
}

/**
 * A restrained, ambient drift of petals — a single quiet gesture rather
 * than a decorative flourish. Kept sparse and slow; disabled via
 * prefers-reduced-motion globally.
 */
export default function PetalField({ count = 10 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: `${(i * 97) % 100}%`,
        duration: 14 + ((i * 7) % 10),
        delay: (i * 1.3) % 12,
        scale: 0.6 + ((i * 3) % 5) / 10,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {petals.map((p, i) => (
        <Petal
          key={i}
          style={{
            left: p.left,
            animation: `drift ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            transform: `scale(${p.scale})`,
          }}
        />
      ))}
    </div>
  );
}
