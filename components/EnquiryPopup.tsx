"use client";

import { useEffect, useState, useCallback } from "react";

type Step = "email" | "phone" | "callback" | "done";

const STORAGE_KEY = "hm_popup_v1";
const SUPPRESS_DAYS = 30;
const DELAY_MS = 30_000;

function suppressed(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const { until } = JSON.parse(raw);
    return typeof until === "number" && Date.now() < until;
  } catch {
    return false;
  }
}

function suppress() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ until: Date.now() + SUPPRESS_DAYS * 86_400_000 }),
    );
  } catch {
    /* ignore */
  }
}

async function postLead(body: Record<string, unknown>) {
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enquiryType: "General", source: "popup", ...body }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    suppress();
  }, []);

  useEffect(() => {
    if (suppressed()) return;

    let shown = false;
    const reveal = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      cleanup();
    };
    const timer = setTimeout(reveal, DELAY_MS);
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) reveal(); // exit-intent (cursor leaves toward tab bar)
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    function cleanup() {
      clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
    }
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("keydown", onKey);
    return () => {
      cleanup();
      document.removeEventListener("keydown", onKey);
    };
  }, [close]);

  async function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setError(false);
    const ok = await postLead({ email });
    setBusy(false);
    if (ok) setStep("phone"); else setError(true);
  }

  async function submitPhone(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setError(false);
    const ok = await postLead({ email, phone });
    setBusy(false);
    if (ok) setStep("callback"); else setError(true);
  }

  async function requestCallback(wantCallback: boolean) {
    setBusy(true);
    await postLead({ email, phone, callbackRequested: wantCallback });
    setBusy(false);
    suppress();
    setStep("done");
  }

  if (!open) return null;

  const input =
    "w-full bg-white border border-cream3 text-black text-sm px-4 py-3 rounded-sm placeholder:text-grey focus:outline-none focus:border-terra transition-colors";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Stay in touch with Hallmarc"
    >
      <div
        className="relative w-full max-w-md bg-cream rounded-lg shadow-2xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 text-grey hover:text-black p-2 leading-none text-xl"
        >
          ×
        </button>

        {step === "email" && (
          <form onSubmit={submitEmail}>
            <p className="text-xs tracking-[0.25em] uppercase text-terra mb-3">Stay in touch</p>
            <h2 className="text-2xl text-black mb-2">Planning a fitout?</h2>
            <p className="text-ink text-sm mb-5">
              Leave your email and we'll share how we deliver retail, commercial and hospitality
              projects, concept to completion.
            </p>
            <input
              type="email" required autoFocus value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address" aria-label="Email address" className={input}
            />
            {error && <p className="text-terra text-xs mt-2">Something went wrong. Please try again.</p>}
            <button
              type="submit" disabled={busy}
              className="w-full bg-terra text-white font-medium text-sm py-3.5 rounded-sm hover:bg-terra/90 transition-colors disabled:opacity-60 tracking-wide mt-4"
            >
              {busy ? "Sending..." : "Keep me posted"}
            </button>
            <p className="text-grey/80 text-[11px] mt-3 leading-relaxed">
              By submitting you agree to receive occasional emails from Hallmarc National Fitouts.
              You can unsubscribe at any time.
            </p>
          </form>
        )}

        {step === "phone" && (
          <form onSubmit={submitPhone}>
            <p className="text-xs tracking-[0.25em] uppercase text-terra mb-3">Almost there</p>
            <h2 className="text-2xl text-black mb-2">Thanks — you're on the list.</h2>
            <p className="text-ink text-sm mb-5">
              Add a mobile number if you'd like us to be able to reach you directly about your project.
            </p>
            <input
              type="tel" autoFocus value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile number (optional)" aria-label="Mobile number" className={input}
            />
            {error && <p className="text-terra text-xs mt-2">Something went wrong. Please try again.</p>}
            <button
              type="submit" disabled={busy}
              className="w-full bg-terra text-white font-medium text-sm py-3.5 rounded-sm hover:bg-terra/90 transition-colors disabled:opacity-60 tracking-wide mt-4"
            >
              {busy ? "Saving..." : "Continue"}
            </button>
            <button type="button" onClick={() => setStep("callback")} className="w-full text-grey text-xs mt-3 hover:text-black">
              Skip
            </button>
          </form>
        )}

        {step === "callback" && (
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-terra mb-3">One more thing</p>
            <h2 className="text-2xl text-black mb-2">Would you like a callback?</h2>
            <p className="text-ink text-sm mb-6">
              We can have a senior team member call you within 4 business hours to talk through your project.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => requestCallback(true)} disabled={busy}
                className="flex-1 bg-terra text-white font-medium text-sm py-3.5 rounded-sm hover:bg-terra/90 transition-colors disabled:opacity-60 tracking-wide"
              >
                Yes, call me
              </button>
              <button
                onClick={() => requestCallback(false)} disabled={busy}
                className="flex-1 border border-cream3 text-black font-medium text-sm py-3.5 rounded-sm hover:bg-cream2 transition-colors disabled:opacity-60 tracking-wide"
              >
                No thanks
              </button>
            </div>
          </div>
        )}

        {step === "done" && (
          <div className="text-center py-4">
            <p className="text-2xl text-black mb-2">You're all set.</p>
            <p className="text-ink text-sm mb-6">
              Thanks — we'll be in touch. For anything urgent, email{" "}
              <a href="mailto:hello@hallmarcfitouts.com.au" className="text-terra underline">hello@hallmarcfitouts.com.au</a>.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="bg-terra text-white font-medium text-sm px-8 py-3 rounded-sm hover:bg-terra/90 transition-colors tracking-wide"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
