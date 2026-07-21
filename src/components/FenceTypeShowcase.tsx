"use client";

import { useState } from "react";
import Image from "next/image";
import { FENCE_TYPE_OPTIONS } from "@/data/fence-type-options";

export default function FenceTypeShowcase() {
  const [activeTypeId, setActiveTypeId] = useState(FENCE_TYPE_OPTIONS[0].id);
  const [activeColorName, setActiveColorName] = useState(
    FENCE_TYPE_OPTIONS[0].colors?.[0]?.name ?? ""
  );

  const activeType =
    FENCE_TYPE_OPTIONS.find((type) => type.id === activeTypeId) ?? FENCE_TYPE_OPTIONS[0];

  const activeImage =
    activeType.colors?.find((color) => color.name === activeColorName)?.image ??
    activeType.image;

  const handleTypeSelect = (typeId: string) => {
    setActiveTypeId(typeId);
    const type = FENCE_TYPE_OPTIONS.find((item) => item.id === typeId);
    if (type?.colors?.[0]) {
      setActiveColorName(type.colors[0].name);
    }
  };

  return (
    <section className="section-dark fence-type-showcase">
      <div className="container">
        <div className="fence-type-showcase-layout">
          <div className="fence-type-showcase-left">
            <div className="fence-type-showcase-header">
              <span className="text-mono">Fence Types &amp; Finishes</span>
              <h2 className="heading-no-accent">See What We Install</h2>
              <p>
                Clear photos of the fence styles we quote and build. Tap a fence type, then choose a
                vinyl color to preview the finished look.
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
                  onClick={() => handleTypeSelect(type.id)}
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
                <div className="fence-color-swatches">
                  {activeType.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      className={`fence-color-swatch${activeColorName === color.name ? " active" : ""}`}
                      onClick={() => setActiveColorName(color.name)}
                      aria-label={`Preview ${color.name} vinyl`}
                      aria-pressed={activeColorName === color.name}
                    >
                      <span
                        className="fence-color-swatch-dot"
                        style={{
                          backgroundColor: color.swatch,
                          border:
                            color.name === "White" || color.name === "Tan" || color.name === "Clay"
                              ? "1px solid rgba(0, 0, 0, 0.15)"
                              : "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
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
                alt={`${activeType.label}${activeType.colors ? ` in ${activeColorName}` : ""}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority={activeTypeId === "vinyl"}
              />
              <div className="why-image-caption">
                <h4>{activeType.label}</h4>
                <p>
                  {activeType.colors
                    ? `Showing ${activeColorName} vinyl on a finished residential install.`
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
