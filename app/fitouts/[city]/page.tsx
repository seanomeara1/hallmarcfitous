import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import SectionLabel from "@/components/SectionLabel";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";
import { LOCATIONS, getLocation } from "../locations";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};
  return {
    title: loc.title,
    description: loc.metaDescription,
    alternates: { canonical: `/fitouts/${loc.slug}` },
    openGraph: {
      title: loc.title,
      description: loc.metaDescription,
      url: `/fitouts/${loc.slug}`,
      type: "website",
      images: [{ url: loc.heroImage, alt: loc.heroAlt }],
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const base = "https://www.hallmarcfitouts.com.au";
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Retail, commercial and hospitality fitouts",
    name: loc.h1,
    description: loc.metaDescription,
    url: `${base}/fitouts/${loc.slug}`,
    areaServed: { "@type": "City", name: `${loc.city}, ${loc.state}` },
    provider: {
      "@type": "GeneralContractor",
      name: "Hallmarc National Fitouts",
      url: base,
      telephone: "+61755715551",
    },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: `Fitouts ${loc.city}`, item: `${base}/fitouts/${loc.slug}` },
    ],
  };

  return (
    <>
      <HeroSection
        imageSrc={loc.heroImage}
        imageAlt={loc.heroAlt}
        eyebrow={`${loc.city}, ${loc.state}`}
        headline={loc.h1}
        subline="Retail, commercial and hospitality fitouts, concept to completion."
        primaryCTA={{ label: "Start your project", href: "#enquire" }}
        overlayOpacity={40}
      />

      {/* Intro */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionLabel>{`Fitouts in ${loc.city}`}</SectionLabel>
          <div className="mt-4 space-y-5">
            {loc.intro.map((p, i) => (
              <p key={i} className="text-ink text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/retail" className="text-terra font-medium hover:underline">Retail fitouts →</Link>
            <Link href="/commercial" className="text-terra font-medium hover:underline">Commercial fitouts →</Link>
            <Link href="/hospitality" className="text-terra font-medium hover:underline">Hospitality fitouts →</Link>
            <Link href="/national-rollout" className="text-terra font-medium hover:underline">National rollouts →</Link>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="bg-cream2 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel>{`What we deliver in ${loc.city}`}</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {loc.verticals.map((v) => (
              <div key={v.title}>
                <div className="w-10 h-1 bg-terra mb-5" />
                <h2
                  className="text-xl font-bold text-black mb-3"
                  style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
                >
                  {v.title}
                </h2>
                <p className="text-ink text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local proof */}
      {loc.proof.length > 0 && (
        <section className="bg-cream py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionLabel>{`${loc.city} projects`}</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {loc.proof.map((pr) => (
                <Link
                  key={pr.slug + pr.where}
                  href={`/projects/${pr.slug}`}
                  className="block border border-cream3 rounded-sm p-6 hover:border-terra transition-colors"
                >
                  <p className="text-xs tracking-[0.2em] uppercase text-grey mb-2">{pr.where}</p>
                  <h3
                    className="text-lg font-bold text-black mb-2"
                    style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
                  >
                    {pr.title}
                  </h3>
                  <p className="text-ink text-sm leading-relaxed mb-3">{pr.blurb}</p>
                  <span className="text-terra text-sm font-medium">View project →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQ items={loc.faqs} heading={`Fitouts in ${loc.city} — FAQs`} />

      {/* Enquiry */}
      <section id="enquire" className="bg-cream2 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>Get in touch</SectionLabel>
            <h2
              className="text-3xl font-bold mt-4 text-black mb-3"
              style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
            >
              {`Planning a fitout in ${loc.city}?`}
            </h2>
            <p className="text-ink">Tell us about your project and a senior team member will be in touch.</p>
          </div>
          <EnquiryForm enquiryType="General" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}
