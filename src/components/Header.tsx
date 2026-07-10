"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <header className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link href="/" className="logo-link" onClick={closeMobileMenu}>
          <Image
            src="/logo.png"
            alt="Flash Fence Logo"
            width={240}
            height={68}
            priority
            className="logo-image"
            style={{
              height: scrolled ? "55px" : "75px",
              width: "auto",
              objectFit: "contain",
              display: "block"
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="dropdown-container" style={{ display: "flex", alignItems: "center" }}>
            <Link href="/services" className="nav-link" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
              Services <ChevronDown size={14} />
            </Link>
            <div className="dropdown-menu">
              <Link href="/services" className="dropdown-item" onClick={closeMobileMenu}>
                All Services
              </Link>
              <Link href="/services/fencing" className="dropdown-item" onClick={closeMobileMenu}>
                Fencing Installation
              </Link>
              <Link href="/services/excavation" className="dropdown-item" onClick={closeMobileMenu}>
                Excavation
              </Link>
              <Link href="/services/site-prep" className="dropdown-item" onClick={closeMobileMenu}>
                Site Prep & Land Clearing
              </Link>
            </div>
          </div>

          <Link href="/gallery" className="nav-link">
            Gallery
          </Link>
          <Link href="/faq" className="nav-link">
            FAQs
          </Link>

          <Link href="/contact" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
            Get A Free Quote
          </Link>
        </nav>

        {/* Hamburger Menu Icon */}
        <button
          className={`burger-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-menu-items">
          <li>
            <Link href="/" className="mobile-menu-link" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="mobile-menu-link" onClick={toggleMobileMenu}>
              Services
            </Link>
            <div className="mobile-menu-subitems">
              <Link href="/services" className="mobile-menu-sublink" onClick={toggleMobileMenu}>
                All Services
              </Link>
              <Link href="/services/fencing" className="mobile-menu-sublink" onClick={toggleMobileMenu}>
                Fencing
              </Link>
              <Link href="/services/excavation" className="mobile-menu-sublink" onClick={toggleMobileMenu}>
                Excavation
              </Link>
              <Link href="/services/site-prep" className="mobile-menu-sublink" onClick={toggleMobileMenu}>
                Site Prep
              </Link>
            </div>
          </li>
          <li>
            <Link href="/gallery" className="mobile-menu-link" onClick={toggleMobileMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/faq" className="mobile-menu-link" onClick={toggleMobileMenu}>
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="mobile-menu-link" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
