"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPageCta from "@/components/InnerPageCta";
import { FAQS } from "@/data/faqs";

export default function FaqPage() {
  const [openFaqs, setOpenFaqs] = useState<number[]>(FAQS.map((f) => f.id));

  const toggleFaq = (id: number) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter((item) => item !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  };

  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Common Questions"
        title="Frequently Asked Questions"
        subtitle="Get detailed facts about our high-durability craftsmanship warranty, project pricing timeline, and excavation readiness."
        backgroundImage="/page-hero-banner.png"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "FAQs" },
        ]}
      />

      <section className="section-light faq-ask-section">
        <div className="container faq-ask-inner">
          <div>
            <span className="text-mono">Need More Details?</span>
            <h2 className="heading-no-accent">Ask A Specific Question</h2>
            <p>
              Didn&apos;t find what you&apos;re looking for? Reach out and we will answer your
              project-specific questions directly.
            </p>
          </div>
          <Link href="/contact-us" className="btn btn-primary">
            Ask A Specific Question
          </Link>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="faq-list">
            {FAQS.map((faq) => {
              const isOpen = openFaqs.includes(faq.id);
              return (
                <div key={faq.id} className={`faq-item ${isOpen ? "active" : ""}`}>
                  <button
                    className="faq-trigger"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={18} className="faq-icon" />
                  </button>
                  <div
                    className="faq-content"
                    style={{
                      maxHeight: isOpen ? "320px" : "0",
                      transition: "max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <div className="faq-content-inner">
                      <p style={{ margin: 0, color: "rgba(255,255,255,0.8)" }}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <InnerPageCta
        title="Still have questions?"
        description="We are ready to talk layouts, linear foot estimations, or groundwork scopes. Complete the free estimate request form."
      />
    </div>
  );
}
