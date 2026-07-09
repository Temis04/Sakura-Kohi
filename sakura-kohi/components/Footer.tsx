import Logo from "./Logo";
import SeamDivider from "./SeamDivider";
import { TAGLINE } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="border-t border-bone/5 mt-32">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <SeamDivider className="mb-10 opacity-70" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo />
            <p className="font-display text-sm text-gold italic mt-4">{TAGLINE}</p>
            <p className="font-body text-sm text-mist mt-3 max-w-xs leading-relaxed">
              A quiet counter in Shoreditch, pouring single-origin coffee and
              seasonal sakura drinks since 2026.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest2 uppercase text-gold mb-4">Hours</h4>
            <ul className="font-body text-sm text-mist space-y-1.5">
              <li>Mon – Fri　7:00 – 19:00</li>
              <li>Sat – Sun　8:00 – 20:00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest2 uppercase text-gold mb-4">Find us</h4>
            <p className="font-body text-sm text-mist leading-relaxed">
              47 Redchurch Street, Shoreditch<br />
              London, E2 7DJ
            </p>
          </div>
        </div>
        <p className="font-body text-[11px] text-mist/60 mt-14">
          © {new Date().getFullYear()} Sakura Kohi. A fictional coffee shop built for a front-end assessment.
        </p>
      </div>
    </footer>
  );
}
