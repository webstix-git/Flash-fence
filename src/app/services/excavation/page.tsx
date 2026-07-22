"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPageCta from "@/components/InnerPageCta";

export default function ExcavationService() {
  return (
    <div className="inner-page">
      <PageHero
        title="Site Excavation & Groundwork"
        subtitle="Reliable, year-round land clearing, grading, and site preparation. From land clearing to site preparation all the way to the finish touches of the restoration of the property."
        backgroundImage="/excavation-banner.png"
      >
        <div className="page-hero-actions">
          <a href="/contact" className="btn btn-primary">Get A Free Estimate</a>
          <a href="tel:715-299-0663" className="btn btn-secondary">Request Call</a>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Excavation" },
        ]}
      />

      <section className="section-light">
        <div className="container">
          <div className="grid-service-fencing grid-service-fencing--stretch">
            <div>
              <span className="text-mono">Sub-Grade Quality</span>
              <h2 className="heading-no-accent" style={{ fontSize: "2rem", marginBottom: "var(--space-md)" }}>Groundwork Prepared the Right Way</h2>
              <p>
                Quality site preparation starts with proper excavation and grading and the use of the right drainage systems.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>
                <div className="feature-item" id="concrete-prep" style={{ borderBottom: "none", scrollMarginTop: "6rem" }}>
                  <div>
                    <h3>Concrete grading and prep work</h3>
                    <p>
                      Precision grading and necessary soil corrections dug out for patios, driveways, and concrete slabs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-image-panel why-image-panel--fit">
              <Image
                src="/excavation-first-section.png"
                alt="Site grading and excavation with skid steer and surveying equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="why-image-caption">
                <h4>Ready when your project is.</h4>
                <p>We handle site preparation and land clearing year-round whenever your project needs it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
            <span className="text-mono">Year-Round Capabilities</span>
            <h2 className="heading-no-accent">Complete Excavation Scope</h2>
          </div>

          <div className="services-grid service-detail-cards">
            <div className="service-card service-card-dark" id="land-clearing" style={{ scrollMarginTop: "6rem" }}>
              <h3>Land &amp; Brush Clearing</h3>
              <p>Removing thick vegetation, storm debris, small trees, and stubborn stumps. Prepares clean layouts for fences or structures.</p>
            </div>

            <div className="service-card service-card-dark" id="compaction" style={{ scrollMarginTop: "6rem" }}>
              <h3>Sub-Grade Compact</h3>
              <p>Thorough soil compaction and gravel grading to establish stable drainage layers before pouring concrete or asphalt.</p>
            </div>

            <div className="service-card service-card-dark" id="utilities" style={{ scrollMarginTop: "6rem" }}>
              <h3>Utility Trenching</h3>
              <p>Digging out sewer, water, and electrical conduit lines.</p>
            </div>
          </div>
        </div>
      </section>

      <InnerPageCta
        id="contact"
        title="Need groundwork done right?"
        description="We handle excavation work year-round. Get in touch to schedule a site overview and secure your estimate."
        buttonText="Get A Free Estimate"
      />
    </div>
  );
}
