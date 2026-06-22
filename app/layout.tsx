import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const TITLE = "Retail, Commercial & Hospitality Fitouts | Hallmarc National Fitouts";
const DESC =
  "Turnkey retail, commercial and hospitality fitouts — senior-led, with joinery at our core and licensed across Australia. Spaces built to be remembered.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s | Hallmarc National Fitouts",
  },
  description: DESC,
  metadataBase: new URL("https://www.hallmarcfitouts.com.au"),
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Hallmarc National Fitouts",
    title: TITLE,
    description: DESC,
    url: "https://www.hallmarcfitouts.com.au",
    locale: "en_AU",
    type: "website",
    images: [
      { url: "/images/stylerunner_hero.jpg", width: 1200, height: 630, alt: "Hallmarc National Fitouts" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Turnkey retail, commercial and hospitality fitouts, licensed across Australia.",
    images: ["/images/stylerunner_hero.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Hallmarc National Fitouts",
  legalName: "Hallmarc National Projects Australia Pty Ltd",
  url: "https://www.hallmarcfitouts.com.au",
  logo: "https://www.hallmarcfitouts.com.au/images/hallmarc-logo-placeholder.png",
  image: "https://www.hallmarcfitouts.com.au/images/stylerunner_hero.jpg",
  slogan: "Spaces built to be remembered",
  description:
    "Turnkey retail, commercial and hospitality fitouts, senior-led with joinery at our core and licensed across Australia.",
  telephone: "+61755715551",
  email: "hello@hallmarcfitouts.com.au",
  foundingDate: "2016",
  founder: { "@type": "Person", name: "Marcus Hall" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 2/2 Inventory Court",
    addressLocality: "Arundel",
    addressRegion: "QLD",
    postalCode: "4214",
    addressCountry: "AU",
  },
  areaServed: ["QLD", "NSW", "VIC", "SA", "ACT", "WA"],
  sameAs: [
    "https://www.instagram.com/hallmarcnationalfitouts/",
    "https://www.facebook.com/hallmarcnp/",
    "https://www.linkedin.com/company/hallmarc-national-fitouts",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
