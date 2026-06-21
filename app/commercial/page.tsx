import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
import ProjectGrid from "@/components/ProjectGrid";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Commercial Fitouts",
  description:
    "Commercial fitouts built to impress — corporate workplaces, developer display suites, health, education and government. Licensed across Australia.",
  alternates: { canonical: "/commercial" },
};

const SECTORS = [
  "Corporate workplaces", "Developer display suites", "Health & medical",
  "Education", "Government & civic", "Corporate HQ",
];

const PROJECTS = [
  { src: "/images/commercial1.jpg",      alt: "DISSH Head Office fitout",     label: "DISSH Head Office",     sublabel: "Commercial" },
  { src: "/images/commercial2.jpg",      alt: "Commercial office fitout",     label: "Corporate workplace",   sublabel: "Commercial" },
  { src: "/images/commercial_pro34.jpg", alt: "Commercial fitout project",    label: "Office fitout",         sublabel: "Commercial" },
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        imageSrc="/images/commercial1.jpg"
        imageAlt="DISSH Head Office — Hallmarc commercial fitout"
        eyebrow="Commercial"
        headline="Commercial fitouts built to impress."
        subline="Corporate workplaces, developer display suites, health, education and government — concept to completion."
        primaryCTA={{ label: "Start your project", href: "#enquire" }}
        overlayOpacity={40}
      />

      {/* Intro + sectors */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionLabel>Commercial fitouts</SectionLabel>
              <h2
                className="text-3xl lg:text-4xl font-bold mt-4 text-black mb-6"
                style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
              >
                Every sector. One standard of delivery.
              </h2>
              <p className="text-ink leading-relaxed">
                We deliver across a broad range of commercial sectors — from fast-tracked developer display
                suites to complex health and education fitouts. In-house joinery, senior PM oversight
                and national building licences mean we can deliver anywhere, at any scale.
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-grey mb-5">Sectors</p>
              <div className="space-y-2">
                {SECTORS.map((s, i) => (
                  <div key={s} className="flex items-center gap-4 py-2 border-b border-cream3">
                    <span className="text-terra text-xs font-medium w-6">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-black font-medium">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case study — The Eveleigh */}
      <section className="bg-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-terra mb-3">Case study</p>
              <h3
                className="text-white text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
              >
                The Eveleigh, Broadbeach
              </h3>
              <p className="text-grey leading-relaxed mb-4">
                Developer display suite delivered in{" "}
                <span className="text-white font-medium">4.5 weeks</span> — from a bare shell to a
                fully furnished, presentation-ready suite for one of the Gold Coast's premium
                residential developments.
              </p>
              <p className="text-grey text-sm leading-relaxed">
                Fast-tracked programme, in-house joinery for custom cabinetry and display pieces,
                and a senior PM on-site throughout. Zero variations from the approved programme.
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-grey/50 mt-6">
                Broadbeach, QLD · 4.5 week programme
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <Image
                src="/images/eveleigh.png"
                alt="The Eveleigh developer display suite, Broadbeach"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section>
        <ProjectGrid projects={PROJECTS} cols={3} />
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
              Tell us about your project.
            </h2>
            <p className="text-ink">
              From a single tenancy to a multi-floor corporate HQ — we'd like to hear about it.
            </p>
          </div>
          <EnquiryForm enquiryType="Commercial" />
        </div>
      </section>
    </>
  );
}
