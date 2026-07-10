import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

const BUSINESS_PROFILE = [
  { label: "Legal Name", value: "Flash Fence LLC" },
  { label: "Owner", value: "Dylan Gardow (on site for every project)" },
  { label: "Location", value: "Eau Claire, WI" },
  { label: "Service Radius", value: "45 miles across the Chippewa Valley" },
  {
    label: "Phone",
    value: <a href="tel:715-299-0663">715-299-0663</a>,
  },
  {
    label: "Email",
    value: <a href="mailto:flashfencewi@gmail.com">flashfencewi@gmail.com</a>,
  },
  {
    label: "Quote Request",
    value: <Link href="/contact">/contact</Link>,
  },
  {
    label: "Warranty",
    value: "2-Year Craftsmanship Warranty on fence installation workmanship",
  },
];

const SERVICE_INDEX = [
  {
    category: "Fencing Installation",
    href: "/services/fencing",
    services: [
      {
        name: "Vinyl Fencing",
        description:
          "Premium privacy and picket vinyl fencing. Wind, winter, and moisture resistant. Residential and commercial installs.",
      },
      {
        name: "Wood Fencing",
        description:
          "Cedar privacy, spaced picket, and post-and-rail fencing built on site to match property contours.",
      },
      {
        name: "Chain Link & Ornamental",
        description:
          "Galvanized or black vinyl-coated chain link and ornamental steel fencing for security and curb appeal.",
      },
    ],
  },
  {
    category: "Excavation & Site Work",
    href: "/services/excavation",
    services: [
      {
        name: "Land Clearing & Storm Prep",
        description:
          "Brush removal, small tree clearing, storm damage cleanup, and old fence removal for property development.",
      },
      {
        name: "Site & Concrete Prep",
        description:
          "Grading, soil compaction, and sub-base excavation for concrete pads, patios, driveways, and fence lines.",
      },
      {
        name: "Demolition & Utilities",
        description:
          "Small demolition, concrete breaking, and trenching for water, sewer, or drainage routing.",
      },
    ],
  },
  {
    category: "Site Prep & Land Clearing",
    href: "/services/site-prep",
    services: [
      {
        name: "Fence Line Clearing",
        description: "Clearing and prepping fence lines before installation on residential and commercial lots.",
      },
      {
        name: "Lot & Land Clearing",
        description: "Selective clearing for build sites, additions, and exterior improvement projects.",
      },
      {
        name: "Site Preparation",
        description: "Grading and prep work to ready properties for fencing, concrete, or landscaping.",
      },
    ],
  },
];

const KEY_PAGES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "All Services" },
  { href: "/gallery", label: "Project Gallery" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact & Free Quote" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/ai-policy", label: "AI Policy" },
  { href: "/sitemap", label: "HTML Sitemap" },
];

export default function AiReadinessServiceIndexPage() {
  return (
    <div className="inner-page">
      <PageHero
        eyebrow="Structured Service Directory"
        title="AI Readiness Service Index"
        subtitle="A machine-readable overview of Flash Fence LLC services, service area, and contact routes for search assistants and automated inquiry tools."
        backgroundImage="/old-wood-fence.jpg"
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Readiness Service Index" },
        ]}
      />

      <section className="section-light ai-readiness-page">
        <div className="container">
          <div className="ai-readiness-intro">
            <div className="info-badge">
              <Bot size={20} className="flat-icon" />
              <span>Flash Fence LLC service index for AI systems, voice assistants, and structured search.</span>
            </div>
          </div>

          <div className="ai-readiness-card">
            <h2 className="ai-readiness-heading">Business Profile</h2>
            <dl className="ai-readiness-profile">
              {BUSINESS_PROFILE.map((item) => (
                <div key={item.label} className="ai-readiness-profile-row">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="ai-readiness-section-header">
            <h2 className="ai-readiness-heading">Primary Service Categories</h2>
            <p>
              Flash Fence is a local, owner-operated fencing and excavation contractor serving Eau Claire,
              Chippewa Falls, Menomonie, Altoona, and surrounding Wisconsin communities year-round.
            </p>
          </div>

          <div className="ai-readiness-groups">
            {SERVICE_INDEX.map((group) => (
              <div key={group.category} className="ai-readiness-group-card">
                <h3>
                  <Link href={group.href}>{group.category}</Link>
                </h3>
                <ul className="ai-readiness-list">
                  {group.services.map((service) => (
                    <li key={service.name}>
                      <strong>{service.name}:</strong> {service.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="ai-readiness-card">
            <h2 className="ai-readiness-heading">Key Pages</h2>
            <ul className="ai-readiness-links">
              {KEY_PAGES.map((page) => (
                <li key={page.href}>
                  <Link href={page.href}>
                    {page.label} <ArrowRight size={12} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
