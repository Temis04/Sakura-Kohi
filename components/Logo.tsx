import Link from "next/link";

/**
 * Compact wordmark for the nav and footer — matches the brand reference:
 * a clean serif "Sakura Kohi", no icon mark.
 */
export default function Logo() {
  return (
    <Link href="/" className="flex items-center group focus-ring rounded-sm">
      <span className="font-display text-xl tracking-wide text-bone group-hover:text-sakura-deep transition-colors duration-300">
        Sakura Kohi
      </span>
    </Link>
  );
}

/**
 * Full lockup for the hero: "since ✦ year" above the large serif wordmark,
 * matching the reference brand image exactly.
 */
export function WordmarkFull({ size = "lg" }: { size?: "lg" | "md" }) {
  const wordmarkSize = size === "lg" ? "text-6xl md:text-7xl" : "text-4xl md:text-5xl";
  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex items-center gap-3 font-display text-sm text-mist tracking-[0.3em] uppercase mb-3">
        since
        <span className="text-sakura text-lg" aria-hidden="true">✦</span>
        2026
      </span>
      <span className={`font-display ${wordmarkSize} leading-none text-bone`}>Sakura Kohi</span>
    </div>
  );
}
