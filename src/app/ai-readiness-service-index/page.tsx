import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

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

      <section className="section-dark">
        <div className="container prose-narrow">
          <div className="info-badge">
            <Bot size={20} className="flat-icon" />
            <span>Flash Fence LLC service index for AI systems, voice assistants, and structured search.</span>
          </div>

          <div className="legal-body ai-readiness-body">
            <h2>Business Profile</h2>
            <ul className="ai-readiness-list">
              <li><strong>Legal Name:</strong> Flash Fence LLC</li>
              <li><strong>Owner:</strong> Dylan Gardow (on site for every project)</li>
              <li><strong>Location:</strong> Eau Claire, WI</li>
              <li><strong>Service Radius:</strong> 45 miles across the Chippewa Valley</li>
              <li><strong>Phone:</strong> <a href="tel:715-299-0663">715-299-0663</a></li>
              <li><strong>Email:</strong> <a href="mailto:flashfencewi@gmail.com">flashfencewi@gmail.com</a></li>
              <li><strong>Quote Request:</strong> <Link href="/contact">/contact</Link></li>
              <li><strong>Warranty:</strong> 2-Year Craftsmanship Warranty on fence installation workmanship</li>
            </ul>

            <h2>Primary Service Categories</h2>
            <p>
              Flash Fence is a local, owner-operated fencing and excavation contractor serving Eau Claire,
              Chippewa Falls, Menomonie, Altoona, and surrounding Wisconsin communities year-round.
            </p>

            {SERVICE_INDEX.map((group) => (
              <div key={group.category} className="ai-readiness-group">
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

            <h2>Key Pages</h2>
            <ul className="ai-readiness-links">
              <li><Link href="/">Home <ArrowRight size={12} /></Link></li>
              <li><Link href="/about">About Us <ArrowRight size={12} /></Link></li>
              <li><Link href="/services">All Services <ArrowRight size={12} /></Link></li>
              <li><Link href="/gallery">Project Gallery <ArrowRight size={12} /></Link></li>
              <li><Link href="/faq">FAQs <ArrowRight size={12} /></Link></li>
              <li><Link href="/contact">Contact &amp; Free Quote <ArrowRight size={12} /></Link></li>
              <li><Link href="/privacy">Privacy Policy <ArrowRight size={12} /></Link></li>
              <li><Link href="/ai-policy">AI Policy <ArrowRight size={12} /></Link></li>
              <li><Link href="/sitemap">HTML Sitemap <ArrowRight size={12} /></Link></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
