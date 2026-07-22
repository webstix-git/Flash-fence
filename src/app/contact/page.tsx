"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactPage() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Flash Fence"
        subtitle="Whether you need a new vinyl privacy fence or small lot excavation, we deliver perfectionist trades work."
        backgroundImage="/page-hero-banner.png"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section-light contact-page-section">
        <div className="container">
          <div className="contact-split">
            <QuoteForm variant="light" />

            <div className="contact-info-panel">
              <span className="text-mono">Contact Info</span>
              <h2 className="heading-no-accent contact-info-heading">Reach Out Any Time.</h2>
              <p className="contact-info-intro">
                Prefer to call or email directly? I respond to every inquiry personally, usually the same day.
              </p>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="contact-info-label">Call or Text</span>
                    <a href="tel:715-299-0663" className="contact-info-value">
                      715-299-0663
                    </a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="contact-info-label">Email</span>
                    <a href="mailto:flashfencewi@gmail.com" className="contact-info-value contact-info-value--email">
                      flashfencewi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-info-label">Service Area</span>
                    <span className="contact-info-value">
                      Eau Claire, WI (45-Mile Service Radius)
                    </span>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="contact-info-label">Hours</span>
                    <div className="contact-hours">
                      <span>Mon–Fri: 7:00 AM – 6:00 PM</span>
                      <span>Sat: By appointment</span>
                      <span>Sun: By appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
