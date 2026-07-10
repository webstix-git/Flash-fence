"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, User, Calendar, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function BlogPost2() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Site Prep & Excavation"
        title="Why Groundwork & Site Prep Dictates Your Fence Lifetime"
        backgroundImage="/old-wood-fence.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Site Prep & Longevity" },
        ]}
      />

      <section className="section-dark">
        <div className="container prose-narrow">
          <div className="article-meta">
            <div>
              <Calendar size={14} /> June 18, 2026
            </div>
            <div>
              <User size={14} /> By Dylan Gardow
            </div>
            <div>
              <Clock size={14} /> 4 min read
            </div>
          </div>

          <div className="article-featured-image">
            <Image
              src="/old-wood-fence.jpg"
              alt="Weathered wooden fence line prep"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="article-body">
            <p>
              When planning a new fence installation, it&apos;s easy to focus on selecting the picket styles, color options, or gate locations. However, the longest-lasting fence is built on a foundation of proper site preparation and land clearing. Without addressing roots, slope differences, brush, and old post footings first, the integrity of your new fence is compromised from day one.
            </p>

            <h2>The Pitfalls of Poor Site Preparation</h2>
            <p>
              A major mistake in boundary installation is building directly over wild growth or along un-cleared fence lines. Roots from nearby brush and small trees exert constant force against vinyl pickets and wooden fence posts as they expand. Over time, this shifts posts out of alignment and warps pickets. Additionally, hidden boulders or old, decaying post footings can make it impossible to sink new posts to the required 4-foot frost line depth.
            </p>

            <h2>Clearing and Grading for Longevity</h2>
            <p>
              Proper land clearing involves brush hogging, stump grinding, and fence line grading to ensure a smooth, unobstructed boundary layout. Surface grading resolves minor slopes and directs surface runoff water away from post bases, preventing moisture pooling and wood rot or soil erosion.
            </p>

            <blockquote className="article-quote">
              &quot;Excavation and site prep dictates the lifetime of a fence. That&apos;s why Flash Fence offers both fencing and small excavation services under one roof, ensuring the groundwork is cleared to perfectionist standards.&quot;
              <cite>Dylan Gardow, Owner</cite>
            </blockquote>

            <h2>Our Site Prep Standards</h2>
            <p>
              At Flash Fence, we utilize specialized compact equipment to clear out brush, storm debris, and old fencing structures without destroying your lawn. We inspect the layout for subterranean obstacles and establish clean grading paths before a single post hole is driven.
            </p>
          </div>

          <div className="article-cta">
            <h3>Need Site Prep or Fencing in Eau Claire?</h3>
            <p>
              Dylan Gardow is ready to inspect your site. Get in touch to schedule a free boundary and groundwork consultation.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: "var(--space-sm)" }}>
              Get A Free Estimate <ArrowRight size={16} style={{ marginLeft: "var(--space-xs)" }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
