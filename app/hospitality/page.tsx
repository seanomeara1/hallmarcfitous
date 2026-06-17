import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
import TechTag from "@/components/TechTag";
import ProjectGrid from "@/components/ProjectGrid";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Hospitality Fitouts",
  description:
    "Front-of-house design and back-of-house engineering for restaurants, pubs, hotels and QSR. Licensed across Australia.",
};

const TECH_TAGS = [
  "Commercial kitchens", "3-phase power", "Grease traps",
  "Exhausts & ventilation", "Hydraulics", "Drainage & waste",
  "Fire suppression", "Cool rooms", "Pass-through windows",
];

const CLIENTS = [
  "Zambrero", "The Terminus Hotel", "The King Hotel",
  "RSL NSW", "TAB", "Zarraffa's Coffee",
];

const PROJECTS = [
  { src: "/images/terminus.png",    alt: "The Terminus Hotel",    label: "The Terminus Hotel", sublabel: "Yarrawonga, VIC" },
  { src: "/images/hospofitout.jpg", alt: "Hospitality fitout",    label: "Back-of-house", sublabel: "Commercial kitchen build" },
];

export default function HospitalityPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        imageSrc="/images/terminus.png"
        imageAlt="The Terminus Hotel — Hallmarc hospitality fitout"
        eyebrow="Hospitality"
        headline="Hospitality fitouts that perform."
        subline="Front-of-house design. Back-of-house engineering. Delivered by specialists."
        primaryCTA={{ label: "Start your project", href: "#enquire" }}
        overlayOpacity={42}
      />

      {/* Intro + client strip */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <SectionLabel>Who we work with</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold mt-4 text-black mb-6"
              style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
            >
              From licensed venues to national QSR programs.
            </h2>
            <p className="text-grey leading-relaxed">
              We deliver full fitouts for restaurants, pubs, bars, hotels, cafes and quick-service restaurants
              across Australia. Whether it's a single flagship venue or a multi-site rollout, our team manages
              every trade from DA approval through to handover.
            </p>
          </div>

          {/* Client name strip */}
          <div className="flex flex-wrap gap-6 items-center">
            {CLIENTS.map((name, i) => (
              <div key={name} className="flex items-center gap-6">
                <span className="text-black font-medium">{name}</span>
                {i < CLIENTS.length - 1 && (
                  <span className="text-cream3">·</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical expertise band */}
      <section className="bg-dark py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.25em] uppercase text-terra mb-6">
            Technical expertise
          </p>
          <h3
            className="text-white text-2xl font-bold mb-8"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            We handle what others sub out.
          </h3>
          <div className="flex flex-wrap gap-3">
            {TECH_TAGS.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>
          <p className="text-grey text-sm mt-8 max-w-xl leading-relaxed">
            In-house capability across commercial kitchen design, extraction, hydraulics and 3-phase electrical
            means no coordination gaps — and a single point of contact from concept through to handover.
          </p>
        </div>
      </section>

      {/* Featured project — The Terminus */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>Featured project</SectionLabel>
              <h3
                className="text-white text-3xl lg:text-4xl font-bold mt-4 mb-4"
                style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
              >
                The Terminus Hotel
              </h3>
              <p className="text-grey leading-relaxed mb-6">
                Full venue fitout for one of Brisbane's landmark hospitality destinations. We delivered
                front-of-house design, commercial kitchen build, bar service areas, acoustic treatment
                and all compliance works — on programme, to the operator's exact brief.
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-grey/60">Yarrawonga, VIC</p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <Image
                src="/images/terminus.png"
                alt="The Terminus Hotel fitout"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-cream pt-0">
        <ProjectGrid projects={PROJECTS} cols={2} />
      </section>

      {/* Enquiry CTA + form */}
      <section id="enquire" className="bg-cream2 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>Get in touch</SectionLabel>
            <h2
              className="text-3xl font-bold mt-4 text-black mb-3"
              style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
            >
              Tell us about your venue.
            </h2>
            <p className="text-grey">
              We respond within one business day. Licensed nationally — Cm3 certified.
            </p>
          </div>
          <EnquiryForm enquiryType="Hospitality" />
        </div>
      </section>
    </>
  );
}
