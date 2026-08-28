"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

const MOBILE_HERO_SLIDES = [
  {
    src: "/hero-slide-grading-v2.jpg",
    objectPosition: "left center",
  },
  {
    src: "/hero-slide-pool.jpg",
    objectPosition: "center center",
  },
];

const PHONE_NUMBER = "715-299-0663";
const PHONE_HREF = "tel:715-299-0663";

export default function HomeHero() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % MOBILE_HERO_SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = MOBILE_HERO_SLIDES[slideIndex];

  return (
    <section className="hero">
      <div className="hero-slideshow" aria-hidden="true">
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
              alt=""
              fill
              priority={slideIndex === 0}
              sizes="100vw"
              className={activeSlide.objectPosition === "left center" ? "hero-slide-image--left" : undefined}
              style={{
                objectFit: activeSlide.objectPosition === "left center" ? "contain" : "cover",
                objectPosition: activeSlide.objectPosition,
              }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="hero-slideshow-dots">
          {MOBILE_HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`hero-slideshow-dot${index === slideIndex ? " active" : ""}`}
              aria-label={`Show hero photo ${index + 1}`}
              onClick={() => setSlideIndex(index)}
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
