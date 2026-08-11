"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FENCE_TYPE_OPTIONS } from "@/data/fence-type-options";

export default function FenceTypeShowcase() {
  const [activeTypeId, setActiveTypeId] = useState(FENCE_TYPE_OPTIONS[0].id);
  const [slideIndex, setSlideIndex] = useState(0);

  const activeType =
    FENCE_TYPE_OPTIONS.find((type) => type.id === activeTypeId) ?? FENCE_TYPE_OPTIONS[0];

  const slides = activeType.gallery?.length
    ? activeType.gallery
    : [activeType.image];

  useEffect(() => {
    setSlideIndex(0);
  }, [activeTypeId]);

  const showPrevious = () => {
    setSlideIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setSlideIndex((current) => (current + 1) % slides.length);
  };

  const activeImage = slides[slideIndex] ?? activeType.image;

  return (
    <section className="section-dark fence-type-showcase">
      <div className="container">
        <div className="fence-type-showcase-layout">
          <div className="fence-type-showcase-left">
            <div className="fence-type-showcase-header">
              <span className="text-mono">Fence Types &amp; Finishes</span>
              <h2 className="heading-no-accent">See What We Install</h2>
              <p>
                Clear photos of the fence styles we quote and build. Tap a fence type to see
                available options and browse finished installs.
              </p>
            </div>

            <div className="fence-type-tabs" role="tablist" aria-label="Fence types">
              {FENCE_TYPE_OPTIONS.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTypeId === type.id}
                  className={`fence-type-tab${activeTypeId === type.id ? " active" : ""}`}
                  onClick={() => setActiveTypeId(type.id)}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <div className="fence-type-detail">
              <h3>{activeType.label}</h3>
              <p>{activeType.summary}</p>
            </div>
          </div>

          <div className="fence-type-showcase-right">
            {activeType.colors && (
              <div className="fence-color-options">
                <span className="fence-color-options-label">Available Colors</span>
                <ul className="fence-color-list">
                  {activeType.colors.map((color) => (
                    <li key={color.name} className="fence-color-item">
                      <span
                        className="fence-color-box"
                        style={{ backgroundColor: color.swatch }}
                        aria-hidden="true"
                      />
                      <span>{color.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeType.finishes && (
              <div className="fence-finish-options">
                <span className="fence-color-options-label">Available Styles</span>
                <ul className="fence-finish-list">
                  {activeType.finishes.map((finish) => (
                    <li key={finish}>{finish}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="fence-type-preview why-image-panel">
              <Image
                key={activeImage}
                src={activeImage}
                alt={`${activeType.label} installed for a residential client`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority={activeTypeId === "vinyl"}
              />

              {slides.length > 1 && (
                <>
                  <button
                    type="button"
                    className="fence-carousel-nav fence-carousel-nav--prev"
                    onClick={showPrevious}
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    className="fence-carousel-nav fence-carousel-nav--next"
                    onClick={showNext}
                    aria-label="Next photo"
                  >
                    <ChevronRight size={22} />
                  </button>
                  <div className="fence-carousel-dots" role="tablist" aria-label="Photo slides">
                    {slides.map((slide, index) => (
                      <button
                        key={slide}
                        type="button"
                        role="tab"
                        aria-selected={index === slideIndex}
                        aria-label={`Show photo ${index + 1}`}
                        className={`fence-carousel-dot${index === slideIndex ? " active" : ""}`}
                        onClick={() => setSlideIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}

              <div className="why-image-caption">
                <h4>{activeType.label}</h4>
                <p>
                  {slides.length > 1
                    ? "Real installs from our residential jobs."
                    : "Built on site to match your property layout and grade."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
