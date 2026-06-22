import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Decks & Resources",
  description:
    "Download Hallmarc National Fitouts capability decks - company overview plus retail, commercial and hospitality fitout capability.",
  alternates: { canonical: "/resources" },
};

const DECKS = [
  {
    name: "Company Overview",
    file: "/decks/Hallmarc-General.pdf",
    desc: "Our full capability across retail, commercial and hospitality fitouts - concept to completion.",
  },
  {
    name: "Retail",
    file: "/decks/Hallmarc-Retail.pdf",
    desc: "Flagship stores, multi-site rollouts and brand-compliant retail fitouts, delivered nationally.",
  },
  {
    name: "Commercial",
    file: "/decks/Hallmarc-Commercial.pdf",
    desc: "Workplaces, developer display suites and commercial environments built with precision.",
  },
  {
    name: "Hospitality",
    file: "/decks/Hallmarc-Hospitality.pdf",
    desc: "Restaurants, pubs, bars, hotels and QSR - with deep back-of-house technical expertise.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <p className="text-xs tracking-[0.25em] uppercase text-terra mb-4">Resources</p>
        <h1
          className="text-4xl lg:text-5xl font-bold text-black mb-4"
          style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
        >
          Capability decks
        </h1>
        <p className="text-ink text-lg max-w-2xl mb-12">
          Download our capability decks to share with your team - a closer look at how we
          deliver across each sector, from concept through to completion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {DECKS.map((d) => (
            <a
              key={d.file}
              href={d.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between bg-white border border-cream3 rounded-lg p-7 hover:border-terra transition-colors"
            >
              <div>
                <h2
                  className="text-xl font-bold text-black mb-2"
                  style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
                >
                  {d.name}
                </h2>
                <p className="text-ink text-sm leading-relaxed mb-6">{d.desc}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-terra text-sm font-medium">
                Download PDF
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-y-0.5 transition-transform"
                >
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
