"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, User, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function IncreaseHomeValueFencePost() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Home Value"
        title="How to Increase Home Value With a New Fence"
        backgroundImage="/page-hero-banner.png"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Fence Home Value" },
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
              src="/fencing-vinyl-install.jpg"
              alt="New vinyl fence installation that improves curb appeal"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="article-body">
            <p>
              A well-built fence can raise curb appeal, define usable outdoor space, and make a property feel more
              finished to buyers. In Eau Claire and the Chippewa Valley, that visual upgrade often matters as much as
              the practical benefits.
            </p>

            <h2 className="heading-no-accent">Curb Appeal Sells First Impressions</h2>
            <p>
              Clean fence lines, quality materials, and a professional finish make a home look cared for from the
              street and backyard. Vinyl privacy fencing and steel or aluminum ornamental options can both strengthen
              that first impression when matched to the home&apos;s style.
            </p>

            <h2 className="heading-no-accent">Functional Space Adds Everyday Value</h2>
            <p>
              Buyers notice usable yards. A secure, well-laid-out fence creates private outdoor living space for pets,
              kids, and gatherings. That practical benefit helps a property stand out against homes without defined
              outdoor boundaries.
            </p>

            <blockquote className="article-quote">
              &quot;A new fence does more than enclose a yard. It finishes the property and gives buyers confidence in
              the whole outdoor space.&quot;
            </blockquote>

            <h2 className="heading-no-accent">Quality Installation Protects Resale</h2>
            <p>
              Straight lines, solid posts, and clean gates show that the work was done right. A durable install with a
              craftsmanship warranty gives homeowners and future buyers more confidence that the fence will hold up,
              not become a repair project after closing.
            </p>
          </div>

          <div className="article-cta">
            <h3>Ready to Upgrade Your Property?</h3>
            <p>
              We can help you choose a fence style that improves curb appeal and supports long-term home value.
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
