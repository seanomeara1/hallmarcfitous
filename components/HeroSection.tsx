import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  headline: string;
  subline?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  overlayOpacity?: number; // 0–100
  textAlign?: "left" | "center";
  minHeight?: string;
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  eyebrow,
  headline,
  subline,
  primaryCTA,
  secondaryCTA,
  overlayOpacity = 38,
  textAlign = "center",
  minHeight = "min-h-[520px] lg:min-h-[680px]",
}: HeroSectionProps) {
  const alignClass = textAlign === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <section className={`relative flex ${alignClass} justify-center ${minHeight} overflow-hidden`}>
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity / 100 }}
      />

      {/* Content */}
      <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 flex flex-col ${alignClass} gap-6`}>
        {eyebrow && (
          <p className="text-xs tracking-[0.3em] uppercase text-terra font-medium">
            {eyebrow}
          </p>
        )}
        <h1
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl"
          style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
        >
          {headline}
        </h1>
        {subline && (
          <p className="text-cream3 text-lg lg:text-xl max-w-xl leading-relaxed">
            {subline}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-wrap gap-4 mt-2">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="bg-terra text-white text-sm font-medium px-8 py-3.5 rounded-sm hover:bg-terra/90 transition-colors tracking-wide"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="border border-cream3 text-white text-sm font-medium px-8 py-3.5 rounded-sm hover:bg-white/10 transition-colors tracking-wide"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
