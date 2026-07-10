"use client";

import { Phone, Calendar } from "lucide-react";

export default function StickyActionBar() {
  return (
    <div className="sticky-action-bar">
      <a href="tel:715-299-0663" className="sticky-action-item" aria-label="Call Dylan now">
        <Phone size={18} />
        <span>Call Now</span>
      </a>
      <a href="#contact" className="sticky-action-item" aria-label="Get a free quote">
        <Calendar size={18} />
        <span>Free Quote</span>
      </a>
    </div>
  );
}
