"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";

interface Slide {
  src: string;
  alt: string;
  caption?: string; // small label bottom-right
}

const SLIDES: Slide[] = [
  { src: "/images/zambrero-drivethrough.jpg", alt: "Zambrero drive-through fitout",     caption: "Zambrero Drive-Through — QSR" },
  { src: "/images/terminus.jpg",            alt: "The Terminus Hotel fitout",          caption: "The Terminus Hotel — Yarrawonga, VIC" },
  { src: "/images/stylerunner_hero.jpg",    alt: "Stylerunner retail fitout",          caption: "Stylerunner — Retail" },
  { src: "/images/commercial1.jpg",         alt: "DISSH Head Office commercial fitout", caption: "DISSH Head Office — Commercial" },
  { src: "/images/xo1.jpg",                 alt: "X&O retail fitout",                  caption: "X&O — Retail" },
  { src: "/images/hero2.jpg",               alt: "Hallmarc in-house joinery factory",  caption: "In-house joinery manufacturing" },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
  }, []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);

  // Auto-advance. Keyed on `current` so the timer restarts after any manual
  // change (tap/swipe/dot) — and uses a functional update so it never stalls.
  // Skipped for visitors who prefer reduced motion.
  useEffect(() => {
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = setTimeout(next, INTERVAL);
    return () => clearTimeout(timer);
  }, [current, next]);

  // Tap/click or swipe-left → next, swipe-right → prev. Pointer events cover
  // mouse, touch and pen, so this works on desktop and mobile alike. Vertical
  // drags are ignored so the page can still scroll normally.
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  function onPointerDown(e: React.PointerEvent) {
    dragStart.current = { x: e.clientX, y: e.clientY };
  }
  function onPointerUp(e: React.PointerEvent) {
    const start = dragStart.current;
    if (!start) return;
    dragStart.current = null;
    // Don't hijack clicks/taps on the buttons or dots.
    if ((e.target as HTMLElement).closest("a, button")) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 12) return; // vertical scroll
    if (dx > 40) prev();
    else next(); // swipe-left or tap/click
  }

  return (
    <section
      className="relative min-h-[560px] lg:min-h-[700px] overflow-hidden flex items-center bg-black select-none cursor-pointer"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
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
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
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
            href="/projects"
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
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            className="p-2 -m-1 transition-all duration-300"
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
