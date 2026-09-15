import type { Metadata } from "next";
import { FAQS } from "@/data/faqs";
import {
  LEGAL_NAME,
  SITE_EMAIL,
  SITE_FACEBOOK,
  SITE_NAME,
  SITE_PHONE,
  SITE_PHONE_E164,
  SITE_URL,
  absoluteUrl,
  getSitePage,
} from "@/lib/site";

type JsonLd = Record<string, unknown>;

export function pageMetadata(path: string): Metadata {
  const page = getSitePage(path);
  const canonical = absoluteUrl(path);

  return {
    title: path === "/" ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      type: path.startsWith("/blog/") ? "article" : "website",
      images: [
        {
          url: "/completed-vinyl-installation.jpg",
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function localBusinessJsonLd(): JsonLd {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    telephone: SITE_PHONE_E164,
    email: SITE_EMAIL,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    description: getSitePage("/").description,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Eau Claire",
      addressRegion: "WI",
      addressCountry: "US",
    },
    areaServed: [
      "Eau Claire, WI",
      "Altoona, WI",
      "Chippewa Falls, WI",
      "Lake Hallie, WI",
      "Menomonie, WI",
      "Cadott, WI",
      "Fall Creek, WI",
      "Bloomer, WI",
      "Colfax, WI",
      "Augusta, WI",
      "Osseo, WI",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Dylan Gardow",
    },
    sameAs: [SITE_FACEBOOK],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Flash Fence Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fence Installation",
            url: absoluteUrl("/services/fencing"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Excavation",
            url: absoluteUrl("/services/excavation"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Site Prep & Land Clearing",
            url: absoluteUrl("/services/site-prep"),
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_PHONE_E164,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };
}

export function globalJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [websiteJsonLd(), localBusinessJsonLd()],
  };
}

export function aboutPageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${absoluteUrl("/about-us")}#page`,
        url: absoluteUrl("/about-us"),
        name: getSitePage("/about-us").title,
        description: getSitePage("/about-us").description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
      ]),
    ],
  };
}

export function contactPageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${absoluteUrl("/contact-us")}#page`,
        url: absoluteUrl("/contact-us"),
        name: getSitePage("/contact-us").title,
        description: getSitePage("/contact-us").description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${SITE_URL}/#business` },
        telephone: SITE_PHONE,
        email: SITE_EMAIL,
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact Us", path: "/contact-us" },
      ]),
    ],
  };
}

export function serviceJsonLd(
  path: string,
  serviceName: string,
  crumbs: { name: string; path: string }[]
): JsonLd {
  const page = getSitePage(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#service`,
        name: serviceName,
        description: page.description,
        url: absoluteUrl(path),
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: "Chippewa Valley, Wisconsin",
      },
      breadcrumbJsonLd(crumbs),
    ],
  };
}

export function faqPageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl("/faq")}#page`,
        url: absoluteUrl("/faq"),
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "FAQs", path: "/faq" },
      ]),
    ],
  };
}

export function blogPostJsonLd(
  path: string,
  headline: string,
  datePublished: string,
  imagePath: string
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${absoluteUrl(path)}#article`,
        headline,
        description: getSitePage(path).description,
        datePublished,
        dateModified: datePublished,
        image: absoluteUrl(imagePath),
        url: absoluteUrl(path),
        author: {
          "@type": "Organization",
          name: LEGAL_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@id": `${SITE_URL}/#business`,
        },
        mainEntityOfPage: absoluteUrl(path),
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: headline, path },
      ]),
    ],
  };
}

export function webPageJsonLd(
  path: string,
  crumbs: { name: string; path: string }[]
): JsonLd {
  const page = getSitePage(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(path)}#page`,
        url: absoluteUrl(path),
        name: page.title,
        description: page.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      breadcrumbJsonLd(crumbs),
    ],
  };
}

export function collectionJsonLd(
  path: string,
  type: "CollectionPage" | "Blog",
  crumbs: { name: string; path: string }[]
): JsonLd {
  const page = getSitePage(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${absoluteUrl(path)}#page`,
        url: absoluteUrl(path),
        name: page.title,
        description: page.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      breadcrumbJsonLd(crumbs),
    ],
  };
}
