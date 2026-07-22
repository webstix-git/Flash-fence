"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, User, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ProperSitePrepSavesMoneyPost() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Site Prep Value"
        title="How the Proper Site Prep Can Save You Money"
        backgroundImage="/page-hero-banner.png"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Site Prep Savings" },
        ]}
      />

      <section className="section-dark">
        <div className="container prose-narrow">
          <div className="article-meta">
            <div>
              <Calendar size={14} /> July 2026
            </div>
            <div>
              <User size={14} /> Flash Fence
            </div>
            <div>
              <Clock size={14} /> 5 min read
            </div>
          </div>

          <div className="article-featured-image">
            <Image
              src="/site-excavation.jpg"
              alt="Proper site preparation and grading work"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="article-body">
            <p>
              Skipping site prep can look like a shortcut, but it usually costs more later. Brush, uneven grade, old
              debris, and poor drainage all create problems that show up after fencing, concrete, or construction work
              is finished.
            </p>

            <h2 className="heading-no-accent">Clearing First Prevents Rework</h2>
            <p>
              Removing brush, roots, and old materials before the main build keeps the crew from fighting unexpected
              obstacles mid-project. That means fewer delays, cleaner layouts, and less time spent fixing issues that
              should have been handled up front.
            </p>

            <h2 className="heading-no-accent">Good Grading Protects the Finished Job</h2>
            <p>
              Proper grading helps water move away from structures and creates a stable base for fence lines, patios,
              driveways, and additions. When the ground is prepared correctly, you reduce settling, washouts, and
              expensive corrections down the road.
            </p>

            <blockquote className="article-quote">
              &quot;Money saved on prep is often spent twice later on repairs. Doing it right once is the better
              investment.&quot;
            </blockquote>

            <h2 className="heading-no-accent">One Crew, One Clean Process</h2>
            <p>
              When clearing, grading, and finish work are planned together, the project stays organized from start to
              finish. That coordination helps keep costs predictable and protects the quality of what gets built on
              top of the prepared site.
            </p>
          </div>

          <div className="article-cta">
            <h3>Planning a Build or Fence Project?</h3>
            <p>
              Let us review your site and map out the prep work that will protect your budget and your finished
              results.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get A Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
