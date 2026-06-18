import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Hallmarc National Fitouts — founded in 2016 by trade-qualified cabinet maker Marcus Hall. Senior-led retail, commercial and hospitality fitouts with in-house joinery. Cm3 certified.",
};

interface Member {
  name: string;
  role: string;
  bio: string;
  image?: string; // e.g. "/images/team/marcus.jpg"
}

const TEAM: Member[] = [
  {
    name: "Marcus Hall",
    role: "Managing Director & Founder",
    bio: "Trade-qualified cabinet maker and shopfitter who started on the tools at 17. Founded Hallmarc in 2016 to deliver fitouts with greater control, clearer communication and real accountability.",
  },
  {
    name: "Jade Hewett",
    role: "General Manager / Head of Estimating",
    bio: "Leads the business day-to-day and heads our estimating — bringing rigour and clarity from the first numbers through to delivery.",
  },
  {
    name: "Zoe Duncombe",
    role: "Project Manager",
    bio: "Manages projects end-to-end, keeping programs, trades and clients aligned through every stage of the build.",
  },
  {
    name: "Andy Farley",
    role: "Project Manager",
    bio: "Oversees delivery on the ground, holding sites to program and standard from fit-out through to handover.",
  },
  {
    name: "Searah Scott",
    role: "Project Coordinator",
    bio: "Keeps projects moving — coordinating documentation, approvals and the detail that keeps delivery on track.",
  },
  {
    name: "Jaz Vardey",
    role: "Project Coordinator",
    bio: "Supports project delivery and coordination, keeping communication clear across teams and trades.",
  },
  {
    name: "Carolyn Maroney",
    role: "Accounts Manager",
    bio: "Manages accounts and keeps the commercial side of every project running smoothly.",
  },
];

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("");
}

export default function AboutPage() {
  return (
    <>
      <HeroSection
        imageSrc="/images/hero2.jpg"
        imageAlt="Hallmarc in-house joinery workshop"
        eyebrow="About"
        headline="Built on experience. Driven by accountability."
        subline="Founded by a builder. Led by experience. Delivering fitouts the right way since 2016."
        primaryCTA={{ label: "Start your project", href: "#enquire" }}
        overlayOpacity={45}
      />

      {/* Company story */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionLabel>Our story</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl font-bold mt-4 mb-6 text-black"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            Fitout delivery, led by people who build.
          </h2>
          <div className="space-y-5 text-grey text-lg leading-relaxed">
            <p>
              Hallmarc National Fitouts was founded in 2016 on a simple belief — that fitout
              delivery should be precise, transparent, and led by people who have actually built
              things. We deliver turnkey retail, commercial and hospitality projects, licensed
              across Australia.
            </p>
            <p>
              What sets us apart is control. We combine senior-led project management with our own
              in-house joinery manufacturing, which means tighter quality control, faster lead
              times, and one team accountable from concept through to completion. No hand-offs to
              juniors, no substitutions without your approval.
            </p>
            <p>
              We&rsquo;re Cm3 certified and proud of a spotless safety record — zero site safety
              incidents across nine years of operation — and our work has been recognised at the
              Interior Fitout Awards, including the 2025 award for Best Retail Interior Fitout.
            </p>
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden bg-dark">
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-6xl font-bold text-terra/40"
                style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
              >
                MH
              </span>
            </div>
            {/* Replace placeholder above with: <Image src="/images/team/marcus.jpg" alt="Marcus Hall" fill className="object-cover" /> */}
          </div>
          <div>
            <SectionLabel>The founder</SectionLabel>
            <h2
              className="text-3xl lg:text-4xl font-bold mt-4 mb-6 text-white"
              style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
            >
              Marcus Hall
            </h2>
            <div className="space-y-5 text-cream3 text-base lg:text-lg leading-relaxed">
              <p>
                Born and raised in Yarrawonga, country Victoria, Marcus began his trade as a cabinet
                maker at just 17 in the UK. Over more than 22 years he honed his craft building
                custom joinery and delivering complex store fitouts for some of the world&rsquo;s
                best-known retailers — including IKEA, Sainsbury&rsquo;s and Marks &amp; Spencer —
                before moving into large-scale commercial and international retail builds.
              </p>
              <p>
                In 2016 he brought that experience home to found Hallmarc — with a commitment to
                greater control, clearer communication and a higher standard of accountability. That
                hands-on, trade-first foundation still defines how the whole team works today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>Our team</SectionLabel>
          <h2
            className="text-3xl lg:text-4xl font-bold mt-4 mb-3 text-black"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            An experienced, hands-on team.
          </h2>
          <p className="text-grey text-lg max-w-2xl mb-12">
            From first consultation through to final handover, you deal with one experienced team
            that keeps everything aligned.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((m) => (
              <div key={m.name} className="bg-white rounded-sm overflow-hidden border border-cream3">
                <div className="relative aspect-[4/5] bg-cream2">
                  {m.image ? (
                    <Image src={m.image} alt={m.name} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-5xl font-bold text-terra/30"
                        style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
                      >
                        {initials(m.name)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-black"
                    style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
                  >
                    {m.name}
                  </h3>
                  <p className="text-terra text-xs tracking-[0.15em] uppercase mt-1 mb-3">{m.role}</p>
                  <p className="text-grey text-sm leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility band */}
      <section className="bg-terra py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white text-lg lg:text-xl font-medium">
            Cm3 certified · Zero site safety incidents · Award-winning delivery · Licensed across Australia
          </p>
        </div>
      </section>
    </>
  );
}
