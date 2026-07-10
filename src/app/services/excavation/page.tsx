"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPageCta from "@/components/InnerPageCta";

export default function ExcavationService() {
  return (
    <div className="inner-page">
      <PageHero
        title="Site Excavation & Groundwork"
        subtitle="Reliable, year-round digging, grading, line clearing, and storm cleanup. We bring high-performance machinery to handle heavy sub-base preparation for Wisconsin homeowners and builders."
        backgroundImage="/gallery/gallery-02.png"
      >
        <div className="page-hero-actions">
          <a href="#contact" className="btn btn-primary">Book Groundwork</a>
          <Link href="/contact" className="btn btn-secondary">Request Call</Link>
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
          <div className="grid-service-fencing" style={{ alignItems: "center" }}>
            <div>
              <span className="text-mono">Sub-Grade Quality</span>
              <h2 className="heading-no-accent" style={{ fontSize: "2rem", marginBottom: "var(--space-md)" }}>Groundwork Designed For Frost Resilience</h2>
              <p>
                In Wisconsin, soil shifts and frost heaves are the primary cause of structural damage. Our excavation team makes sure that all bases are dug deep, backfilled with appropriate drainage aggregate, and thoroughly compacted.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>
                <div className="feature-item">
                  <div>
                    <h3>Concrete sub-base preparation</h3>
                    <p>
                      Precision grading, compaction, and digging out sub-bases for patios, driveways, slab foundations, and fence layouts.
                    </p>
                  </div>
                </div>

                <div className="feature-item" style={{ borderBottom: "none" }}>
                  <div>
                    <h3>Demolition &amp; Land Clearing</h3>
                    <p>
                      Removing old fencing, breaking concrete pads, brush clearing, and trenching for utility water/sewer line prep.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-image-panel" style={{ aspectRatio: "4 / 3", minHeight: "auto" }}>
              <Image
                src="/gallery/gallery-10.png"
                alt="Excavation site preparation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="why-image-caption">
                <h4>Year-round excavation capability.</h4>
                <p>We handle sub-grade prep, trenching, and land clearing through every Wisconsin season.</p>
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
            <div className="service-card service-card-dark">
              <h3>Land &amp; Brush Clearing</h3>
              <p>Removing thick vegetation, storm debris, small trees, and stubborn stumps. Prepares clean layouts for fences or structures.</p>
            </div>

            <div className="service-card service-card-dark">
              <h3>Sub-Grade Compact</h3>
              <p>Thorough soil compaction and gravel grading to establish stable drainage layers before pouring concrete or asphalt.</p>
            </div>

            <div className="service-card service-card-dark">
              <h3>Utility Trenching</h3>
              <p>Digging out sewer, water, and electrical conduit lines. Insulated trenching set below frost lines for maximum safety.</p>
            </div>
          </div>
        </div>
      </section>

      <InnerPageCta
        id="contact"
        title="Need groundwork done right?"
        description="Our team handles excavation work year-round. Get in touch with Dylan Gardow to schedule a site overview and secure your estimate."
        buttonText="Request Excavation Estimate"
      />
    </div>
  );
}
