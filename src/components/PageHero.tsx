"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlay?: "default" | "strong";
  tall?: boolean;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  backgroundImage = "/page-hero-banner.png",
  overlay = "default",
  tall = false,
  children,
}: PageHeroProps) {
  return (
    <section
      className={`page-hero${tall ? " page-hero--tall" : ""}${overlay === "strong" ? " page-hero--overlay-strong" : ""}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-hero-content"
        >
          {eyebrow && <span className="text-mono">{eyebrow}</span>}
          <h1>{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
