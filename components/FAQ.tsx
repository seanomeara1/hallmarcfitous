import SectionLabel from "@/components/SectionLabel";

export interface FaqItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FaqItem[];
  heading?: string;
  intro?: string;
}

/**
 * Renders a visible FAQ section (native <details> accordion, no JS required)
 * plus matching FAQPage JSON-LD. The on-page copy and the schema use the same
 * text, which is what Google and AI answer engines require for FAQ rich results
 * and citations.
 */
export default function FAQ({ items, heading = "Frequently asked questions", intro }: FAQProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionLabel>FAQ</SectionLabel>
        <h2
          className="text-3xl lg:text-4xl font-bold mt-4 text-black mb-4"
          style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
        >
          {heading}
        </h2>
        {intro && <p className="text-ink leading-relaxed mb-8">{intro}</p>}

        <div className="mt-6 border-t border-cream3">
          {items.map((i) => (
            <details key={i.q} className="group border-b border-cream3 py-5">
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none text-black font-medium text-lg">
                <span>{i.q}</span>
                <span className="text-terra shrink-0 mt-1 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-ink leading-relaxed">{i.a}</p>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
}
