import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "../projects";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title} — ${p.vertical} Fitout`;
  return {
    title,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      title,
      description: p.summary,
      url: `/projects/${p.slug}`,
      type: "article",
      images: p.images[0] ? [{ url: p.images[0], alt: p.title }] : undefined,
    },
  };
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <h2 className="text-xs tracking-[0.25em] uppercase text-terra mb-2 font-display">{label}</h2>
      <p className="text-ink text-lg leading-relaxed">{body}</p>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-black overflow-hidden">
        <Image
          src={p.images[0]}
          alt={p.title}
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-12 pt-32">
          <p className="text-terra text-xs tracking-[0.3em] uppercase mb-3">{p.vertical}</p>
          <h1
            className="text-white text-4xl lg:text-6xl font-bold"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            {p.title}
          </h1>
          <p className="text-cream3 text-lg mt-3">{p.location}</p>
        </div>
      </section>

      {/* Details */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs tracking-[0.25em] uppercase text-terra mb-2 font-display">Scope</h2>
          <p className="text-black text-lg mb-12">{p.scope}</p>
          <div className="space-y-10">
            <Block label="The challenge" body={p.challenge} />
            <Block label="The Hallmarc solution" body={p.solution} />
            <Block label="The outcome" body={p.outcome} />
          </div>
        </div>
      </section>

      {/* Video */}
      {p.video && (
        <section className="bg-black py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="relative aspect-video rounded-sm overflow-hidden">
              <iframe
                src={p.video}
                title={`${p.title} project overview`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {p.images.length > 1 && (
        <section className="bg-cream2 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {p.images.slice(1).map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream3">
                <Image
                  src={src}
                  alt={`${p.title} — image ${i + 2}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-terra py-16">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="text-white text-3xl font-bold mb-3"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            Planning a similar project?
          </h2>
          <p className="text-white/85 mb-6">
            Let&rsquo;s discuss how we can deliver your next space with the same clarity and precision.
          </p>
          <Link
            href="/#enquire"
            className="inline-block bg-white text-black text-sm font-medium px-8 py-3.5 rounded-sm hover:bg-white/90 transition-colors tracking-wide"
          >
            Start the conversation
          </Link>
        </div>
      </section>

      <div className="bg-cream py-8 text-center">
        <Link href="/projects" className="text-terra text-sm font-medium hover:underline">
          ← All projects
        </Link>
      </div>
    </main>
  );
}
