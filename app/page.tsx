import Link from "next/link";
import PetalField from "@/components/PetalField";
import SeamDivider from "@/components/SeamDivider";
import { WordmarkFull } from "@/components/Logo";
import { menu } from "@/lib/menu-data";

export default function Home() {
  const featured = menu.filter((m) => m.tags?.includes("Signature"));

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden border-b border-bone/5">
        <PetalField count={12} />
        <div className="mx-auto max-w-6xl px-6 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">
          <div className="animate-rise">
            <p className="flex items-center gap-2 font-body text-xs tracking-widest2 uppercase text-gold mb-6">
              <span className="inline-block w-1 h-1 rounded-full bg-blush" aria-hidden="true" />
              Shoreditch, London
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-bone">
              Coffee, poured
              <br />
              like it matters.
            </h1>
            <p className="font-body text-base text-mist mt-7 max-w-md leading-relaxed">
              A quiet counter for single-origin espresso and seasonal sakura drinks.
              No rush, no noise. Just a good cup and a place to sit with it.
            </p>
            <div className="flex items-center gap-5 mt-10">
              <Link
                href="/menu"
                className="focus-ring rounded-md border-2 border-sakura/60 text-bone font-body font-semibold text-sm tracking-wide px-7 py-3.5 hover:bg-blush/25 hover:border-sakura hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                View the menu
              </Link>
              <Link
                href="/locations"
                className="focus-ring font-body text-sm text-bone border-b border-bone/30 pb-1 hover:border-sakura transition-colors duration-200"
              >
                Find the counter
              </Link>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <WordmarkFull size="md" />
          </div>
        </div>
      </section>

      {/* Philosophy strip */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SeamDivider className="mb-16" />
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-3xl text-gold mb-3">一</p>
            <h3 className="font-display text-xl text-bone mb-2">One origin at a time</h3>
            <p className="font-body text-sm text-mist leading-relaxed">
              We carry a short, rotating list of single-origin beans and brew each one
              on the equipment it actually suits.
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-gold mb-3">静</p>
            <h3 className="font-display text-xl text-bone mb-2">A quiet room</h3>
            <p className="font-body text-sm text-mist leading-relaxed">
              No music louder than conversation. Low light, long counters, and enough
              space to actually sit down.
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-gold mb-3">季</p>
            <h3 className="font-display text-xl text-bone mb-2">Built around the season</h3>
            <p className="font-body text-sm text-mist leading-relaxed">
              Sakura in spring, hojicha in autumn. The menu moves with what's actually
              good right now.
            </p>
          </div>
        </div>
      </section>

      {/* Featured drinks */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="flex items-center gap-2 font-body text-xs tracking-widest2 uppercase text-gold mb-3">
              <span className="inline-block w-1 h-1 rounded-full bg-blush" aria-hidden="true" />
              This season
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-bone">Signature pours</h2>
          </div>
          <Link
            href="/menu"
            className="focus-ring hidden md:block font-body text-sm text-bone border-b border-bone/30 pb-1 hover:border-sakura transition-colors"
          >
            Full menu →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-bone/8 bg-surface/40 p-6 hover:border-blush/50 transition-colors duration-300"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg text-bone">{item.name}</h3>
                <span className="font-mono text-sm text-gold shrink-0">
                  £{item.basePrice.toFixed(2)}
                </span>
              </div>
              <p className="font-body text-xs text-mist/70 mt-0.5">{item.jp}</p>
              <p className="font-body text-sm text-mist mt-3 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
