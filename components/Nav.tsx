"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const INDUSTRIES = [
  { href: "/retail",      label: "Retail" },
  { href: "/commercial",  label: "Commercial" },
  { href: "/hospitality", label: "Hospitality" },
];

const NAV_LINKS = [
  { href: "/projects",  label: "Projects" },
  { href: "/partners",  label: "Partners" },
  { href: "/about",     label: "About" },
  { href: "/resources", label: "Resources" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const industriesActive = INDUSTRIES.some(
    ({ href }) => pathname === href || pathname.startsWith(href + "/")
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto h-14 pl-4 pr-3 flex items-center justify-between rounded-full bg-black/95 backdrop-blur-md ring-1 ring-white/15 shadow-lg shadow-black/40">

        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/hallmarc-logo-placeholder.png"
            alt="Hallmarc National Fitouts"
            width={30}
            height={30}
            className="rounded-sm"
          />
          <span
            className="text-white text-lg font-bold tracking-tight"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            hallmarc
          </span>
          <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase self-end mb-1 hidden sm:block">
            National Fitouts
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {/* Industries dropdown */}
          <div className="relative group">
            <button
              type="button"
              style={{ color: industriesActive ? "#B5502A" : "#FFFFFF" }}
              className="flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-70"
            >
              Industries
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-150">
              <div className="bg-black/95 backdrop-blur-md ring-1 ring-white/15 rounded-xl shadow-lg shadow-black/40 py-2 min-w-[170px]">
                {INDUSTRIES.map(({ href, label }) => {
                  const active = pathname === href || pathname.startsWith(href + "/");
                  return (
                    <Link
                      key={href}
                      href={href}
                      style={{ color: active ? "#B5502A" : "#FFFFFF" }}
                      className="block px-5 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                style={{ color: active ? "#B5502A" : "#FFFFFF" }}
                className="text-sm font-semibold transition-opacity hover:opacity-70"
              >
                {label}
              </Link>
            );
          })}

          <Link
            href="/#enquire"
            className="ml-1 bg-terra text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-terra/90 transition-colors"
          >
            Enquire
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-black/95 backdrop-blur-md ring-1 ring-white/10 shadow-lg">
          <div className="px-6 py-5 flex flex-col gap-1">
            <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-1 mb-1">Industries</p>
            {INDUSTRIES.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white text-base font-medium py-1.5 pl-2"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white text-base font-medium py-1.5"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#enquire"
              className="bg-terra text-white text-sm font-medium px-5 py-3 rounded-full text-center mt-3"
              onClick={() => setOpen(false)}
            >
              Enquire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
