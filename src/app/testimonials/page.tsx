import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPageCta from "@/components/InnerPageCta";
import ReviewsBlock from "@/components/ReviewsBlock";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Flash Fence",
  description:
    "Read real Google reviews from Chippewa Valley homeowners who hired Flash Fence for fencing installation and excavation work.",
};

export default function TestimonialsPage() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="What Neighbors Say"
        title="Customer Reviews"
        subtitle="Real feedback from Wisconsin homeowners who trusted Flash Fence for fencing installation and site work across the Chippewa Valley."
        backgroundImage="/gallery/gallery-02.png"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
      />

      <section className="section-dark reviews-section">
        <div className="container">
          <span className="text-mono">Verified Feedback</span>
          <h2 className="heading-no-accent">Reviewed On Google &amp; Angi</h2>
          <p className="reviews-section-intro">
            Every review below comes from real customers. We are proud to earn trust through responsive communication and on-site craftsmanship.
          </p>

          <ReviewsBlock testimonials={TESTIMONIALS} columns={2} />
        </div>
      </section>

      <InnerPageCta
        title="Ready for your own 5-star experience?"
        description="Join homeowners across Eau Claire and the Chippewa Valley who trust Flash Fence for fencing and groundwork. Request your free estimate today."
        buttonText="Get A Free Quote"
      />
    </div>
  );
}
