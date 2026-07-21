import Link from "next/link";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function SitemapPage() {
  const SITEMAP_SECTIONS = [
    {
      title: "Core Pages",
      links: [
        { path: "/", label: "Home Page" },
        { path: "/about", label: "About Us" },
        { path: "/gallery", label: "Project Gallery" },
        { path: "/testimonials", label: "Customer Testimonials" },
        { path: "/faq", label: "Frequently Asked Questions" },
        { path: "/contact", label: "Contact & Quote Request" },
      ],
    },
    {
      title: "Services & Divisions",
      links: [
        { path: "/services", label: "Service Index Dashboard" },
        { path: "/services/fencing", label: "Fencing Installation Division" },
        { path: "/services/excavation", label: "Site Excavation Division" },
        { path: "/services/site-prep", label: "Site Prep & Land Clearing" },
      ],
    },
    {
      title: "Wisconsin Trade Insights (Blog)",
      links: [
        { path: "/blog", label: "Blog Index" },
        { path: "/blog/choose-right-fencing", label: "Article: Choosing the Right Fencing" },
        { path: "/blog/proper-site-prep-saves-money", label: "Article: Proper Site Prep Saves Money" },
        { path: "/blog/increase-home-value-with-fence", label: "Article: Increase Home Value With a Fence" },
      ],
    },
    {
      title: "Policies & Disclosures",
      links: [
        { path: "/privacy", label: "Privacy Policy" },
        { path: "/ai-policy", label: "AI Policy & Operations" },
        { path: "/ai-readiness-service-index", label: "AI Readiness Service Index" },
        { path: "/sitemap", label: "Sitemap Index" },
      ],
    },
  ];

  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Route Directory"
        title="Sitemap"
        subtitle="Locate any directory link across our fencing and excavation portal. Structured for search engine bots and local Chippewa Valley users."
        backgroundImage="/old-wood-fence.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Sitemap" },
        ]}
      />

      <section className="section-light sitemap-page-section">
        <div className="container">
          <div className="sitemap-single-column">
            {SITEMAP_SECTIONS.map((section, index) => (
              <div key={index} className="sitemap-card">
                <h3 className="sitemap-card-title">{section.title}</h3>
                <ul className="sitemap-links">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link href={link.path} className="sitemap-link">
                        {link.label}
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
