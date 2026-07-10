"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import InnerPageCta from "@/components/InnerPageCta";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import FenceTypeShowcase from "@/components/FenceTypeShowcase";
import { GALLERY_PROJECTS } from "@/data/gallery-projects";

export default function GalleryPage() {
  const [galleryFilter, setGalleryFilter] = useState<"all" | "fencing" | "excavation">("all");

  const filteredProjects = GALLERY_PROJECTS.filter(
    (p) => galleryFilter === "all" || p.category === galleryFilter
  );

  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Completed Work"
        title="Project Gallery"
        subtitle="Browse our real on-site photography. We never use stock photos of owners or fake projects."
        backgroundImage="/gallery/gallery-02.png"
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

          <motion.div layout className="gallery-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={p.id}
                  className={`gallery-item ${p.category === "fencing" ? "fence-item" : ""}`}
                >
                  <div className="gallery-image-wrapper">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="gallery-image"
                      loading="lazy"
                    />
                    <div className="gallery-meta">
                      <h4>{p.title}</h4>
                      <span>{p.details}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <FenceTypeShowcase />

      <InnerPageCta
        title="Like what you see?"
        description="Let Dylan Gardow inspect your property lines and determine optimal fence post placement. Complete our free estimate form today."
      />
    </div>
  );
}
