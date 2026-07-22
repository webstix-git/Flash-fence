"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, User, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ChooseRightFencingPost() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Fencing Guidance"
        title="How to Choose the Right Fencing for Your Family's Needs"
        backgroundImage="/page-hero-banner.png"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Choosing the Right Fence" },
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
              src="/completed-vinyl-installation.jpg"
              alt="White vinyl privacy fence for a family backyard"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="article-body">
            <p>
              The right fence is not just about looks. For Chippewa Valley families, it should match how you use your yard:
              privacy, pets, kids, curb appeal, and long-term maintenance.
            </p>

            <h2 className="heading-no-accent">Start With How Your Family Uses the Yard</h2>
            <p>
              Do you need privacy from neighbors, a secure space for pets, or a clean boundary that keeps kids in the
              yard? Privacy vinyl is a strong choice for backyard seclusion. Wood can give a warmer, custom look.
              Chain link, steel, and aluminum ornamental fencing work well when security and visibility matter more.
            </p>

            <h2 className="heading-no-accent">Match Material to Maintenance and Lifestyle</h2>
            <p>
              Vinyl is low-maintenance and holds up well through Wisconsin weather without painting. Wood offers
              classic character but needs more upkeep over time. Chain link is durable and cost-effective for larger
              areas, while steel and aluminum ornamental fencing add a finished look with strong perimeter control.
            </p>

            <blockquote className="article-quote">
              &quot;The best fence is the one that fits your family&apos;s daily life first, then looks good doing it.&quot;
            </blockquote>

            <h2 className="heading-no-accent">Plan Layout Before You Choose Style</h2>
            <p>
              Gate placement, slope, and how the fence connects to the house all affect the finished result. Walking
              the property line before installation helps you avoid poor gate swings, awkward corners, and wasted
              material.
            </p>
          </div>

          <div className="article-cta">
            <h3>Need Help Choosing the Right Fence?</h3>
            <p>
              We can walk your property with you and recommend the best fencing option for privacy, pets, and long-term
              value.
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
