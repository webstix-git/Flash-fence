"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryProject } from "@/data/gallery-projects";

interface GalleryGridProps {
  projects: GalleryProject[];
}

export default function GalleryGrid({ projects }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    setLightboxIndex(null);
  }, [projects]);

  const showPrevious = useCallback(() => {
    setLightboxIndex((current) =>
      current !== null && current > 0 ? current - 1 : current
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((current) =>
      current !== null && current < projects.length - 1 ? current + 1 : current
    );
  }, [projects.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrevious, showNext]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const activeProject = lightboxIndex !== null ? projects[lightboxIndex] : null;

  return (
    <>
      <motion.div layout className="gallery-grid">
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
            >
              <button
                type="button"
                className={`gallery-item ${project.category === "fencing" ? "fence-item" : ""}`}
                onClick={() => setLightboxIndex(index)}
                aria-label={`View ${project.title}`}
              >
                <div className="gallery-image-wrapper">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="gallery-image"
                    loading="lazy"
                  />
                </div>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activeProject && lightboxIndex !== null && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
          >
            <motion.div
              className="gallery-lightbox-panel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={closeLightbox}
                aria-label="Close gallery"
              >
                <X size={22} />
              </button>

              {lightboxIndex > 0 && (
                <button
                  type="button"
                  className="gallery-lightbox-nav gallery-lightbox-nav--prev"
                  onClick={showPrevious}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {lightboxIndex < projects.length - 1 && (
                <button
                  type="button"
                  className="gallery-lightbox-nav gallery-lightbox-nav--next"
                  onClick={showNext}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              )}

              <div className="gallery-lightbox-image">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 90vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
