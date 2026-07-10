import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumbs-list">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="breadcrumbs-item">
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <ChevronRight size={14} className="breadcrumbs-sep" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
