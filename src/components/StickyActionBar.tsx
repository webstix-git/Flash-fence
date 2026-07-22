"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

export default function StickyActionBar() {
  return (
    <div className="sticky-action-bar">
      <a href="tel:715-299-0663" className="sticky-action-item" aria-label="Call 715-299-0663">
        <Phone size={18} />
        <span>Request Call</span>
      </a>
      <Link href="/contact" className="sticky-action-item" aria-label="Get a free estimate">
        <Calendar size={18} />
        <span>Free Estimate</span>
      </Link>
    </div>
  );
}
