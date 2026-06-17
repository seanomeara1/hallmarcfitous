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
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black h-14 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between">

        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/hallmarc-logo-placeholder.png"
            alt="Hallmarc"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <span
            className="text-white text-lg font-bold tracking-tight"
            style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
          >
            hallmarc
          </span>
          <span className="text-grey text-[10px] tracking-[0.2em] uppercase self-end mb-0.5 hidden sm:block">
            Fitouts
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "text-sm font-medium transition-colors relative pb-0.5",
                  active
                    ? "text-terra after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-terra"
                    : "text-cream3 hover:text-white",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/#enquire"
            className="ml-4 bg-terra text-white text-sm font-medium px-5 py-2 rounded-sm hover:bg-terra/90 transition-colors"
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
        <div className="absolute top-14 left-0 w-full bg-black border-t border-dark md:hidden">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-cream3 text-base font-medium py-1"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#enquire"
              className="bg-terra text-white text-sm font-medium px-5 py-3 rounded-sm text-center mt-2"
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
