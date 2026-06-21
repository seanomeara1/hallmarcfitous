import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "./projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected retail, commercial and hospitality fitout projects by Hallmarc National Fitouts — Stylerunner, DISSH, the Eveleigh, Zambrero, Terminus Hotel and more.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <p className="text-xs tracking-[0.25em] uppercase text-terra mb-4">Our work</p>
        <h1
          className="text-4xl lg:text-5xl font-bold text-black mb-4"
          style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
        >
          Projects
        </h1>
        <p className="text-grey text-lg max-w-2xl mb-12">
          A selection of retail, commercial and hospitality fitouts — concept to completion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block bg-white rounded-sm overflow-hidden border border-cream3 hover:border-terra transition-colors"
            >
              <div className="relative aspect-[4/3] bg-cream2 overflow-hidden">
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-terra text-[10px] tracking-[0.2em] uppercase mb-1">{p.vertical}</p>
                <h2
                  className="text-lg font-bold text-black"
                  style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
                >
                  {p.title}
                </h2>
                <p className="text-grey text-sm mt-1">{p.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
