import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-grey">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <p
              className="text-white text-xl font-bold tracking-tight mb-1"
              style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
            >
              hallmarc
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-grey mb-4">
              National Fitouts
            </p>
            <p className="text-sm leading-relaxed">
              Retail, commercial and hospitality fitouts — concept to completion.
              Founded 2016 by Marcus Hall.
            </p>
            <p className="text-xs mt-4">
              Licensed in VIC, QLD, SA, ACT and WA.{" "}
              <span className="text-grey/70">Tasmania available on request.</span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-terra mb-4">
              Services
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/retail"      className="hover:text-white transition-colors">Retail Fitouts</Link></li>
              <li><Link href="/commercial"  className="hover:text-white transition-colors">Commercial Fitouts</Link></li>
              <li><Link href="/hospitality" className="hover:text-white transition-colors">Hospitality Fitouts</Link></li>
              <li><Link href="/partners"    className="hover:text-white transition-colors">Architect & Designer Partners</Link></li>
              <li><Link href="/resources"   className="hover:text-white transition-colors">Capability decks (PDF)</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-terra mb-4">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@hallmarcfitouts.com.au" className="hover:text-white transition-colors">
                  hello@hallmarcfitouts.com.au
                </a>
              </li>
              <li>
                <a href="https://hallmarcfitouts.com.au" className="hover:text-white transition-colors">
                  hallmarcfitouts.com.au
                </a>
              </li>
            </ul>
            <p className="text-xs mt-6 text-grey/60">
              Cm3 certified · Zero site safety incidents
            </p>

            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/hallmarcnationalfitouts/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-grey hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
              </a>
              <a href="https://www.facebook.com/hallmarcnp/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-grey hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/hallmarc-national-fitouts" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-grey hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-dark flex flex-col sm:flex-row justify-between gap-3 text-xs text-grey/60">
          <p>© {new Date().getFullYear()} Hallmarc National Fitouts. All rights reserved.</p>
          <p>Building licences held across VIC, QLD, SA, ACT and WA.</p>
        </div>
      </div>
    </footer>
  );
}
