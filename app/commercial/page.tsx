import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
import ProjectGrid from "@/components/ProjectGrid";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ, { type FaqItem } from "@/components/FAQ";
import { LOCATIONS } from "@/app/fitouts/locations";

export const metadata: Metadata = {
  title: "Commercial & Office Fitouts Across Australia",
  description:
    "Commercial and office fitouts - corporate workplaces, developer display suites, base-building, health, education and government. In-house joinery, senior-led. Licensed across Australia.",
  alternates: { canonical: "/commercial" },
};

const COMMERCIAL_FAQS: FaqItem[] = [
  {
    q: "How much does a commercial fitout cost?",
    a: "Every commercial fitout is bespoke, so we scope and quote each project rather than publishing a rate. Cost is driven by area, finishes, mechanical and electrical services, base-building works, site access and building requirements. After understanding your brief we provide a detailed, itemised quote.",
  },
  {
    q: "How fast can you deliver a display suite or office fitout?",
    a: "It depends on scope and approvals, but as a benchmark we delivered the Eveleigh developer display suite in Broadbeach in 4.5 weeks, from bare shell to presentation-ready. We set a realistic programme up front and a senior PM holds it to handover.",
  },
  {
    q: "Which commercial sectors do you deliver?",
    a: "Corporate workplaces and headquarters, developer display suites, base-building fitouts, health and medical, education, government and civic, and mixed-use developments.",
  },
  {
    q: "Do you handle base-building works and services?",
    a: "Yes. As part of concept-to-completion delivery we coordinate mechanical, electrical, hydraulic and compliance works, with one senior point of contact accountable across every trade.",
  },
  {
    q: "Where do you deliver commercial fitouts?",
    a: "We deliver nationally, including Gold Coast, Brisbane, Sydney, Melbourne, Adelaide, Perth and Darwin, and hold building licences across VIC, QLD, SA, ACT and WA.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Commercial and office fitouts",
  name: "Commercial fitouts",
  description:
    "Corporate workplaces, developer display suites, base-building and sector fitouts across health, education, government and mixed-use, delivered nationally with in-house joinery.",
  url: "https://www.hallmarcfitouts.com.au/commercial",
  areaServed: "AU",
  provider: {
    "@type": "GeneralContractor",
    name: "Hallmarc National Fitouts",
    url: "https://www.hallmarcfitouts.com.au",
    telephone: "+61755715551",
  },
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
        imageAlt="DISSH Head Office - Hallmarc commercial fitout"
        eyebrow="Commercial"
        headline="Commercial fitouts built to impress."
        subline="Corporate workplaces, developer display suites, health, education and government - concept to completion."
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
                We deliver across a broad range of commercial sectors - from fast-tracked developer display
                suites to complex health and education fitouts. Joinery capability, senior PM oversight
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

      {/* Case study - The Eveleigh */}
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
                <span className="text-white font-medium">4.5 weeks</span> - from a bare shell to a
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

      {/* Commercial fitouts by location */}
      <section className="bg-cream py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.25em] uppercase text-grey mb-4">Commercial fitouts by location</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} href={`/fitouts/${l.slug}`} className="text-terra font-medium hover:underline">
                {`Commercial fitouts ${l.city} →`}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={COMMERCIAL_FAQS} heading="Commercial fitouts — FAQs" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

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
              From a single tenancy to a multi-floor corporate HQ - we'd like to hear about it.
            </p>
          </div>
          <EnquiryForm enquiryType="Commercial" />
        </div>
      </section>
    </>
  );
}
