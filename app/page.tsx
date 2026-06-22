import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import StatsBar from "@/components/StatsBar";
import ProjectGrid from "@/components/ProjectGrid";
import VerticalCard from "@/components/VerticalCard";
import SectionLabel from "@/components/SectionLabel";
import EnquiryForm from "@/components/EnquiryForm";
import AwardsBanner from "@/components/AwardsBanner";

export const metadata: Metadata = {
  title: { absolute: "Retail, Commercial & Hospitality Fitouts | Hallmarc National Fitouts" },
};

const FEATURED_PROJECTS = [
  { src: "/images/stylerunner_hero.jpg", alt: "Stylerunner retail fitout", label: "Stylerunner", sublabel: "Retail", href: "/projects/stylerunner" },
  { src: "/images/commercial1.jpg",      alt: "DISSH Head Office fitout",   label: "DISSH Head Office",   sublabel: "Commercial", href: "/projects/dissh" },
  { src: "/images/terminus.jpg",         alt: "The Terminus Hotel fitout",  label: "The Terminus Hotel",  sublabel: "Hospitality", href: "/projects/terminus" },
];

const VERTICALS = [
  {
    title: "Retail",
    description: "Flagship stores, national rollout programs and brand-compliant fitouts - delivered on time and on spec.",
    href: "/retail",
  },
  {
    title: "Commercial",
    description: "Corporate workplaces, developer display suites, health, education and government - concept to completion.",
    href: "/commercial",
  },
  {
    title: "Hospitality",
    description: "Front-of-house design and back-of-house engineering. Commercial kitchens, licensed venues, QSR and hotels.",
    href: "/hospitality",
    accent: true,
  },
];

const DIFFERENTIATORS = [
  {
    title: "Joinery at our core",
    body: "Joinery is where we started. We manufacture in-house where it's economically suitable, backed by a vetted national network of 1,500+ suppliers and trades - premium product under one roof, at any scale.",
  },
  {
    title: "Senior-led delivery",
    body: "Your project is managed by a senior team member from brief through to handover - never handed off to juniors.",
  },
  {
    title: "Concept to completion",
    body: "Design coordination, procurement, trades, compliance, certification and handover - one team, one responsibility.",
  },
];

const CLIENT_LOGOS = [
  "Stylerunner", "Nudie Jeans", "Just Jeans", "Jay Jays", "Peter Alexander",
  "Dotti", "Smiggle", "Portmans", "Jacqui E", "Vodafone", "DISSH",
  "Kate Spade", "Hugo Boss", "Lovisa", "Honey Birdette", "X+O", "City Beach",
  "Grill'd", "Just Group", "Zambrero", "Industrie", "TAB",
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero carousel */}
      <HeroCarousel />

      {/* 2. Stats bar */}
      <StatsBar />

      {/* 2b. Awards banner */}
      <AwardsBanner />

      {/* 3. Featured project grid */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <SectionLabel>Featured projects</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl font-bold mt-4 text-black"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            Work we're proud of.
          </h2>
        </div>
        <ProjectGrid projects={FEATURED_PROJECTS} cols={3} />
      </section>

      {/* 4. Verticals */}
      <section className="bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <SectionLabel>What we do</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl font-bold mt-4 text-white"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            Three verticals. One standard.
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {VERTICALS.map((v) => (
              <VerticalCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Differentiators */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Why Hallmarc</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold mt-4 text-black"
              style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
            >
              Built differently.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title}>
                <div className="w-10 h-1 bg-terra mb-5" />
                <h3
                  className="text-xl font-bold text-black mb-3"
                  style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
                >
                  {d.title}
                </h3>
                <p className="text-ink text-sm leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Client logos */}
      <section className="bg-cream2 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
          <p className="text-xs tracking-[0.25em] uppercase text-grey text-center">
            Trusted by
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {CLIENT_LOGOS.map((name) => (
            <span key={name} className="text-grey text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* 7. CTA strip + form */}
      <section id="enquire" className="bg-terra py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            Ready to start?
          </h2>
          <p className="text-white/80 text-lg">
            Tell us about your project. We'll respond within one business day.
          </p>
        </div>
        <div className="max-w-xl mx-auto px-6 lg:px-8">
          <EnquiryForm enquiryType="General" />
          <p className="text-white/80 text-sm text-center mt-6">
            Prefer to email or call?{" "}
            <a href="mailto:hello@hallmarcfitouts.com.au" className="underline hover:text-white">hello@hallmarcfitouts.com.au</a>
            {" "}or{" "}
            <a href="tel:+61755715551" className="underline hover:text-white">(07) 5571 5551</a>
          </p>
        </div>
      </section>
    </>
  );
}
