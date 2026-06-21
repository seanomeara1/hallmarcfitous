import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AwardsBanner from "@/components/AwardsBanner";
import SectionLabel from "@/components/SectionLabel";
import ProjectGrid from "@/components/ProjectGrid";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Retail Fitouts",
  description:
    "Retail fitouts that deliver on brand — flagship stores, national rollout programs and brand-compliant fitouts. Licensed across Australia.",
  alternates: { canonical: "/retail" },
};

const PROJECTS = [
  { src: "/images/stylerunner_hero.jpg", alt: "Stylerunner retail fitout", label: "Stylerunner", sublabel: "Retail" },
  { src: "/images/nudie1.jpg",           alt: "Nudie Jeans fitout",         label: "Nudie Jeans",  sublabel: "Retail" },
  { src: "/images/xo1.jpg",              alt: "X&O retail fitout",          label: "X&O",           sublabel: "Retail" },
];

const CAPABILITIES = [
  {
    title: "Flagship stores",
    body: "Single-site flagship fitouts built to brand spec — in-house joinery, premium finishes, zero substitutions without your approval.",
  },
  {
    title: "Multi-site rollouts",
    body: "National programs managed from one team. Consistent delivery across VIC, QLD, SA, ACT and WA with licensed contractors in each state.",
  },
  {
    title: "Brand compliance",
    body: "We work directly from your brand guidelines and head office specs. Senior PM oversight on every site — not subcontracted or outsourced.",
  },
];

const CLIENTS = [
  "Stylerunner", "Nudie Jeans", "Just Jeans", "Vodafone", "DISSH",
  "Kate Spade", "Hugo Boss", "Lovisa", "Peter Alexander", "Honey Birdette", "X&O",
];

export default function RetailPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        imageSrc="/images/stylerunner_hero.jpg"
        imageAlt="Stylerunner retail fitout — Hallmarc"
        eyebrow="Retail"
        headline="Retail fitouts that deliver on brand."
        subline="From flagship stores to national rollout programs — on spec, on time, every site."
        primaryCTA={{ label: "Start your project", href: "#enquire" }}
        overlayOpacity={35}
      />

      {/* Awards banner */}
      <AwardsBanner />

      {/* Intro */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionLabel>Retail fitouts</SectionLabel>
              <h2
                className="text-3xl lg:text-4xl font-bold mt-4 text-black mb-6"
                style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
              >
                Built to your spec. Delivered nationally.
              </h2>
              <p className="text-ink leading-relaxed">
                From concept through to completion, we manage every aspect of your retail fitout —
                design coordination, procurement, shopfitting, joinery, signage and compliance.
                Our in-house joinery manufacturing gives us quality control and speed that most
                fitout companies can't match.
              </p>
            </div>
            {/* Client name strip */}
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-grey mb-5">Clients</p>
              <div className="flex flex-wrap gap-4">
                {CLIENTS.map((name) => (
                  <span key={name} className="text-black text-sm font-medium border border-cream3 px-3 py-1.5 rounded-sm">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section>
        <ProjectGrid projects={PROJECTS} cols={3} />
      </section>

      {/* Capabilities */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Capabilities</SectionLabel>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {CAPABILITIES.map((c) => (
              <div key={c.title}>
                <div className="w-10 h-1 bg-terra mb-5" />
                <h3
                  className="text-xl font-bold text-black mb-3"
                  style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-ink text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="bg-cream2 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>Get in touch</SectionLabel>
            <h2
              className="text-3xl font-bold mt-4 text-black mb-3"
              style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
            >
              Tell us about your store.
            </h2>
            <p className="text-ink">Single site or national rollout — we'd love to hear about it.</p>
          </div>
          <EnquiryForm enquiryType="Retail" />
        </div>
      </section>
    </>
  );
}
