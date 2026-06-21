import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black min-h-[70vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-32 text-center">
        <p className="text-terra text-sm tracking-[0.25em] uppercase mb-6">Error 404</p>
        <h1 className="text-white text-4xl sm:text-6xl mb-6">
          This page has moved on.
        </h1>
        <p className="text-grey text-lg mb-10 max-w-xl mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have been relocated. Let&rsquo;s
          get you back to the work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-terra text-white text-sm font-medium px-8 py-4 rounded-sm hover:bg-terra/90 transition-colors tracking-wide"
          >
            Back to home
          </Link>
          <Link
            href="/projects"
            className="border border-white/30 text-white text-sm font-medium px-8 py-4 rounded-sm hover:bg-white/10 transition-colors tracking-wide"
          >
            View our projects
          </Link>
        </div>
      </div>
    </div>
  );
}
