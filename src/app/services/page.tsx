"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";
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
        backgroundImage="/gallery/gallery-02.png"
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
                  Meticulous fence installations. We design and set boundaries using industrial vinyl, classic cedar, chain link, and ornamental steel.
                </p>
                <Link href="/services/fencing" className="btn btn-secondary btn-compact">
                  View Fencing Services
                </Link>
              </div>
            </div>

            <div className="pillar-card">
              <Image
                src="/old-wood-fence.jpg"
                alt="Excavation and groundwork preparation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="pillar-bg"
              />
              <div className="pillar-content">
                <h3 className="pillar-title">Site Excavation</h3>
                <p className="pillar-desc">
                  Year-round groundwork, lot clearing, fence line prep, minor demolition, and concrete sub-base preparation built to withstand frost.
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
              Explore every service Flash Fence offers across fencing installation, excavation, and site prep, all supervised on site by owner Dylan Gardow.
            </p>
          </div>

          <div className="services-grid" style={{ marginTop: 0 }}>
            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--fencing">Fencing</span>
              <h3>Vinyl Fencing</h3>
              <p>Premium privacy and picket vinyl options. Resilient against wind, winter cold, and moisture. Never rot or fade.</p>
              <Link href="/services/fencing" className="blog-link">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--fencing">Fencing</span>
              <h3>Wood Fencing</h3>
              <p>Classic cedar privacy, spaced picket, and post-and-rail. Constructed on-site to match your yard&apos;s natural contours.</p>
              <Link href="/services/fencing" className="blog-link">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--fencing">Fencing</span>
              <h3>Chain Link &amp; Ornamental</h3>
              <p>Industrial galvanized or black vinyl-coated chain link for security, and high-strength ornamental steel fencing.</p>
              <Link href="/services/fencing" className="blog-link">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--excavation">Excavation</span>
              <h3>Land Clearing &amp; Storm Prep</h3>
              <p>Removing thick brush, small trees, storm damage, and old fencing. Clean line prep for property development.</p>
              <Link href="/services/site-prep" className="blog-link">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--excavation">Excavation</span>
              <h3>Site &amp; Concrete Prep</h3>
              <p>Grading, soil compaction, and digging out sub-bases for concrete pads, patios, driveways, or fence lines.</p>
              <Link href="/services/excavation" className="blog-link">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>

            <div className="service-card service-card-dark">
              <span className="what-we-do-tag what-we-do-tag--excavation">Excavation</span>
              <h3>Demolition &amp; Utilities</h3>
              <p>Small demolition projects, concrete slab breaking, and trenching for water line, sewer line, or drainage routing.</p>
              <Link href="/services/excavation" className="blog-link">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InnerPageCta
        title="Dylan Gardow&apos;s 2-Year Craftsmanship Warranty"
        description="Regardless of project scale or division, every post set and yard graded is backed by our local service guarantee. Owner Dylan Gardow oversees all layout details."
        buttonText="Request A Free Quote"
      />
    </div>
  );
}
