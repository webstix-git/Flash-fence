"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

const HERO_SLIDES = [
  {
    src: "/excavation.jpg",
    alt: "Bobcat excavator grading a residential lot for site preparation",
    objectPosition: "left center",
  },
  {
    src: "/pool-fence.jpg",
    alt: "Chain link pool fence surrounding a backyard swimming pool",
    objectPosition: "center center",
  },
  {
    src: "/white-fence.jpg",
    alt: "White vinyl privacy fence along a green Wisconsin lawn",
    objectPosition: "left center",
  },
  {
    src: "/wodden-fence-inside.jpg",
    alt: "Wood privacy fence installed between residential properties",
    objectPosition: "left center",
  },
  {
    src: "/wodden-fence.jpg",
    alt: "Wood privacy fence with mulch bed and hostas along the fence line",
    objectPosition: "left center",
  },
] as const;

const PHONE_NUMBER = "715-299-0663";
const PHONE_HREF = "tel:715-299-0663";
const AUTOPLAY_MS = 6000;

export default function HomeHero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoplayKey, setAutoplayKey] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setSlideIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
    setAutoplayKey((key) => key + 1);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [autoplayKey]);

  const activeSlide = HERO_SLIDES[slideIndex];

  return (
    <section className="hero">
      <div className="hero-slideshow">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide.src}
            className="hero-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              priority={slideIndex === 0}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: activeSlide.objectPosition,
              }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="hero-slideshow-dots" role="tablist" aria-label="Hero photo navigation">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={index === slideIndex}
              className={`hero-slideshow-dot${index === slideIndex ? " active" : ""}`}
              aria-label={`Show hero photo ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Built-To-Last <br />
            <span style={{ color: "var(--color-primary)" }}>Fencing & Excavation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-subtitle"
          >
            High-performance property boundaries and groundwork built for Wisconsin weather.
            Get perfectionist craftsmanship on every job.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hero-actions"
          >
            <Link href="/contact" className="btn btn-primary">
              Get A Free Estimate
            </Link>
            <a href={PHONE_HREF} className="btn btn-secondary hero-phone-cta">
              <Phone size={18} />
              {PHONE_NUMBER}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
