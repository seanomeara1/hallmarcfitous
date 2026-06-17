import Image from "next/image";
import Link from "next/link";

export interface Project {
  src: string;
  alt: string;
  label: string;
  sublabel?: string;
  href?: string;
}

interface ProjectGridProps {
  projects: Project[];
  cols?: 2 | 3;
}

export default function ProjectGrid({ projects, cols = 3 }: ProjectGridProps) {
  const colClass = cols === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${colClass} gap-0.5`}>
      {projects.map((p) => {
        const inner = (
          <div className="relative aspect-[4/3] overflow-hidden group">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
              <div className="p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-base leading-tight" style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}>
                  {p.label}
                </p>
                {p.sublabel && (
                  <p className="text-cream3 text-xs tracking-[0.15em] uppercase mt-1">{p.sublabel}</p>
                )}
              </div>
            </div>
          </div>
        );
        return p.href ? (
          <Link key={p.src} href={p.href}>{inner}</Link>
        ) : (
          <div key={p.src}>{inner}</div>
        );
      })}
    </div>
  );
}
