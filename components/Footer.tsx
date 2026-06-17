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
              Fitouts
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-dark flex flex-col sm:flex-row justify-between gap-3 text-xs text-grey/60">
          <p>© {new Date().getFullYear()} Hallmarc Fitouts. All rights reserved.</p>
          <p>Building licences held across VIC, QLD, SA, ACT and WA.</p>
        </div>
      </div>
    </footer>
  );
}
