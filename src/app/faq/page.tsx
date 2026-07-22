"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPageCta from "@/components/InnerPageCta";

const FAQS = [
  {
    id: 1,
    question: "Do you offer any warranty on your work?",
    answer:
      "Yes. We back our craftsmanship with a 2-Year Craftsmanship Warranty. We stand behind every post we set and every site we clear. If anything goes wrong due to installation details, we fix it.",
  },
  {
    id: 2,
    question: "Do I need a permit to install a fence?",
    answer:
      "Permit rules vary by city and county across the Chippewa Valley. Some areas require a fence permit, setback approval, or HOA review before work begins. We can help you understand what is typically needed, and you should confirm requirements with your local municipality before installation.",
  },
  {
    id: 3,
    question: "What types of fencing do you install?",
    answer:
      "We install vinyl, wood (cedar/treated), chain link (galvanized/black vinyl-coated), and steel and aluminum ornamental fencing for both residential and commercial clients.",
  },
  {
    id: 4,
    question: "What excavation services do you handle?",
    answer:
      "We specialize in small excavation, including: fence line clearing, land clearing, site prep, storm cleanup, concrete prep, minor demolition, and water/sewer ditch prep.",
  },
  {
    id: 5,
    question: "Why is grading important?",
    answer:
      "Proper grading creates a stable, level base for fencing and concrete work, improves drainage, and helps prevent settling or washout over time. Getting the grade right before installation protects the finished project through Wisconsin weather.",
  },
  {
    id: 6,
    question: "How do I know where my property lines are?",
    answer:
      "Property lines are usually shown on a survey, plat map, or recorded deed description. If markers are missing or unclear, we recommend confirming boundaries with a surveyor or your municipality before final fence placement so the layout stays accurate and neighbor-friendly.",
  },
  {
    id: 7,
    question: "Who contacts 811 before digging?",
    answer:
      "We contact Diggers Hotline (811) before excavation so underground utilities are marked. That call is an important safety step before any digging or site prep work begins.",
  },
];

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
            <h2 className="heading-no-accent">Ask A Custom Question</h2>
            <p>
              Didn&apos;t find what you&apos;re looking for? Reach out and we will answer your
              project-specific questions directly.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Ask A Custom Question
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
        description="We are ready to talk layouts, liner foot estimations, or groundwork scopes. Complete the free estimate request form."
      />
    </div>
  );
}
