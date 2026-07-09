import Link from "next/link";
import Image from "next/image";
import SeamDivider from "@/components/SeamDivider";

const timeline = [
  { year: "2026", label: "Shoreditch counter opens", detail: "Six stools in a converted print shop on Redchurch Street." },
  { year: "2026", label: "The roastery, Manchester", detail: "A drum roaster installed in the Northern Quarter window." },
  { year: "2027", label: "Digbeth, Birmingham", detail: "Our smallest room yet — four seats and a standing counter." },
];

const values = [
  {
    glyph: "一",
    title: "One origin at a time",
    body: "We carry a short, rotating list of single-origin beans and brew each one on the equipment it actually suits — no house blend hiding behind a dozen names.",
  },
  {
    glyph: "静",
    title: "A quiet room",
    body: "No music louder than conversation, low light, and long communal tables. Nobody gets rushed off a seat because there's a queue.",
  },
  {
    glyph: "季",
    title: "Built around the season",
    body: "Sakura in spring, hojicha in autumn. The menu moves with what's actually good right now, not a laminated card that never changes.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Pull-quote hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
        <p className="flex items-center justify-center gap-2 font-body text-xs tracking-widest2 uppercase text-gold mb-6">
          <span className="inline-block w-1 h-1 rounded-full bg-blush" aria-hidden="true" />
          Our story
        </p>
        <blockquote className="font-display text-3xl md:text-5xl leading-tight text-bone">
          "Named after the repair,
          <br />not the break."
        </blockquote>
        <p className="font-body text-sm text-mist mt-8 max-w-xl mx-auto leading-relaxed">
          Sakura Kohi opened in 2026 in a converted print shop on Redchurch Street,
          Shoreditch — six stools, a two-group espresso machine, and a rule that's
          never changed since: nobody gets rushed.
        </p>
      </section>

      <SeamDivider className="mb-20" />

      {/* Kintsugi explainer — alternating layout with a decorative "photo" block */}
      <section className="mx-auto max-w-5xl px-6 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="flex items-center gap-2 font-body text-xs tracking-widest2 uppercase text-gold mb-4">
            <span className="inline-block w-1 h-1 rounded-full bg-blush" aria-hidden="true" />
            The name
          </p>
          <h2 className="font-display text-3xl text-bone mb-5 leading-snug">
            Gold in the crack,
            <br />not glued underneath.
          </h2>
          <p className="font-body text-sm text-mist leading-relaxed mb-4">
            Kintsugi is the Japanese practice of mending broken pottery with gold,
            so the repair becomes the most visible part of the piece rather than
            something to hide.
          </p>
          <p className="font-body text-sm text-mist leading-relaxed">
            We borrowed the idea before we ever borrowed a coffee technique —
            sakura for the season everyone waits for, kohi because, in the end,
            that's what we actually pour.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-lg border border-gold/20 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1622021134395-d26aab83c221?auto=format&fit=crop&w=1200&q=80"
            alt="A ceramic plate repaired with a visible gold kintsugi seam"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 480px, 100vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent pt-10 pb-4 px-4">
            <p className="font-body text-[11px] tracking-widest2 uppercase text-bone/90">
              Kin — gold
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-raised/40 border-y border-gold/10 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="flex items-center justify-center gap-2 font-body text-xs tracking-widest2 uppercase text-gold mb-3 text-center">
            <span className="inline-block w-1 h-1 rounded-full bg-blush" aria-hidden="true" />
            What stays the same
          </p>
          <h2 className="font-display text-3xl text-bone mb-14 text-center">
            Three things we won't change
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v) => (
              <div key={v.title} className="text-center md:text-left">
                <p className="font-display text-4xl text-gold mb-4">{v.glyph}</p>
                <h3 className="font-display text-xl text-bone mb-2">{v.title}</h3>
                <p className="font-body text-sm text-mist leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="flex items-center justify-center gap-2 font-body text-xs tracking-widest2 uppercase text-gold mb-3 text-center">
          <span className="inline-block w-1 h-1 rounded-full bg-blush" aria-hidden="true" />
          How we got here
        </p>
        <h2 className="font-display text-3xl text-bone mb-14 text-center">A short timeline</h2>
        <div className="space-y-10">
          {timeline.map((t, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="font-mono text-sm text-gold shrink-0 w-14 pt-1">{t.year}</span>
              <div className="border-l border-gold/25 pl-6 pb-2">
                <h3 className="font-display text-lg text-bone mb-1">{t.label}</h3>
                <p className="font-body text-sm text-mist leading-relaxed">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <SeamDivider className="mb-12 opacity-60" />
        <h2 className="font-display text-2xl md:text-3xl text-bone mb-6">
          Come sit with a slow drip for an hour.
        </h2>
        <Link
          href="/locations"
          className="focus-ring inline-block rounded-md bg-gold text-ink font-body font-semibold text-sm tracking-wide px-7 py-3.5 hover:bg-gold-bright hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          Find a counter near you
        </Link>
      </section>
    </div>
  );
}
