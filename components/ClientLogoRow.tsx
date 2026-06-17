import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

interface ClientLogoRowProps {
  logos: Logo[];
  className?: string;
}

export default function ClientLogoRow({ logos, className = "" }: ClientLogoRowProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex gap-10 items-center animate-scroll">
        {/* Duplicate for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 w-24 h-12 relative grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
