"use client";

import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPageCta from "@/components/InnerPageCta";

export default function SitePrepService() {
  return (
    <div className="inner-page">
      <PageHero
        title="Site Prep & Land Clearing"
        subtitle="Expert brush clearing, old fence demolition, and site grading. We prep the groundwork to ensure your new fence or construction layout stands on solid foundation."
        backgroundImage="/gallery/gallery-02.png"
      >
        <div className="page-hero-actions">
          <a href="#contact" className="btn btn-primary">Start Site Prep</a>
          <Link href="/contact" className="btn btn-secondary">Request Call</Link>
        </div>
      </PageHero>

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Site Prep" },
        ]}
      />

      <section className="section-light">
        <div className="container">
          <div className="grid-service-fencing grid-service-fencing--stretch">
            <div>
              <span className="text-mono">Groundwork Focus</span>
              <h2 className="heading-no-accent" style={{ fontSize: "2rem", marginBottom: "var(--space-md)" }}>Preparing Your Land For Construction</h2>
              <p>
                Before setting boundaries or pouring concrete, the site must be properly cleared and prepped. Roots, brush, old decaying posts, and uneven ground levels must be resolved to ensure the longevity of your property upgrades.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>
                <div className="feature-item">
                  <div>
                    <h3>Thick Brush &amp; Fence Line Clearing</h3>
                    <p>
                      We clear dense woods, wild growth, and branches along property borders to open up layout space for post placement.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div>
                    <h3>Old Fence Removal &amp; Demo</h3>
                    <p>
                      Demolishing weathered wood fences, chain link layouts, or concrete footings, hauling away debris, and filling empty holes.
                    </p>
                  </div>
                </div>

                <div className="feature-item" style={{ borderBottom: "none" }}>
                  <div>
                    <h3>Leveling &amp; Surface Grading</h3>
                    <p>
                      Minor slope contouring and leveling of topsoil to establish proper yard drainage and smooth post transitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-image-panel why-image-panel--fit">
              <Image
                src="/gallery/gallery-03.png"
                alt="Old wooden fence line before clearing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="why-image-caption">
                <h4>Clear the line before you build.</h4>
                <p>Proper site prep is the foundation for every fence that lasts decades in Wisconsin soil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
            <span className="text-mono">Site Prep Scope</span>
            <h2 className="heading-no-accent">Complete Land Clearing Services</h2>
          </div>

          <div className="services-grid service-detail-cards">
            <div className="service-card service-card-dark">
              <h3>Thick Brush &amp; Fence Line Clearing</h3>
              <p>We clear dense woods, wild growth, and branches along property borders to open up layout space for post placement.</p>
            </div>

            <div className="service-card service-card-dark">
              <h3>Old Fence Removal &amp; Demo</h3>
              <p>Demolishing weathered wood fences, chain link layouts, or concrete footings, hauling away debris, and filling empty holes.</p>
            </div>

            <div className="service-card service-card-dark">
              <h3>Leveling &amp; Surface Grading</h3>
              <p>Minor slope contouring and leveling of topsoil to establish proper yard drainage and smooth post transitions.</p>
            </div>
          </div>
        </div>
      </section>

      <InnerPageCta
        id="contact"
        title="Get your site ready for upgrades"
        description="Let Dylan Gardow inspect your property lines and determine optimal prep steps. Complete our fast form to schedule a site review."
        buttonText="Request Site Prep Estimate"
      />
    </div>
  );
}
