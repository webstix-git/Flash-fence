"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Award, CheckCircle, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

const SERVICE_CITIES = [
  "Eau Claire & Altoona",
  "Chippewa Falls & Lake Hallie",
  "Menomonie & Dunn County",
  "Cadott & Fall Creek",
  "Bloomer & Colfax",
  "Augusta & Osseo",
];

export default function About() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="About Flash Fence"
        title="Perfectionist Quality Built For The Chippewa Valley"
        backgroundImage="/completed-vinyl-installation.jpg"
        tall
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <section className="section-dark">
        <div className="container">
          <div className="grid-about-intro">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-no-accent" style={{ fontSize: "2rem", marginBottom: "var(--space-md)" }}>The Owner On-Site Promise</h2>
              <p>
                In the modern contracting industry, it is far too common for business owners to sell a job and then pass it off to sub-contractors or unsupervised crews. Dylan Gardow built Flash Fence to break that cycle. 
              </p>
              <p>
                <strong>Dylan is always on site.</strong> From laying out the post boundaries to driving the post holes and setting structural vinyl and wood pickets, Dylan leads the installation himself. This hands-on management guarantees that no corners are cut, post depths meet frost constraints, and the site is left immaculate.
              </p>
              <p>
                Our reputation is anchored in precision. We refuse to run cluttered layouts or deliver subpar results, utilizing project photos of our actual installations rather than generic stock imagery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="why-image-panel"
              style={{ aspectRatio: "4 / 3", minHeight: "auto" }}
            >
              <Image
                src="/completed-vinyl-installation.jpg"
                alt="Flash Fence finished white vinyl privacy fence"
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
            <span className="text-mono">Unmatched Standards</span>
            <h2 className="heading-no-accent" style={{ display: "block", width: "max-content", marginLeft: "auto", marginRight: "auto" }}>
              Our Foundations of Trust
            </h2>
          </div>

          <div className="services-grid service-cards-home">
            <div className="service-card service-card-dark">
              <div className="service-icon-box">
                <ShieldCheck size={40} />
              </div>
              <h3>2-Year Workmanship Warranty</h3>
              <p>
                We back our boundaries with a comprehensive 2-Year Craftsmanship Warranty. If a post tilts or gate hardware binds due to installation methods, we resolve it at zero cost.
              </p>
            </div>

            <div className="service-card service-card-dark">
              <div className="service-icon-box">
                <Award size={40} />
              </div>
              <h3>Perfectionist Standards</h3>
              <p>
                From custom setting post holes to dealing with tough Wisconsin soil elevations, we ensure every post cap is level and every rail is locked securely.
              </p>
            </div>

            <div className="service-card service-card-dark">
              <div className="service-icon-box">
                <UserCheck size={40} />
              </div>
              <h3>Wisconsin Born & Bred</h3>
              <p>
                We know local property boundaries, pet safety guidelines, Chippewa Valley frost depths, and building codes. We are a part of the local Eau Claire community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="where-split">
            <div>
              <span className="text-mono">Service Area Radius</span>
              <h2 className="heading-no-accent">Eau Claire &amp; Chippewa Valley</h2>
              <div className="where-radius-badge">
                <MapPin size={14} />
                45-Mile Service Radius
              </div>
              <p style={{ maxWidth: "520px", marginBottom: 0 }}>
                Based in Eau Claire, WI, Flash Fence serves a <strong>45-mile service radius</strong> covering the entire Chippewa Valley region. We operate year-round, meaning we clear lines and prep sites even through cold Wisconsin winters.
              </p>
              <ul className="where-cities">
                {SERVICE_CITIES.map((city) => (
                  <li key={city}>
                    <CheckCircle size={16} />
                    {city}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary">
                Start Your Quote
              </Link>
            </div>

            <div className="why-image-panel" style={{ aspectRatio: "4 / 3", minHeight: "auto" }}>
              <Image
                src="/gallery/gallery-02.png"
                alt="Flash Fence vinyl installation in the Chippewa Valley"
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
    </div>
  );
}
