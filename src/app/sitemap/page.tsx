import Link from "next/link";
import { ArrowRight, Home, Shield, FileText, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function SitemapPage() {
  const SITEMAP_SECTIONS = [
    {
      title: "Core Pages",
      icon: <Home size={24} className="flat-icon" />,
      links: [
        { path: "/", label: "Home Page" },
        { path: "/about", label: "About Us" },
        { path: "/gallery", label: "Project Gallery" },
        { path: "/faq", label: "Frequently Asked Questions" },
        { path: "/contact", label: "Contact & Quote Request" },
      ],
    },
    {
      title: "Services & Divisions",
      icon: <Wrench size={24} className="flat-icon" />,
      links: [
        { path: "/services", label: "Service Index Dashboard" },
        { path: "/services/fencing", label: "Fencing Installation Division" },
        { path: "/services/excavation", label: "Site Excavation Division" },
        { path: "/services/site-prep", label: "Site Prep & Land Clearing" },
      ],
    },
    {
      title: "Wisconsin Trade Insights (Blog)",
      icon: <FileText size={24} className="flat-icon" />,
      links: [
        { path: "/blog", label: "Blog Index" },
        { path: "/blog/frost-lines-stability", label: "Article: Frost Lines & Fencing Stability" },
        { path: "/blog/groundwork-dictates-lifetime", label: "Article: Site Prep & Boundary Longevity" },
      ],
    },
    {
      title: "Policies & Disclosures",
      icon: <Shield size={24} className="flat-icon" />,
      links: [
        { path: "/privacy", label: "Privacy Policy" },
        { path: "/ai-policy", label: "AI Policy & Operations" },
        { path: "/ai-readiness-service-index", label: "AI Readiness Service Index" },
        { path: "/sitemap", label: "HTML Sitemap Index" },
      ],
    },
  ];

  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Route Directory"
        title="HTML Sitemap"
        subtitle="Locate any directory link across our fencing and excavation portal. Structured for search engine bots and local Chippewa Valley users."
        backgroundImage="/old-wood-fence.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Sitemap" },
        ]}
      />

      <section className="section-dark">
        <div className="container">
          <div className="grid-about-service">
            {SITEMAP_SECTIONS.map((section, index) => (
              <div key={index} className="sitemap-card">
                <div className="sitemap-card-header">
                  {section.icon}
                  <h3>{section.title}</h3>
                </div>
                <ul className="sitemap-links">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link href={link.path} className="footer-link">
                        <ArrowRight size={12} style={{ opacity: 0.5 }} /> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
