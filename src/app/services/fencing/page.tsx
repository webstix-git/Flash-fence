"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Hammer, Wrench, MapPin, Layers, DoorOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPageCta from "@/components/InnerPageCta";

export default function FencingService() {
  return (
    <div className="inner-page">
      <PageHero
        title="Fencing Installation & Design"
        subtitle="We design and construct premium property boundaries built to secure your yard, safeguard pets, and provide absolute privacy. Dylan Gardow oversees every single post installation."
        backgroundImage="/gallery/gallery-02.png"
      >
        <div className="page-hero-actions">
          <a href="#contact" className="btn btn-primary">Get A Free Estimate</a>
          <Link href="/contact" className="btn btn-secondary">Request Call</Link>
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
                We construct boundaries that endure Wisconsin&apos;s extreme weather shifts. Every post hole is dug to deep industrial standards, set below the frost lines, and filled using commercial-grade techniques to prevent shifting or listing.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>
                <div className="feature-item">
                  <ShieldCheck size={24} className="flat-icon" />
                  <div>
                    <h3>Premium Vinyl Privacy</h3>
                    <p>
                      Engineered vinyl pickets and posts that require zero painting. They resist extreme winds, moisture, and fading, offering full visual isolation for backyards and residential structures.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <Hammer size={24} className="flat-icon" />
                  <div>
                    <h3>Custom Wood Picket &amp; Privacy</h3>
                    <p>
                      Constructed on-site from premium cedar or pressure-treated boards. Tailored to map your yard&apos;s natural slope with seamless grading transitions and built-to-last gate hardware.
                    </p>
                  </div>
                </div>

                <div className="feature-item" style={{ borderBottom: "none" }}>
                  <Wrench size={24} className="flat-icon" />
                  <div>
                    <h3>Chain Link &amp; Ornamental Steel</h3>
                    <p>
                      High-strength galvanized or black vinyl-coated chain link for secure property lines, alongside premium ornamental steel pickets for estate boundaries and commercial curb appeal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-image-panel why-image-panel--fit">
              <Image
                src="/gallery/gallery-06.png"
                alt="Completed vinyl fencing project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="why-image-caption">
                <h4>Built below the frost line.</h4>
                <p>Every post is set deep with commercial-grade techniques, backed by our 2-Year Craftsmanship Warranty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
            <span className="text-mono">Fence Types</span>
            <h2 className="heading-no-accent">Complete Fencing Scope</h2>
          </div>

          <div className="services-grid service-cards-home">
            <div className="service-card service-card-dark">
              <div className="service-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Premium Vinyl Privacy</h3>
              <p>Engineered vinyl pickets and posts that require zero painting. They resist extreme winds, moisture, and fading.</p>
            </div>

            <div className="service-card service-card-dark">
              <div className="service-icon-box">
                <Hammer size={24} />
              </div>
              <h3>Custom Wood Picket &amp; Privacy</h3>
              <p>Constructed on-site from premium cedar or pressure-treated boards tailored to your yard&apos;s natural slope.</p>
            </div>

            <div className="service-card service-card-dark">
              <div className="service-icon-box">
                <Wrench size={24} />
              </div>
              <h3>Chain Link &amp; Ornamental Steel</h3>
              <p>High-strength galvanized or black vinyl-coated chain link alongside premium ornamental steel pickets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div className="grid-service-fencing grid-service-fencing--image-left">
            <div className="why-image-panel why-image-panel--fit">
              <Image
                src="/gallery/gallery-02.png"
                alt="White vinyl privacy fence installation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
              <div className="why-image-caption">
                <h4>Layout first. Dig second.</h4>
                <p>Every job gets a walk-through on site before posts go in, including corners, gates, and slopes.</p>
              </div>
            </div>

            <div>
              <span className="text-mono">Installation Standards</span>
              <h2 className="heading-no-accent" style={{ fontSize: "2rem", marginBottom: "var(--space-md)" }}>
                How Your Fence Gets Built
              </h2>
              <p>
                A fence that lasts in Wisconsin starts with what happens underground. We dig every structural post hole to 48 inches, place the footing below the frost line, and backfill with drainage aggregate so posts are not heaving out of the ground come spring.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>
                <div className="feature-item">
                  <Layers size={24} className="flat-icon" />
                  <div>
                    <h3>Post Depth &amp; Footings</h3>
                    <p>
                      Structural posts are set 48 inches deep with concrete footings placed below the local frost line. That is the difference between a fence that stays straight for years and one that lists after the first hard winter.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <MapPin size={24} className="flat-icon" />
                  <div>
                    <h3>Layout Before We Dig</h3>
                    <p>
                      Dylan walks the property line with you before a single hole is drilled. Corners, gate swings, slope changes, and utility clearances get marked out upfront so the finished layout matches what you approved.
                    </p>
                  </div>
                </div>

                <div className="feature-item" style={{ borderBottom: "none" }}>
                  <DoorOpen size={24} className="flat-icon" />
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
        description="Complete our free estimate form. Dylan Gardow will text or call you directly to discuss layouts, post counts, and linear footage."
        buttonText="Request A Free Quote"
      />
    </div>
  );
}
