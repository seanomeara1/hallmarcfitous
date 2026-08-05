"use client";

import { useEffect, useState } from "react";

interface EnquiryFormProps {
  enquiryType: "Retail" | "Commercial" | "Hospitality" | "Partner" | "General";
}

type Status = "idle" | "submitting" | "success" | "error";

function getUTMParams() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  return {
    utmCampaign: p.get("utm_campaign") ?? undefined,
    utmMedium:   p.get("utm_medium") ?? undefined,
    utmSource:   p.get("utm_source") ?? undefined,
  };
}

export default function EnquiryForm({ enquiryType }: EnquiryFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [utms, setUtms] = useState<Record<string, string | undefined>>({});

  useEffect(() => {
    setUtms(getUTMParams());
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);
    const body = {
      firstName:          fd.get("firstName") as string,
      lastName:           fd.get("lastName") as string,
      email:              fd.get("email") as string,
      phone:              fd.get("phone") as string,
      projectDescription: fd.get("projectDescription") as string,
      enquiryType,
      source:             "website" as const,
      ...utms,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        if (typeof window !== "undefined") {
          const w = window as unknown as { gtag?: (...args: unknown[]) => void };
          w.gtag?.("event", "generate_lead", { enquiry_type: enquiryType, source: "website" });
        }
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-cream2 border border-cream3 rounded-sm p-8 text-center">
        <p className="text-black font-bold text-lg mb-2">Thanks - we'll be in touch within one business day.</p>
        <p className="text-grey text-sm">Marcus or a senior team member will reach out directly.</p>
      </div>
    );
  }

  const inputClass = "w-full bg-white border border-cream3 text-black text-sm px-4 py-3 rounded-sm placeholder:text-grey focus:outline-none focus:border-terra transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="firstName" required placeholder="First name" aria-label="First name" autoComplete="given-name" className={inputClass} />
        <input name="lastName"  placeholder="Last name"  aria-label="Last name" autoComplete="family-name" className={inputClass} />
      </div>
      <input name="email" type="email" required placeholder="Email address" aria-label="Email address" autoComplete="email" className={inputClass} />
      <input name="phone" type="tel" placeholder="Phone number" aria-label="Phone number" autoComplete="tel" className={inputClass} />
      <textarea
        name="projectDescription"
        placeholder="Tell us about your project - location, scope, timeline..."
        aria-label="Tell us about your project"
        rows={4}
        className={inputClass + " resize-none"}
      />

      {status === "error" && (
        <p className="text-terra text-sm">
          Something went wrong. Please email us directly at{" "}
          <a href="mailto:hello@hallmarcfitouts.com.au" className="underline">
            hello@hallmarcfitouts.com.au
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-terra text-white font-bold text-base py-4 rounded-sm shadow-sm hover:bg-terra/90 hover:shadow-md active:scale-[0.99] transition-all disabled:opacity-60 tracking-wide flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Send enquiry
            <span aria-hidden="true" className="text-lg leading-none">&rarr;</span>
          </>
        )}
      </button>
    </form>
  );
}
