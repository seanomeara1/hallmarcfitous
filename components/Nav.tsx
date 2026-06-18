"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/retail",      label: "Retail" },
  { href: "/commercial",  label: "Commercial" },
  { href: "/hospitality", label: "Hospitality" },
  { href: "/partners",    label: "Partners" },
  { href: "/resources",   label: "Resources" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto h-14 pl-4 pr-3 flex items-center justify-between rounded-full bg-black/95 backdrop-blur-md ring-1 ring-white/15 shadow-lg shadow-black/40">

        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/hallmarc-logo-placeholder.png"
            alt="Hallmarc Fitouts"
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
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                style={{ color: active ? "#B5502A" : "#FFFFFF" }}
                className="text-sm font-semibold transition-opacity relative hover:opacity-70"
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
          <div className="px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white text-base font-medium py-1"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#enquire"
              className="bg-terra text-white text-sm font-medium px-5 py-3 rounded-full text-center mt-1"
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
