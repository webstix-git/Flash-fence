"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPageCta from "@/components/InnerPageCta";
import FenceTypeShowcase from "@/components/FenceTypeShowcase";

export default function FencingService() {
  return (
    <div className="inner-page">
      <PageHero
        title="Fencing Installation & Design"
        subtitle="We design and construct premium property boundaries built to secure your yard and safeguard pets."
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
          { label: "Fencing" },
        ]}
      />

      <section className="section-light">
        <div className="container">
          <div className="grid-service-fencing grid-service-fencing--stretch">
            <div>
              <span className="text-mono">Product Offerings</span>
              <h2 className="heading-no-accent" style={{ fontSize: "2rem", marginBottom: "var(--space-md)" }}>Fencing Built For Performance</h2>
              <p>
                We build durable boundaries designed for Wisconsin conditions, using professional fence systems aligned with Merchants Metals product lines—vinyl, wood, chain link, and ornamental steel and aluminum—in the styles and colors homeowners ask for most. Every post is properly set with careful preparation and proven installation methods.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>
                <div className="feature-item" id="vinyl" style={{ scrollMarginTop: "6rem" }}>
                  <div>
                    <h3>Vinyl Fencing</h3>
                    <p>
                      Low-maintenance vinyl in privacy, semi-privacy, picket, and ranch rail styles. Common colors include white, tan, clay/adobe, and gray, with wood-grain finishes available where stocked. Built to resist Wisconsin weather without painting or staining.
                    </p>
                  </div>
                </div>

                <div className="feature-item" id="wood" style={{ scrollMarginTop: "6rem" }}>
                  <div>
                    <h3>Wood Fencing</h3>
                    <p>
                      Western red cedar and pressure-treated pine in privacy, spaced picket, and post-and-rail layouts. Constructed on-site to follow your yard&apos;s natural slope with durable gate hardware.
                    </p>
                  </div>
                </div>

                <div className="feature-item" id="chain-link" style={{ borderBottom: "none", scrollMarginTop: "6rem" }}>
                  <div>
                    <h3>Chain Link &amp; Ornamental</h3>
                    <p>
                      Galvanized, aluminized, and color-coated chain link in black or green, plus pre-slatted privacy options. Ornamental steel and aluminum systems for residential and commercial curb appeal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-image-panel why-image-panel--fit">
              <Image
                src="/fencing-vinyl-lattice.png"
                alt="White vinyl privacy fence with lattice top"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="why-image-caption">
                <h4>Built for long-term stability.</h4>
                <p>Every post is set deep with commercial-grade techniques, backed by our 2-Year Craftsmanship Warranty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FenceTypeShowcase />

      <section className="section-light">
        <div className="container">
          <div className="grid-service-fencing grid-service-fencing--image-left">
            <div className="why-image-panel why-image-panel--fit">
              <Image
                src="/fencing-chain-link.png"
                alt="Black vinyl-coated chain link fence installation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
              <div className="why-image-caption">
                <h4>Layout first. Build second.</h4>
                <p>Every job gets a walk-through on site before posts go in, including corners, gates, and slopes.</p>
              </div>
            </div>

            <div>
              <span className="text-mono">Installation Standards</span>
              <h2 className="heading-no-accent" style={{ fontSize: "2rem", marginBottom: "var(--space-md)" }}>
                How Your Fence Gets Built
              </h2>
              <p>
                A fence that lasts in Wisconsin starts with posts set the right way. We pound posts in properly and use concrete on needed structural posts so the fence stays straight and solid for years to come.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>
                <div className="feature-item">
                  <div>
                    <h3>Layout Before We Build</h3>
                    <p>
                      We walk the property line with you before posts go in. Corners, gate swings, slope changes, and utility clearances get marked out upfront so the finished layout matches what you approved.
                    </p>
                  </div>
                </div>

                <div className="feature-item" style={{ borderBottom: "none" }}>
                  <div>
                    <h3>Gates &amp; Hardware</h3>
                    <p>
                      Gates see more daily use than any other section of the fence. We size hinges and latches for the opening, set posts with extra reinforcement, and make sure the gate swings clear without dragging or binding over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InnerPageCta
        id="contact"
        title="Ready to secure your property?"
        description="Complete our free estimate form. We will text or call you directly to discuss layouts, post counts, and linear footage."
        buttonText="Get A Free Estimate"
      />
    </div>
  );
}
