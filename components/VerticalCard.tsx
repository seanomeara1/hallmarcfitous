import Link from "next/link";

interface VerticalCardProps {
  title: string;
  description: string;
  href: string;
  accent?: boolean; // terracotta background
}

export default function VerticalCard({ title, description, href, accent = false }: VerticalCardProps) {
  return (
    <Link
      href={href}
      className={[
        "group flex flex-col justify-between p-8 lg:p-10 min-h-[280px] transition-all duration-200",
        accent ? "bg-terra hover:bg-terra/90" : "bg-dark hover:bg-dark/80",
      ].join(" ")}
    >
      {/* Terra accent line */}
      <div className={`w-10 h-1 mb-6 ${accent ? "bg-white/60" : "bg-terra"}`} />

      <div>
        <h3
          className={`text-2xl lg:text-3xl font-bold mb-3 ${accent ? "text-white" : "text-white"}`}
          style={{ fontFamily: "GT Eesti Display, Arial Black, sans-serif" }}
        >
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${accent ? "text-white/80" : "text-grey"}`}>
          {description}
        </p>
      </div>

      <p className={`text-sm font-medium mt-6 group-hover:underline ${accent ? "text-white" : "text-terra"}`}>
        View projects →
      </p>
    </Link>
  );
}
