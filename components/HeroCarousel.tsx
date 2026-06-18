"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

interface Slide {
  src: string;
  alt: string;
  caption?: string; // small label bottom-right
}

const SLIDES: Slide[] = [
  { src: "/images/terminus.png",         alt: "The Terminus Hotel fitout",         caption: "The Terminus Hotel — Yarrawonga, VIC" },
  { src: "/images/stylerunner_hero.jpg", alt: "Stylerunner retail fitout",          caption: "Stylerunner — Retail" },
  { src: "/images/commercial1.jpg",      alt: "DISSH Head Office commercial fitout", caption: "DISSH Head Office — Commercial" },
  { src: "/images/xo1.jpg",             alt: "X&O retail fitout",                  caption: "X&O — Retail" },
  { src: "/images/hero2.jpg",            alt: "Hallmarc in-house joinery factory",  caption: "In-house joinery manufacturing" },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 400);
  }, [transitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative min-h-[560px] lg:min-h-[700px] overflow-hidden flex items-center bg-black">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority
            quality={65}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
        </div>
      ))}

      {/* Content — sits above all slides */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 flex flex-col gap-6">
        <h1
          className="text-white text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight max-w-3xl leading-tight"
          style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
        >
          Spaces built to be remembered.
        </h1>
        <p className="text-white/75 text-lg lg:text-xl max-w-xl leading-relaxed">
          National fitouts for retail, commercial and hospitality — concept to completion.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <Link
            href="/#enquire"
            className="bg-terra text-white text-sm font-medium px-8 py-3.5 rounded-sm hover:bg-terra/90 transition-colors tracking-wide"
          >
            Start your project
          </Link>
          <Link
            href="/retail"
            className="bg-white text-black text-sm font-medium px-8 py-3.5 rounded-sm hover:bg-white/90 transition-colors tracking-wide"
          >
            View projects
          </Link>
        </div>
      </div>

      {/* Slide caption */}
      <div className="absolute bottom-16 right-6 lg:right-8 z-10">
        <p className="text-white/50 text-xs tracking-[0.15em] uppercase">
          {SLIDES[current].caption}
        </p>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300"
          >
            <span
              className={[
                "block rounded-full transition-all duration-300",
                i === current
                  ? "w-6 h-1.5 bg-terra"
                  : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70",
              ].join(" ")}
            />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-0.5 bg-white/10">
        <div
          key={current}
          className="h-full bg-terra origin-left"
          style={{ animation: `progress ${INTERVAL}ms linear` }}
        />
      </div>

      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
