import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import AwardsBanner from "@/components/AwardsBanner";
import SectionLabel from "@/components/SectionLabel";
import ProjectGrid from "@/components/ProjectGrid";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ, { type FaqItem } from "@/components/FAQ";
import { LOCATIONS } from "@/app/fitouts/locations";

export const metadata: Metadata = {
  title: "Retail Fitouts & Shopfitting",
  description:
    "Flagship stores, shopfitting and national multi-site rollouts, brand compliant and senior led, with joinery made in our own workshop.",
  alternates: { canonical: "/retail" },
};

const RETAIL_FAQS: FaqItem[] = [
  {
    q: "How much does a retail fitout cost?",
    a: "Every retail fitout is bespoke, so we scope and quote each project rather than publishing a rate. Cost is driven by store size, finishes and joinery, shopfront works, services, site access and centre requirements. After understanding your brand standard and space, we provide a detailed, itemised quote.",
  },
  {
    q: "How long does a retail fitout take?",
    a: "It depends on size and approvals, but a standard retail store typically runs a matter of weeks from design sign-off. We give you a realistic programme up front and a senior project manager holds it to handover.",
  },
  {
    q: "Can you deliver a national multi-site retail rollout?",
    a: "Yes. National rollouts are a core strength. With in-house joinery and one accountable team, we deliver consistent, brand-compliant stores across multiple sites and states on a coordinated programme.",
  },
  {
    q: "Do you manufacture your own joinery?",
    a: "Yes. Joinery is our heritage. We manufacture in-house where it is economically suitable, backed by a vetted national fabricator network for scale, which gives us tighter quality control and speed than fitout companies that outsource everything.",
  },
  {
    q: "Which locations do you deliver retail fitouts in?",
    a: "We deliver nationally, including Gold Coast, Brisbane, Sydney, Melbourne, Adelaide, Perth and Darwin, and hold building licences across VIC, QLD, SA, ACT and WA.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Retail fitouts and shopfitting",
  name: "Retail fitouts",
  description:
    "Flagship stores, national multi-site rollout programs and brand-compliant retail shopfitting, delivered with in-house joinery across Australia.",
  url: "https://www.hallmarcfitouts.com.au/retail",
  areaServed: "AU",
  provider: {
    "@type": "GeneralContractor",
    name: "Hallmarc National Fitouts",
    url: "https://www.hallmarcfitouts.com.au",
    telephone: "+61755715551",
  },
};

const PROJECTS = [
  { src: "/images/stylerunner_hero.jpg", alt: "Stylerunner retail fitout", label: "Stylerunner", sublabel: "Retail" },
  { src: "/images/nudie1.jpg",           alt: "Nudie Jeans fitout",         label: "Nudie Jeans",  sublabel: "Retail" },
  { src: "/images/xo1.jpg",              alt: "X&O retail fitout",          label: "X&O",           sublabel: "Retail" },
];

const CAPABILITIES = [
  {
    title: "Flagship stores",
    body: "Single-site flagship fitouts built to brand spec - premium joinery, quality finishes and no substitutions without your sign-off.",
  },
  {
    title: "Multi-site rollouts",
    body: "National programs managed from one team. Consistent delivery across VIC, QLD, SA, ACT and WA with licensed contractors in each state.",
  },
  {
    title: "Brand compliance",
    body: "We work directly from your brand guidelines and head office specs. Senior PM oversight on every site - not subcontracted or outsourced.",
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
        imageAlt="Stylerunner retail fitout - Hallmarc"
        eyebrow="Retail"
        headline="Retail fitouts that deliver on brand."
        subline="From flagship stores to national rollout programs - on spec, on time, every site."
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
                From concept through to completion, we manage every aspect of your retail fitout - 
                design coordination, procurement, shopfitting, joinery, signage and compliance.
                Joinery is our heritage: manufactured in-house where it's economically suitable and
                backed by a vetted national network of cabinet makers, giving us the quality control
                and the scale most fitout companies can't match.
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

      {/* How we deliver */}
      <section className="bg-cream2 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionLabel>How we deliver</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl font-bold mt-4 text-black mb-6"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            Concept to completion, one accountable team.
          </h2>
          <div className="space-y-5 text-ink leading-relaxed">
            <p>
              We manage the whole retail fitout in-house: design coordination and documentation,
              procurement, joinery manufacture, shopfitting and installation, services, signage,
              compliance and handover. You deal with one senior project manager, not a chain of
              subcontractors.
            </p>
            <p>
              Because joinery is made in our own workshop, quality control and lead times sit with us
              rather than a third party. For national retailers that means the same brand standard on
              every store, whether it is a single flagship or a program of sites across the country.
            </p>
            <p>
              Every project is senior-led from day one, so the person accountable for your store is the
              person running it. It is how we keep programs on time, on brand and on budget.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-8 h-1 bg-terra mb-3" />
              <h3 className="text-black font-bold mb-2">What&rsquo;s included</h3>
              <p className="text-ink text-sm leading-relaxed">
                Design coordination, procurement, joinery, shopfitting, services, signage, compliance
                and handover.
              </p>
            </div>
            <div>
              <div className="w-8 h-1 bg-terra mb-3" />
              <h3 className="text-black font-bold mb-2">Timelines</h3>
              <p className="text-ink text-sm leading-relaxed">
                A realistic programme set up front and held to handover by a senior project manager.
              </p>
            </div>
            <div>
              <div className="w-8 h-1 bg-terra mb-3" />
              <h3 className="text-black font-bold mb-2">Proof</h3>
              <p className="text-ink text-sm leading-relaxed">
                Stylerunner, DISSH, Lovisa, City Beach, Honey Birdette, Nudie Jeans and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail fitouts by location */}
      <section className="bg-cream py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.25em] uppercase text-grey mb-4">Retail fitouts by location</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} href={`/fitouts/${l.slug}`} className="text-terra font-medium hover:underline">
                {`Retail fitouts ${l.city} →`}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={RETAIL_FAQS} heading="Retail fitouts — FAQs" />

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
              Tell us about your store.
            </h2>
            <p className="text-ink">Single site or national rollout - we'd love to hear about it.</p>
          </div>
          <EnquiryForm enquiryType="Retail" />
        </div>
      </section>
    </>
  );
}
