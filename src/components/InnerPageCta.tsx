import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface InnerPageCtaProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage?: string;
  id?: string;
}

export default function InnerPageCta({
  title,
  description,
  buttonText = "Get A Free Quote",
  buttonHref = "/contact",
  backgroundImage = "/completed-vinyl-installation.jpg",
  id,
}: InnerPageCtaProps) {
  return (
    <section
      className="inner-page-cta"
      id={id}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="container">
        <span className="text-mono">Ready To Start?</span>
        <h2 className="heading-no-accent">{title}</h2>
        <p className="inner-page-cta-desc">{description}</p>
        <div className="inner-page-cta-actions">
          <Link href={buttonHref} className="btn btn-primary">
            {buttonText}
            <ArrowRight size={16} style={{ marginLeft: "var(--space-xs)" }} />
          </Link>
          <a href="tel:715-299-0663" className="btn btn-secondary">
            <Phone size={16} style={{ marginRight: "var(--space-xs)", color: "var(--color-primary)" }} />
            Call 715-299-0663
          </a>
        </div>
      </div>
    </section>
  );
}
