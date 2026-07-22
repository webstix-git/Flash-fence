"use client";

import { useState } from "react";
import InnerPageCta from "@/components/InnerPageCta";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import GalleryGrid from "@/components/GalleryGrid";
import { GALLERY_PROJECTS } from "@/data/gallery-projects";

export default function GalleryPage() {
  const [galleryFilter, setGalleryFilter] = useState<"all" | "fencing" | "excavation">("all");

  const filteredProjects = GALLERY_PROJECTS.filter(
    (p) => galleryFilter === "all" || p.category === galleryFilter
  );

  return (
    <div className="inner-page">
      <PageHero
        title="Photo Gallery"
        backgroundImage="/page-hero-banner.png"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      <section className="section-light">
        <div className="container">
          <div className="gallery-filters" style={{ marginBottom: "var(--space-xl)" }}>
            <button
              className={`filter-btn ${galleryFilter === "all" ? "active" : ""}`}
              onClick={() => setGalleryFilter("all")}
            >
              All Projects
            </button>
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
        </div>
      </section>

      <InnerPageCta
        title="Like what you see?"
        description="Let us inspect your property lines and determine an optimal fence layout and old fence removal plan. Complete our free estimate form today."
      />
    </div>
  );
}
