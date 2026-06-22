import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Partners - Architects, Interior Designers & Project Managers",
  description:
    "A delivery partner for architects, interior designers and project managers. We build what you designed - no substitutions without approval.",
  alternates: { canonical: "/partners" },
};

const VALUE_PROPS = [
  {
    number: "01",
    title: "Protect design intent",
    body: "We build what you designed. Our senior trade-qualified team and joinery expertise - manufactured in-house where suitable, plus a vetted national fabricator network - mean no substitutions or shortcuts without your sign-off. Your drawings stay intact.",
  },
  {
    number: "02",
    title: "Early-stage input",
    body: "Involve us at concept stage. We provide buildability advice, cost guidance and programme certainty before you tender - so there are no surprises when the project goes live.",
  },
  {
    number: "03",
    title: "Referral revenue stream",
    body: "Refer a project and we handle the rest. We acknowledge your role throughout delivery and keep you informed at every stage. Your relationship with the client stays yours.",
  },
];

const HOW_IT_WORKS = [
  { step: "01", label: "Introduce yourself" },
  { step: "02", label: "We meet and align" },
  { step: "03", label: "Refer a live project" },
  { step: "04", label: "We deliver - you're kept in the loop" },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero - text left, image right */}
      <section className="bg-dark min-h-[520px] lg:min-h-[580px] relative flex items-center overflow-hidden">
        {/* Right-side image */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full">
          <Image
            src="/images/commercial1.jpg"
            alt="Commercial fitout - Hallmarc delivery partner"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center opacity-40 lg:opacity-100"
          />
          {/* Left fade gradient on lg */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent" />
        </div>

        {/* Text */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase text-terra mb-4">
              Architects · Interior Designers · Project Managers
            </p>
            <h1
              className="text-white text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6"
              style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
            >
              Your delivery partner.<br />Not another contractor.
            </h1>
            <p className="text-cream3 text-lg leading-relaxed">
              We build what design teams create. Senior-led, licence-backed, with joinery
              expertise to protect your intent from concept through to handover.
            </p>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Why partner with us</SectionLabel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {VALUE_PROPS.map((v) => (
              <div key={v.number} className="bg-cream2 p-8 lg:p-10">
                <p className="text-terra text-xs font-bold tracking-[0.2em] mb-4">{v.number}</p>
                <div className="w-8 h-0.5 bg-terra mb-6" />
                <h3
                  className="text-xl font-bold text-black mb-4"
                  style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-ink text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-[0.25em] uppercase text-terra mb-8">How it works</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((h) => (
              <div key={h.step} className="border-l-2 border-terra pl-5">
                <p className="text-terra text-xs font-bold tracking-[0.15em] mb-2">{h.step}</p>
                <p className="text-white text-sm font-medium leading-snug">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner enquiry form */}
      <section id="enquire" className="bg-cream2 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>Partner enquiry</SectionLabel>
            <h2
              className="text-3xl font-bold mt-4 text-black mb-3"
              style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
            >
              Let's talk about working together.
            </h2>
            <p className="text-ink">
              Tell us about your practice and the projects you're working on.
              We'll get back to you within one business day.
            </p>
          </div>
          <EnquiryForm enquiryType="Partner" />

          <p className="text-xs text-grey mt-8">
            Licensed in VIC, QLD, SA, ACT and WA.{" "}
            <span className="text-grey/60">Tasmania available on request.</span>
          </p>
        </div>
      </section>
    </>
  );
}
