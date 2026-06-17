import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Retail, Commercial & Hospitality Fitouts | Hallmarc Fitouts",
    template: "%s | Hallmarc Fitouts",
  },
  description:
    "Turnkey retail, commercial and hospitality fitouts — senior-led, with in-house joinery and licensed across Australia. Spaces built to be remembered.",
  metadataBase: new URL("https://www.hallmarcfitouts.com.au"),
  openGraph: {
    siteName: "Hallmarc Fitouts",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
