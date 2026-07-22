"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Logo & Info */}
          <div className="footer-info">
            <Image
              src="/logo.png"
              alt="Flash Fence Footer Logo"
              width={200}
              height={56}
              className="footer-logo"
              style={{ width: "auto", height: "45px", objectFit: "contain" }}
            />
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", marginTop: "var(--space-sm)" }}>
              Professional fencing installation and site excavation trades based in Eau Claire, WI.
            </p>
            <div className="footer-social">
              <span className="footer-social-label">Follow Us On</span>
              <a
                href="https://www.facebook.com/p/Flash-Fence-61556697906995/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-links-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link href="/testimonials" className="footer-link">Testimonials</Link></li>
              <li><Link href="/faq" className="footer-link">FAQs</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-links-col">
            <h3><Link href="/services" style={{ color: "inherit", textDecoration: "none" }}>Our Services</Link></h3>
            <ul className="footer-links">
              <li><Link href="/services/fencing" className="footer-link">Fencing Installation</Link></li>
              <li><Link href="/services/excavation" className="footer-link">Excavation</Link></li>
              <li><Link href="/services/site-prep" className="footer-link">Site Prep &amp; Land Clearing</Link></li>
            </ul>
          </div>

          {/* Col 4: Service Area Map & Contacts */}
          <div className="footer-links-col">
            <h3>Service Area</h3>
            <div className="footer-contacts">
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href="tel:715-299-0663">715-299-0663</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href="mailto:flashfencewi@gmail.com">flashfencewi@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            <span>&copy; {new Date().getFullYear()} Flash Fence LLC. All rights reserved.</span>
            <span className="footer-copyright-sep" aria-hidden="true">|</span>
            <Link href="/sitemap" className="footer-copyright-link">Sitemap</Link>
            <span className="footer-copyright-sep" aria-hidden="true">|</span>
            <Link href="/privacy" className="footer-copyright-link">Privacy Policy</Link>
            <span className="footer-copyright-sep" aria-hidden="true">|</span>
            <Link href="/ai-policy" className="footer-copyright-link">AI Policy</Link>
            <span className="footer-copyright-sep" aria-hidden="true">|</span>
            <Link href="/ai-readiness-service-index" className="footer-copyright-link">
              AI Readiness Service Index
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
