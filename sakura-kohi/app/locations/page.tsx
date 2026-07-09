import SeamDivider from "@/components/SeamDivider";

const locations = [
  {
    name: "Shoreditch, London",
    flagship: true,
    address: "47 Redchurch Street, London, E2 7DJ",
    hours: ["Mon – Fri　7:30 – 18:00", "Sat – Sun　8:30 – 17:00"],
    note: "The flagship counter. Long communal table inside, two benches out front.",
  },
  {
    name: "Northern Quarter, Manchester",
    flagship: false,
    address: "22 Oldham Street, Manchester, M1 1JN",
    hours: ["Daily　8:00 – 18:00"],
    note: "Our roastery site — you can watch the drum roaster through the window.",
  },
  {
    name: "Digbeth, Birmingham",
    flagship: false,
    address: "9 Trent Street, Digbeth, Birmingham, B5 6NB",
    hours: ["Tue – Sun　8:00 – 17:00", "Closed Mondays"],
    note: "Our smallest room — a standing counter and four stools by the window.",
  },
];

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="flex items-center gap-2 font-body text-xs tracking-widest2 uppercase text-gold mb-3">
        <span className="inline-block w-1 h-1 rounded-full bg-blush" aria-hidden="true" />
        Find us
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-bone mb-4">Three rooms, one counter</h1>
      <p className="font-body text-sm text-mist max-w-lg leading-relaxed mb-14">
        Each location keeps its own hours, though the menu stays the same
        wherever you find us. Call ahead if you're bringing a group larger than four.
      </p>

      <div className="space-y-0">
        {locations.map((loc, i) => (
          <div key={loc.name}>
            <div className="grid md:grid-cols-[1fr_1fr_1fr] gap-6 py-8">
              <div>
                <h2 className="font-display text-2xl text-bone flex items-center gap-3">
                  {loc.name}
                  {loc.flagship && (
                    <span className="font-body text-[10px] tracking-widest2 uppercase text-gold border border-gold/40 rounded-full px-2.5 py-0.5">
                      Flagship
                    </span>
                  )}
                </h2>
                <p className="font-body text-sm text-mist mt-3 leading-relaxed">{loc.note}</p>
              </div>
              <div>
                <h3 className="font-body text-xs tracking-widest2 uppercase text-gold mb-2">Address</h3>
                <p className="font-body text-sm text-mist leading-relaxed">{loc.address}</p>
              </div>
              <div>
                <h3 className="font-body text-xs tracking-widest2 uppercase text-gold mb-2">Hours</h3>
                <ul className="font-body text-sm text-mist space-y-1">
                  {loc.hours.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
            {i < locations.length - 1 && <SeamDivider className="opacity-50" />}
          </div>
        ))}
      </div>
    </div>
  );
}
