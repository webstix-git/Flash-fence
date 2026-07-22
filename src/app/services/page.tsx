"use client";

import Image from "next/image";
import Link from "next/link";
import InnerPageCta from "@/components/InnerPageCta";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ServicesIndex() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="What We Do"
        title="One Shop. Fence & Ground."
        subtitle="From custom fence installation to year-round excavation and site prep, we handle your exterior projects with industrial-grade precision, all under one owner-supervised crew."
        backgroundImage="/page-hero-banner.png"
        overlay="strong"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="section-dark">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
            <span className="text-mono">Professional Trades</span>
            <h2 className="heading-no-accent" style={{ display: "block", width: "max-content", marginLeft: "auto", marginRight: "auto" }}>
              Our Dual Specialties
            </h2>
            <p style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "var(--space-md)", color: "rgba(255,255,255,0.7)" }}>
              From initial site prep and clearing to the final post cap, we handle your exterior projects with complete industrial-grade precision.
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <Image
                src="/vinyl-fence-detail.jpg"
                alt="Fencing materials and installation detail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="pillar-bg"
              />
              <div className="pillar-content">
                <h3 className="pillar-title">Premium Fencing</h3>
                <p className="pillar-desc">
                  Meticulous fence installations. We design and install vinyl, wood, chain link, and steel and aluminum ornamental fencing in the styles and colors homeowners ask for most.
                </p>
                <Link href="/services/fencing" className="btn btn-secondary btn-compact">
                  View Fencing Services
                </Link>
              </div>
            </div>

            <div className="pillar-card">
              <Image
                src="/site-excavation.jpg"
                alt="Site excavation and grading preparation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="pillar-bg"
              />
              <div className="pillar-content">
                <h3 className="pillar-title">Site Excavation</h3>
                <p className="pillar-desc">
                  Year-round excavation, lot clearing, fence line prep, minor demolition, and concrete grading and prep work built to handle Wisconsin&apos;s toughest seasons.
                </p>
                <Link href="/services/excavation" className="btn btn-secondary btn-compact">
                  View Excavation Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line" />

      <section className="section-light" id="services">
        <div className="container">
          <div style={{ maxWidth: "650px", marginBottom: "var(--space-xl)" }}>
            <span className="text-mono">Service Directory</span>
            <h2 className="heading-no-accent">All Trades &amp; Capabilities</h2>
            <p>
              Explore every service we offer across fencing installation, excavation, and site prep.
            </p>
          </div>

          <div className="services-grid" style={{ marginTop: 0 }}>
            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--fencing">Fencing</span>
              <h3>Vinyl Fencing</h3>
              <p>Privacy, semi-privacy, picket, and ranch rail styles in white, tan, clay/adobe, and gray—plus wood-grain options where available.</p>
            </div>

            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--fencing">Fencing</span>
              <h3>Wood Fencing</h3>
              <p>Western red cedar and pressure-treated pine in privacy, spaced picket, and post-and-rail layouts matched to your yard.</p>
            </div>

            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--fencing">Fencing</span>
              <h3>Chain Link, Steel &amp; Aluminum</h3>
              <p>Galvanized, aluminized, and color-coated chain link in black or green, plus steel and aluminum ornamental options.</p>
            </div>

            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--excavation">Excavation</span>
              <h3>Land Clearing &amp; Storm Prep</h3>
              <p>Removing thick brush, small trees, storm damage, and old fencing. Clean line prep for property development.</p>
            </div>

            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--excavation">Excavation</span>
              <h3>Site &amp; Concrete Prep</h3>
              <p>Concrete grading and prep work, soil compaction, and digging out sub-bases for pads, patios, driveways, or fence lines.</p>
            </div>

            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--excavation">Excavation</span>
              <h3>Demolition &amp; Utilities</h3>
              <p>Small demolition projects, concrete removal, and trenching for underground utilities, sewer line, or drainage routing.</p>
            </div>
          </div>
        </div>
      </section>

      <InnerPageCta
        title="2-Year Craftsmanship Warranty"
        description="Regardless of project scale or division, every post set and yard graded is backed by our local service guarantee."
        buttonText="Get A Free Estimate"
      />
    </div>
  );
}
