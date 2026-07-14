"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  ArrowRight,
  Check
} from "lucide-react";
import { GALLERY_PROJECTS } from "@/data/gallery-projects";
import { TESTIMONIALS } from "@/data/testimonials";
import GalleryGrid from "@/components/GalleryGrid";
import ReviewsBlock from "@/components/ReviewsBlock";

const HOMEPAGE_TESTIMONIALS = TESTIMONIALS.slice(0, 3);

const SERVICE_CITIES = [
  "Eau Claire & Altoona",
  "Chippewa Falls & Lake Hallie",
  "Menomonie & Dunn County",
  "Cadott & Fall Creek",
  "Bloomer & Colfax",
  "Augusta & Osseo"
];

// Accordion FAQs moved to /faq page

export default function Home() {
  const [galleryFilter, setGalleryFilter] = useState<"fencing" | "excavation">("fencing");

  const filteredProjects = GALLERY_PROJECTS.filter(
    (p) => p.category === galleryFilter
  ).slice(0, 6);

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Built-To-Last <br />
              <span style={{ color: "var(--color-primary)" }}>Fencing & Excavation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-subtitle"
            >
              High-performance property boundaries and groundwork built for Wisconsin winters. 
              Get perfectionist craftsmanship directly supervised by the owner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hero-actions"
            >
              <Link href="/contact" className="btn btn-primary">
                Get A Free Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-line"></div>

      {/* Why Flash Fence */}
      <section className="section-light" id="why-flash-fence">
        <div className="container">
          <div className="why-split">
            <div className="why-split-content">
              <span className="text-mono">Why Flash Fence</span>
              <h2>Reliable Is The Whole Point.</h2>
              <p className="why-split-intro">
                We&apos;re a local, owner-run shop. That means the person quoting your job is the person on site building it and standing behind it for years after.
              </p>

              <div className="why-stats-grid">
                <div>
                  <div className="why-stat-value">2-YR</div>
                  <div className="why-stat-title">Craftsmanship Warranty</div>
                  <p className="why-stat-desc">Every fence we set is backed for two full years of workmanship.</p>
                </div>
                <div>
                  <div className="why-stat-value">100%</div>
                  <div className="why-stat-title">Owner On Site</div>
                  <p className="why-stat-desc">Dylan Gardow runs each project personally, start to finish.</p>
                </div>
                <div>
                  <div className="why-stat-value">365</div>
                  <div className="why-stat-title">Willing to Work Year-Round</div>
                  <p className="why-stat-desc">Committed to getting the job done through Wisconsin&apos;s toughest seasons.</p>
                </div>
                <div>
                  <div className="why-stat-value">45MI</div>
                  <div className="why-stat-title">Local Radius</div>
                  <p className="why-stat-desc">Chippewa Valley born. We build to the line and sweat the details.</p>
                </div>
              </div>
            </div>

            <div className="why-image-panel">
              <Image
                src="/completed-vinyl-installation.jpg"
                alt="Flash Fence materials staged and ready on a job site"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="why-image-caption">
                <h4>Materials staged, job ready.</h4>
                <p>Organized sites, professional finishes, the way we&apos;d want it done at our own place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-line" style={{ backgroundColor: "#FFFFFF" }}></div>

      {/* Professional Trades */}
      <section className="section-dark" id="about">
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
            {/* Pillar 1: Fencing */}
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
                  Meticulous fence installations. We design and set boundaries using industrial vinyl, classic cedar, chain link, steel, and aluminum.
                </p>
                <Link href="/services/fencing" className="btn btn-secondary btn-compact">
                  View Fencing Services
                </Link>
              </div>
            </div>

            {/* Pillar 2: Excavation */}
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

      {/* Divider */}
      <div className="divider-line"></div>

      {/* Services */}
      <section className="section-light" id="services">
        <div className="container">
          <div style={{ maxWidth: "650px", marginBottom: "var(--space-xl)" }}>
            <span className="text-mono">What We Do</span>
            <h2>One Shop. Fence &amp; Ground.</h2>
            <p>
              From custom fence installation to year-round excavation and site prep, we handle your exterior projects with precision, all under one owner-supervised crew.
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
              <h3>Chain Link, Steel &amp; Aluminum</h3>
              <p>Industrial galvanized or black vinyl-coated chain link for security, plus steel and aluminum fencing options.</p>
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
              <p>Concrete grading and prep work, soil compaction, and digging out sub-bases for pads, patios, driveways, or fence lines.</p>
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

      {/* Where We Work */}
      <section className="section-dark" id="where-we-work">
        <div className="container">
          <div className="where-split">
            <div>
              <span className="text-mono">Where We Work</span>
              <h2>Eau Claire &amp; Chippewa Valley</h2>
              <div className="where-radius-badge">
                <MapPin size={14} />
                45-Mile Service Radius
              </div>
              <p style={{ maxWidth: "520px", marginBottom: 0 }}>
                Based in Eau Claire, Flash Fence serves the entire Chippewa Valley region year-round,
                clearing lines and prepping sites even through cold Wisconsin winters.
              </p>
              <ul className="where-cities">
                {SERVICE_CITIES.map((city) => (
                  <li key={city}>
                    <Check size={14} strokeWidth={2.5} />
                    {city}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Get A Free Quote
              </Link>
            </div>

            <div className="why-image-panel" style={{ aspectRatio: "4 / 3", minHeight: "auto" }}>
              <Image
                src="/vinyl-fence-detail.jpg"
                alt="Flash Fence installation in the Chippewa Valley"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="why-image-caption">
                <h4>Local crews, local knowledge.</h4>
                <p>We know Wisconsin frost depths, soil conditions, and property lines because we live here too.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-line"></div>

      {/* Project Gallery */}
      <section className="section-light" id="gallery">
        <div className="container">
          <div style={{ maxWidth: "650px", marginBottom: "var(--space-lg)" }}>
            <span className="text-mono">Completed Work</span>
            <h2>Project Gallery</h2>
            <p style={{ marginBottom: 0 }}>
              Browse our real on-site photography. We never use stock photos of owners or fake projects.
            </p>
          </div>

          <div className="gallery-filters" style={{ marginBottom: "var(--space-lg)" }}>
            <button
              className={`filter-btn ${galleryFilter === "fencing" ? "active" : ""}`}
              onClick={() => setGalleryFilter("fencing")}
            >
              Fencing Only
            </button>
            <button
              className={`filter-btn ${galleryFilter === "excavation" ? "active" : ""}`}
              onClick={() => setGalleryFilter("excavation")}
            >
              Excavation / Prep
            </button>
          </div>

          <GalleryGrid projects={filteredProjects} />

          <div style={{ textAlign: "center", marginTop: "var(--space-xl)" }}>
            <Link href="/gallery" className="btn btn-primary">
              View More Photos
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-dark reviews-section" id="reviews">
        <div className="container">
          <span className="text-mono">What Neighbors Say</span>
          <h2>Reviewed On Google &amp; Angi</h2>

          <ReviewsBlock testimonials={HOMEPAGE_TESTIMONIALS} columns={3} />
        </div>
      </section>

      {/* Divider */}
      <div className="divider-line" style={{ backgroundColor: "#FFFFFF" }}></div>

      {/* Blog */}
      <section className="section-light">
        <div className="container">
          <div className="testimonials-header" style={{ marginBottom: "var(--space-lg)" }}>
            <div>
              <span className="text-mono">Wisconsin Trade Insights</span>
              <h2>From The Blog</h2>
              <p style={{ maxWidth: "600px", marginBottom: 0 }}>
                Professional fencing tips and groundwork guidelines to prepare your Chippewa Valley property.
              </p>
            </div>
            <Link href="/blog" className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: "var(--space-sm)" }}>
              View Blog Index
            </Link>
          </div>

          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-header" style={{ position: "relative", height: "220px" }}>
                <span className="blog-tag">Fencing Value</span>
                <Image
                  src="/completed-vinyl-installation.jpg"
                  alt="Premium vinyl fence in Eau Claire backyard"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="blog-body">
                <span className="blog-meta-info">July 2026 | By Dylan Gardow</span>
                <h3 className="blog-title">How Frost Lines Affect Fence Post Stability in Wisconsin</h3>
                <p className="blog-desc">
                  Setting posts below the 4-foot frost line is crucial in Eau Claire. Learn how our setting methods prevent winter frost heave...
                </p>
                <Link href="/blog/frost-lines-stability" className="blog-link">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-header" style={{ position: "relative", height: "220px" }}>
                <span className="blog-tag">Site Prep</span>
                <Image
                  src="/old-wood-fence.jpg"
                  alt="Clear site preparation for fencing"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="blog-body">
                <span className="blog-meta-info">June 2026 | By Dylan Gardow</span>
                <h3 className="blog-title">Why Groundwork &amp; Site Prep dictates Your Fence Lifetime</h3>
                <p className="blog-desc">
                  Proper land clearing and excavation is essential before fence layout. Discover how proper drainage and clearing secures your boundary...
                </p>
                <Link href="/blog/groundwork-dictates-lifetime" className="blog-link">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" id="contact">
        <div className="container">
          <span className="text-mono">Get Started</span>
          <h2>Let&apos;s Get Your Project Moving</h2>
          <p className="cta-banner-desc">
            <span className="cta-banner-desc-line">Tell Dylan what you&apos;re planning and get a free, no-pressure estimate.</span>
            <span className="cta-banner-desc-line">Owner on site every job, from the first dig to the final post.</span>
          </p>

          <div className="cta-banner-actions">
            <a href="tel:715-299-0663" className="btn btn-primary">
              <Phone size={16} style={{ marginRight: "var(--space-xs)" }} />
              Call 715-299-0663
            </a>
            <Link href="/contact" className="btn btn-secondary">
              Get A Free Quote
            </Link>
          </div>

          <div className="cta-banner-features">
            <span className="cta-feature">
              <Check size={14} strokeWidth={2.5} />
              2-Year Craftsmanship Warranty
            </span>
            <span className="cta-feature">
              <Check size={14} strokeWidth={2.5} />
              Owner Dylan Gardow On Site
            </span>
            <span className="cta-feature">
              <Check size={14} strokeWidth={2.5} />
              Free Estimates
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
