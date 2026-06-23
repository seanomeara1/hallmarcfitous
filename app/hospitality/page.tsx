import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
import TechTag from "@/components/TechTag";
import ProjectGrid from "@/components/ProjectGrid";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Hospitality & Drive-Through Fitouts",
  description:
    "Front-of-house design and back-of-house engineering for restaurants, pubs, hotels and drive-through QSR. Drive-through specialists, licensed across Australia.",
  alternates: { canonical: "/hospitality" },
};

const TECH_TAGS = [
  "Drive-through canopies", "Digital menu boards", "Commercial kitchens",
  "3-phase power", "Grease traps", "Exhausts & ventilation",
  "Hydraulics", "Drainage & waste", "Fire suppression",
  "Cool rooms", "Pass-through windows",
];

const CLIENTS = [
  "Grill'd", "Zambrero", "The Terminus Hotel", "The King Hotel",
  "RSL NSW", "TAB", "Zarraffa's Coffee",
];

const PROJECTS = [
  { src: "/images/terminus.jpg",    alt: "The Terminus Hotel",    label: "The Terminus Hotel", sublabel: "Yarrawonga, VIC" },
  { src: "/images/hospofitout.jpg", alt: "Hospitality fitout",    label: "Back-of-house", sublabel: "Commercial kitchen build" },
];

export default function HospitalityPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        imageSrc="/images/terminus.jpg"
        imageAlt="The Terminus Hotel - Hallmarc hospitality fitout"
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
            <p className="text-ink leading-relaxed">
              We deliver full fitouts for restaurants, pubs, bars, hotels, cafes and quick-service
              restaurants across Australia - including drive-through QSR programs from canopy and
              menu boards to the kitchen behind them. Whether it's a single flagship venue or a
              national multi-site rollout, our team manages every trade from DA approval through to handover.
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

      {/* Hospitality, from the inside - Sean O'Meara perspective */}
      <section className="bg-terra py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/70 text-xs tracking-[0.25em] uppercase mb-6">
            Hospitality, from the inside
          </p>
          <blockquote
            className="text-white text-2xl lg:text-3xl font-bold leading-snug"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            &ldquo;Having worked with operators across 3,700 venues, I know what it takes to make a
            space perform from day one. Hallmarc has the experience, the team and the can-do attitude
            operators want in a fitout partner - and knows how to deliver it.&rdquo;
          </blockquote>
          <p className="text-white text-sm mt-7 font-medium">
            Sean O&rsquo;Meara{" "}
            <span className="text-white/70 font-normal">- Strategic Partnerships &amp; Operations</span>
          </p>
          <p className="text-white/70 text-xs mt-1">
            22+ years in hospitality · 3,700 venues across Australia &amp; New Zealand
          </p>
        </div>
      </section>

      {/* Technical expertise band */}
      <section className="bg-dark py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.25em] uppercase text-terra mb-6">
            Technical coordination
          </p>
          <h3
            className="text-white text-2xl font-bold mb-8"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            We manage and organise what others don&rsquo;t.
          </h3>
          <div className="flex flex-wrap gap-3">
            {TECH_TAGS.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>
          <p className="text-grey text-sm mt-8 max-w-xl leading-relaxed">
            We coordinate every specialist trade - commercial kitchen design, extraction, hydraulics and
            3-phase electrical - and own the quality control, programme and client communication across all
            of them. One point of contact, accountable from concept through to handover, keeping your
            expectations clear and met at every stage.
          </p>
        </div>
      </section>

      {/* Drive-through QSR - key selling point */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm order-1 lg:order-none">
              <Image
                src="/images/zambrero-drivethrough.jpg"
                alt="Zambrero drive-through fitout - canopy, digital menu boards and order lane, Deception Bay"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionLabel>Drive-through QSR</SectionLabel>
              <h2
                className="text-3xl lg:text-4xl font-bold mt-4 mb-6 text-black"
                style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
              >
                Drive-through specialists.
              </h2>
              <p className="text-ink leading-relaxed mb-4">
                Drive-through is one of our core strengths. We deliver complete QSR sites - canopies
                and order lanes, digital menu boards, the commercial kitchen behind them and every
                trade in between - built to brand standard and tuned for speed of service.
              </p>
              <p className="text-ink leading-relaxed mb-6">
                We work to tight, fast-tracked programs across national rollouts, with our joinery
                capability and a senior PM on every site from DA approval through to opening day.
              </p>
              <Link
                href="/projects/zambrero"
                className="inline-flex items-center gap-2 text-terra text-sm font-medium hover:gap-3 transition-all"
              >
                See the Zambrero drive-through →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured project - The Terminus */}
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
                Full venue fitout for one of regional Victoria's landmark hospitality destinations. We delivered
                front-of-house design, commercial kitchen build, bar service areas, acoustic treatment
                and all compliance works - on programme, to the operator's exact brief.
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-grey/60">Yarrawonga, VIC</p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <Image
                src="/images/terminus.jpg"
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
            <p className="text-ink">
              We respond within one business day. Licensed nationally - Cm3 certified.
            </p>
          </div>
          <EnquiryForm enquiryType="Hospitality" />
        </div>
      </section>
    </>
  );
}
