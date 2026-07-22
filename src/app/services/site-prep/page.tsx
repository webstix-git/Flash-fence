"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPageCta from "@/components/InnerPageCta";

export default function SitePrepService() {
  return (
    <div className="inner-page">
      <PageHero
        title="Site Prep & Land Clearing"
        subtitle="Expert brush clearing, old fence demolition, and site grading. We prep the groundwork to ensure your new fence or construction layout stands on solid foundation."
        backgroundImage="/page-hero-banner.png"
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
                <div className="feature-item" id="land-clearing" style={{ scrollMarginTop: "6rem" }}>
                  <div>
                    <h3>Thick Brush &amp; Fence Line Clearing</h3>
                    <p>
                      We clear dense woods, wild growth, and branches along property borders to open up layout space for post placement.
                    </p>
                  </div>
                </div>

                <div className="feature-item" id="demolition" style={{ scrollMarginTop: "6rem" }}>
                  <div>
                    <h3>Old Fence Removal &amp; Demo</h3>
                    <p>
                      Demolishing weathered wood fences, chain link layouts, or concrete footings, hauling away debris, and filling empty holes.
                    </p>
                  </div>
                </div>

                <div className="feature-item" id="grading" style={{ borderBottom: "none", scrollMarginTop: "6rem" }}>
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
                src="/site-prep-excavation.png"
                alt="Site prep excavation with laser level and heavy equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="why-image-caption">
                <h4>Preparation that supports the whole project.</h4>
                <p>Site prep supports new construction, driveways, patios, additions, and long-term property improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InnerPageCta
        id="contact"
        title="Get your site ready for upgrades"
        description="Let us inspect your property lines and determine optimal prep steps. Complete our fast form to schedule a site review."
        buttonText="Get A Free Estimate"
      />
    </div>
  );
}
