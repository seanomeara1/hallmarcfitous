import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ, { type FaqItem } from "@/components/FAQ";
import { LOCATIONS } from "@/app/fitouts/locations";

export const metadata: Metadata = {
  title: "National Fitout Rollouts & Multi-Site Programs",
  description:
    "National retail and hospitality rollout programs delivered from one accountable team, with in-house joinery for consistent brand delivery across every site. Licensed across Australia.",
  alternates: { canonical: "/national-rollout" },
};

const WHY = [
  {
    title: "In-house joinery",
    body: "Joinery manufactured in our own workshop means the same fixtures, the same finish and the same quality on site one and site fifty. Consistency is built, not hoped for.",
  },
  {
    title: "One accountable team",
    body: "A single senior point of contact runs the whole program, not a different builder in every state. One standard, one line of communication, one team owning the outcome.",
  },
  {
    title: "National coverage",
    body: "Building licences across VIC, QLD, SA, ACT and WA and delivery nationally, so your program rolls out to plan in every market, from capital cities to regional sites.",
  },
];

const CLIENTS = [
  "The Just Group", "Stylerunner", "DISSH", "Lovisa", "Honey Birdette",
  "Nudie Jeans", "City Beach", "Zambrero",
];

const ROLLOUT_FAQS: FaqItem[] = [
  {
    q: "What is a national fitout rollout?",
    a: "A rollout is a program of fitouts for the same brand across multiple sites and states, delivered to one consistent standard on a coordinated schedule, rather than as one-off projects. We plan procurement, joinery, logistics and programme centrally so every store or venue opens on brand and on time.",
  },
  {
    q: "How do you keep brand delivery consistent across sites?",
    a: "In-house joinery is the key. Manufacturing fixtures ourselves means identical quality and finish at every location, and one accountable team works from your head-office brand guidelines rather than reinterpreting them site by site.",
  },
  {
    q: "How many sites can you deliver, and where?",
    a: "From a handful of stores to a national program. We deliver across Australia, including Gold Coast, Brisbane, Sydney, Melbourne, Adelaide, Perth and Darwin, and hold building licences across VIC, QLD, SA, ACT and WA.",
  },
  {
    q: "Do you handle both retail and hospitality rollouts?",
    a: "Yes. We deliver national retail rollouts and multi-site hospitality and QSR programs, including drive-through, with full back-of-house capability.",
  },
  {
    q: "How much does a rollout cost?",
    a: "Every program is bespoke, so we scope and quote based on site count, format, finishes, services and schedule rather than publishing a rate. A consistent, repeatable format across sites is where a well-planned rollout delivers value.",
  },
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "National fitout rollouts and multi-site programs",
  name: "National fitout rollouts",
  description:
    "National retail and hospitality multi-site rollout programs delivered from one accountable team with in-house joinery for consistent brand delivery across every site.",
  url: "https://www.hallmarcfitouts.com.au/national-rollout",
  areaServed: "AU",
  provider: {
    "@type": "GeneralContractor",
    name: "Hallmarc National Fitouts",
    url: "https://www.hallmarcfitouts.com.au",
    telephone: "+61755715551",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hallmarcfitouts.com.au" },
    { "@type": "ListItem", position: 2, name: "National rollouts", item: "https://www.hallmarcfitouts.com.au/national-rollout" },
  ],
};

export default function NationalRolloutPage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/stylerunner_hero.jpg"
        imageAlt="Hallmarc national retail rollout fitout, Stylerunner"
        eyebrow="National rollouts"
        headline="National rollouts, delivered from one team."
        subline="Multi-site retail and hospitality programs, consistent on every site, powered by in-house joinery."
        primaryCTA={{ label: "Start your program", href: "#enquire" }}
        overlayOpacity={45}
      />

      {/* Intro */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionLabel>Multi-site programs</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl font-bold mt-4 text-black mb-6"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            One brand standard, every site, every state.
          </h2>
          <div className="space-y-5 text-ink text-lg leading-relaxed">
            <p>
              Rolling out a brand across the country is a different discipline to a single fitout. It
              lives or dies on consistency, on the fifth store looking exactly like the first, opening on
              time, and on one team owning the whole program rather than a patchwork of builders in every
              state.
            </p>
            <p>
              That is what we are built for. Joinery manufactured in-house means identical fixtures and
              finishes on every site. A single senior point of contact runs the program end to end. And
              building licences across the country mean your rollout lands to plan in every market. It is
              how we deliver for national brands like The Just Group, Stylerunner, DISSH and Lovisa.
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-cream2 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Why brands roll out with us</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {WHY.map((w) => (
              <div key={w.title}>
                <div className="w-10 h-1 bg-terra mb-5" />
                <h3
                  className="text-xl font-bold text-black mb-3"
                  style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
                >
                  {w.title}
                </h3>
                <p className="text-ink text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client proof */}
      <section className="bg-dark py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.25em] uppercase text-terra mb-8">National programs delivered for</p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {CLIENTS.map((c) => (
              <span key={c} className="text-white text-lg font-medium">{c}</span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/projects/justgroup" className="text-terra font-medium hover:underline">See The Just Group rollout →</Link>
            <Link href="/retail" className="text-terra font-medium hover:underline">Retail fitouts →</Link>
            <Link href="/hospitality" className="text-terra font-medium hover:underline">Hospitality fitouts →</Link>
          </div>
        </div>
      </section>

      {/* Location coverage */}
      <section className="bg-cream py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.25em] uppercase text-grey mb-4">Rollout delivery by location</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} href={`/fitouts/${l.slug}`} className="text-terra font-medium hover:underline">
                {`${l.city} →`}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={ROLLOUT_FAQS} heading="National rollouts — FAQs" />

      {/* Enquiry */}
      <section id="enquire" className="bg-cream2 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>Get in touch</SectionLabel>
            <h2
              className="text-3xl font-bold mt-4 text-black mb-3"
              style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
            >
              Planning a rollout?
            </h2>
            <p className="text-ink">Tell us about your program and a senior team member will be in touch.</p>
          </div>
          <EnquiryForm enquiryType="Retail" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}
