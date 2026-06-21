import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hallmarc National Fitouts collects, uses, stores and protects your personal information in line with the Australian Privacy Act 1988.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const UPDATED = "21 June 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-36 pb-24">
        <p className="text-xs tracking-[0.25em] uppercase text-terra mb-4">Legal</p>
        <h1 className="text-4xl sm:text-5xl text-black mb-4">Privacy Policy</h1>
        <p className="text-sm text-grey mb-12">Last updated {UPDATED}</p>

        <div className="space-y-8 text-black/80 leading-relaxed">
          <section>
            <p>
              Hallmarc National Projects Australia Pty Ltd, trading as Hallmarc National Fitouts
              (&ldquo;Hallmarc&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), is
              committed to protecting your privacy. This policy explains how we collect, use, hold
              and disclose your personal information, and how we comply with the Australian Privacy
              Principles (APPs) under the <em>Privacy Act 1988</em> (Cth).
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-3">Information we collect</h2>
            <p className="mb-3">
              We collect personal information that is reasonably necessary to provide our fitout and
              project management services and to respond to your enquiries. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>your name, company, job title and contact details (email, phone, address);</li>
              <li>details of the project or enquiry you contact us about;</li>
              <li>correspondence and records of our communications with you; and</li>
              <li>
                technical information such as your IP address, browser type and pages visited, where
                you use our website.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-3">How we collect it</h2>
            <p>
              We collect personal information directly from you &mdash; for example when you submit
              an enquiry form, email us, call us, or engage us for a project. We may also collect
              information from third parties such as referral partners, architects and designers, or
              publicly available sources, where it is reasonable to do so.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-3">Why we collect and use it</h2>
            <p className="mb-3">We use your personal information to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>respond to your enquiries and provide quotes and proposals;</li>
              <li>deliver, manage and administer our services;</li>
              <li>maintain our client and partner relationships;</li>
              <li>send you relevant updates about our services (you can opt out at any time); and</li>
              <li>meet our legal, regulatory and insurance obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-3">Disclosure to third parties</h2>
            <p className="mb-3">
              We do not sell your personal information. We may share it with trusted service
              providers who help us operate our business and website, including our customer
              relationship management, hosting, image delivery and email providers. These providers
              are only permitted to use your information to perform services for us.
            </p>
            <p>
              Some of these providers may store or process data on servers located outside Australia.
              Where this occurs, we take reasonable steps to ensure your information is handled in a
              manner consistent with the Australian Privacy Principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-3">Cookies and website analytics</h2>
            <p>
              Our website may use cookies and similar technologies to help it function and to
              understand how visitors use it. You can disable cookies in your browser settings,
              although some parts of the site may not work as intended if you do.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-3">Storage and security</h2>
            <p>
              We take reasonable steps to protect your personal information from misuse, loss, and
              unauthorised access, modification or disclosure. We retain personal information only
              for as long as it is needed for the purposes described in this policy, or as required
              by law, after which we take reasonable steps to securely destroy or de-identify it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-3">Accessing and correcting your information</h2>
            <p>
              You may request access to the personal information we hold about you, and ask us to
              correct it if it is inaccurate, out of date or incomplete. To make a request, contact
              us using the details below. We will respond within a reasonable period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-3">Complaints</h2>
            <p>
              If you believe we have breached the Australian Privacy Principles, please contact us
              first so we can investigate and respond. If you are not satisfied with our response,
              you may lodge a complaint with the Office of the Australian Information Commissioner
              (OAIC) at{" "}
              <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-terra underline">
                oaic.gov.au
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-3">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The current version will always be
              available on this page, with the &ldquo;last updated&rdquo; date shown above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-3">Contact us</h2>
            <p className="mb-2">
              For any privacy questions or requests, please contact us:
            </p>
            <p className="leading-relaxed">
              Hallmarc National Fitouts<br />
              Unit 2/2 Inventory Court, Arundel QLD 4214<br />
              Email:{" "}
              <a href="mailto:hello@hallmarcfitouts.com.au" className="text-terra underline">
                hello@hallmarcfitouts.com.au
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+61755715551" className="text-terra underline">
                (07) 5571 5551
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
