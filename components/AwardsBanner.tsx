export default function AwardsBanner() {
  return (
    <section className="bg-terra py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center gap-3 text-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
          aria-hidden="true"
        >
          <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4z" />
          <path d="M17 4h3v2a3 3 0 0 1-3 3M7 4H4v2a3 3 0 0 0 3 3" />
        </svg>
        <p className="text-white text-sm lg:text-base font-medium tracking-wide">
          Winner — Best Fitout under $500,000, 2025 Interior Fitout Awards — Sweet As, Chadstone
        </p>
      </div>
    </section>
  );
}
