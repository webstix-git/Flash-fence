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
  backgroundImage = "/completed-vinyl-installation.jpg",
  overlay = "default",
  tall = false,
  children,
}: PageHeroProps) {
  const overlayGradient =
    overlay === "strong"
      ? "linear-gradient(to right, rgba(0, 0, 0, 0.92) 0%, rgb(0 0 0 / 86%) 45%, rgb(0 0 0 / 74%) 100%)"
      : "linear-gradient(to right, rgba(0, 0, 0, 0.88) 0%, rgb(0 0 0 / 82%) 45%, rgb(0 0 0 / 68%) 100%)";

  return (
    <section
      className={`page-hero${tall ? " page-hero--tall" : ""}`}
      style={{
        backgroundImage: `${overlayGradient}, url('${backgroundImage}')`,
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
