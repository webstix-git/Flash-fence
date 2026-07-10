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
                  Setting posts below the 4-foot frost line is crucial in Eau Claire. Learn how our perfectionist setting methods prevent winter frost heave...
                </p>
                <Link href="/blog/frost-lines-stability" className="blog-link">
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-header" style={{ position: "relative", height: "240px" }}>
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
    </div>
  );
}
