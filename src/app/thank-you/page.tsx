import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";
import { SITE_PHONE } from "@/lib/site";

export const metadata = {
  ...pageMetadata("/thank-you"),
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="inner-page">
      <JsonLd
        data={webPageJsonLd("/thank-you", [
          { name: "Home", path: "/" },
          { name: "Thank You", path: "/thank-you" },
        ])}
      />
      <PageHero
        eyebrow="Request Received"
        title="Thank You"
        subtitle="Your estimate request is in. I will text or call you shortly to talk through the project."
        backgroundImage="/page-hero-banner.png"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Thank You" },
        ]}
      />

      <section className="section-light thank-you-section">
        <div className="container">
          <div className="thank-you-card">
            <CheckCircle2 size={64} className="thank-you-icon" />
            <h2 className="heading-no-accent thank-you-heading">We Got Your Message</h2>
            <p className="thank-you-copy">
              Thanks for reaching out to Flash Fence. I review every request personally and usually respond the same
              day with next steps for your fencing or excavation project.
            </p>
            <p className="thank-you-copy">
              If you need to talk sooner, call or text anytime.
            </p>
            <div className="thank-you-actions">
              <a href="tel:715-299-0663" className="btn btn-primary">
                <Phone size={18} />
                Call {SITE_PHONE}
              </a>
              <Link href="/" className="btn btn-secondary">
                Back To Home
              </Link>
              <Link href="/gallery" className="btn btn-secondary">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
