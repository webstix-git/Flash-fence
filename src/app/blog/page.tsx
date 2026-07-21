"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function BlogIndex() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Wisconsin Trade Insights"
        title="Flash Fence Blog & Insights"
        subtitle="Professional fencing tips and groundwork guidelines to prepare your Chippewa Valley property."
        backgroundImage="/old-wood-fence.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="section-light">
        <div className="container">
          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-header" style={{ position: "relative", height: "240px" }}>
                <span className="blog-tag">Fencing Guidance</span>
                <Image
                  src="/completed-vinyl-installation.jpg"
                  alt="Choosing the right fence for your family"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="blog-body">
                <span className="blog-meta-info">July 2026</span>
                <h3 className="blog-title">How to Choose the Right Fencing for Your Family&apos;s Needs</h3>
                <p className="blog-desc">
                  Privacy, pets, kids, and curb appeal all matter. Learn how to match fence style and material to the way your family uses the yard...
                </p>
                <Link href="/blog/choose-right-fencing" className="blog-link">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-header" style={{ position: "relative", height: "240px" }}>
                <span className="blog-tag">Site Prep</span>
                <Image
                  src="/site-excavation.jpg"
                  alt="Proper site preparation that saves money"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="blog-body">
                <span className="blog-meta-info">July 2026</span>
                <h3 className="blog-title">How the Proper Site Prep Can Save You Money</h3>
                <p className="blog-desc">
                  Clearing and grading done right up front helps prevent delays, rework, and expensive corrections later in the project...
                </p>
                <Link href="/blog/proper-site-prep-saves-money" className="blog-link">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-header" style={{ position: "relative", height: "240px" }}>
                <span className="blog-tag">Home Value</span>
                <Image
                  src="/fencing-vinyl-install.jpg"
                  alt="New fence that increases home value"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="blog-body">
                <span className="blog-meta-info">July 2026</span>
                <h3 className="blog-title">How to Increase Home Value With a New Fence</h3>
                <p className="blog-desc">
                  A well-built fence improves curb appeal, defines usable outdoor space, and helps a property feel finished to buyers...
                </p>
                <Link href="/blog/increase-home-value-with-fence" className="blog-link">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
