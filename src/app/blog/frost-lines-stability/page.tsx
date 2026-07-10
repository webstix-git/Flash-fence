"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, User, Calendar, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function BlogPost1() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Fencing Value & Engineering"
        title="How Frost Lines Affect Fence Post Stability in Wisconsin"
        backgroundImage="/completed-vinyl-installation.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Frost Lines & Stability" },
        ]}
      />

      <section className="section-dark">
        <div className="container prose-narrow">
          <div className="article-meta">
            <div>
              <Calendar size={14} /> July 9, 2026
            </div>
            <div>
              <User size={14} /> By Dylan Gardow
            </div>
            <div>
              <Clock size={14} /> 5 min read
            </div>
          </div>

          <div className="article-featured-image">
            <Image
              src="/completed-vinyl-installation.jpg"
              alt="Premium vinyl fence in Eau Claire yard"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="article-body">
            <p>
              Wisconsin winters are notorious for their severity, but for property owners looking to install a new fence, the real battle happens beneath the surface of the soil. As the temperature drops below freezing, water trapped inside the dirt freezes and expands. This process, known as <strong>frost heave</strong>, exerts immense vertical pressure on anything anchored in the ground.
            </p>

            <h2>Understanding the 4-Foot Frost Line</h2>
            <p>
              In the Eau Claire and Chippewa Valley regions, the winter frost line regularly penetrates between 36 to 48 inches deep. Any fence post set above this critical threshold is subject to heave. When soil freezes around a shallow concrete plug, it grips the sides and pulls the entire post upward. When spring arrives and the ground thaws, the post does not settle back into its original position, leading to a listing, unstable fence structure.
            </p>

            <h2>Our Post-Setting Standards</h2>
            <p>
              At Flash Fence, our perfectionist setting methods ensure your boundary lasts. We set our structural posts to a full depth of 48 inches. This places the concrete footing securely below the frost zone. By digging post holes to the required depth and using appropriate drainage aggregate backfill, we anchor the post firmly, preventing vertical movement.
            </p>

            <blockquote className="article-quote">
              &quot;We stand behind every post we set. Setting posts below the frost line is not just a building guideline for us. It is a core craftsmanship standard that backs our 2-Year Craftsmanship Warranty.&quot;
              <cite>Dylan Gardow, Owner</cite>
            </blockquote>

            <h2>Material Selection and Frost Resistance</h2>
            <p>
              Along with post setting depth, material durability is vital. High-quality vinyl privacy pickets map easily to soil contours and flex slightly under heavy wind loads without warping or pulling on the posts.
            </p>
          </div>

          <div className="article-cta">
            <h3>Planning a Fencing Upgrade in Chippewa Valley?</h3>
            <p>
              Dylan Gardow is ready to inspect your yard layout. Get in touch to schedule a free boundary estimate.
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
