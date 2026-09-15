export const SITE_URL = "https://flashfencewi.com";
export const SITE_NAME = "Flash Fence";
export const LEGAL_NAME = "Flash Fence LLC";
export const SITE_PHONE = "715-299-0663";
export const SITE_PHONE_E164 = "+17152990663";
export const SITE_EMAIL = "flashfencewi@gmail.com";
export const SITE_FACEBOOK =
  "https://www.facebook.com/p/Flash-Fence-61556697906995/";

export const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAE1w0QPd1nZR55ZZ";

export type SitePage = {
  path: string;
  title: string;
  description: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  inSitemap?: boolean;
};

export const SITE_PAGES: SitePage[] = [
  {
    path: "/",
    title: "Flash Fence | Premium Fencing & Excavation | Eau Claire, WI",
    description:
      "Get perfectionist quality fence installation (vinyl, wood, chain link) and reliable excavation services in Chippewa Valley. 2-Year Craftsmanship Warranty. Owner Dylan Gardow always on site.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about-us",
    title: "About Us",
    description:
      "Meet Flash Fence LLC, an owner-operated fencing and excavation company in Eau Claire, WI. Dylan Gardow is on site for every Chippewa Valley project.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/contact-us",
    title: "Contact Us",
    description:
      "Request a free fencing or excavation estimate in Eau Claire, WI. Call or text 715-299-0663 or send a quote request to Flash Fence.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/thank-you",
    title: "Thank You",
    description:
      "Your Flash Fence estimate request has been received. We will text or call you shortly to talk through your fencing or excavation project.",
    changeFrequency: "yearly",
    priority: 0.2,
    inSitemap: false,
  },
  {
    path: "/gallery",
    title: "Project Gallery",
    description:
      "See Flash Fence vinyl, wood, and chain link installs plus excavation and site prep work across the Chippewa Valley.",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    path: "/testimonials",
    title: "Customer Reviews & Testimonials",
    description:
      "Read real Google reviews from Chippewa Valley homeowners who hired Flash Fence for fencing installation and excavation work.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/faq",
    title: "Frequently Asked Questions",
    description:
      "Answers about the Flash Fence 2-year craftsmanship warranty, permits, fence types, excavation, grading, property lines, and 811 locates.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    path: "/services",
    title: "Fencing & Excavation Services",
    description:
      "Vinyl, wood, and chain link fencing plus excavation and site prep from one owner-supervised crew in Eau Claire, WI.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/fencing",
    title: "Fence Installation",
    description:
      "Premium vinyl, wood, chain link, and ornamental fence installation built for Wisconsin weather. Serving Eau Claire and the Chippewa Valley.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/excavation",
    title: "Excavation",
    description:
      "Year-round land clearing, grading, and site excavation in the Chippewa Valley. Owner-supervised groundwork from Flash Fence.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services/site-prep",
    title: "Site Prep & Land Clearing",
    description:
      "Brush clearing, old fence removal, and grading so your fence or build starts on solid ground. Serving Eau Claire, WI.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/blog",
    title: "Blog & Insights",
    description:
      "Professional fencing tips and site prep guidance to prepare your Chippewa Valley property.",
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    path: "/blog/choose-right-fencing",
    title: "How to Choose the Right Fencing for Your Family",
    description:
      "A practical guide to choosing vinyl, wood, or chain link fencing for Chippewa Valley homes, yards, pets, and privacy.",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    path: "/blog/proper-site-prep-saves-money",
    title: "How Proper Site Prep Can Save You Money",
    description:
      "Why grading, clearing, and a solid base before fence installation protect your investment through Wisconsin weather.",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    path: "/blog/increase-home-value-with-fence",
    title: "How to Increase Home Value With a New Fence",
    description:
      "How a well-built fence can improve curb appeal, privacy, and resale value for Chippewa Valley homeowners.",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "How Flash Fence LLC collects, uses, and protects contact and project information when you request a quote.",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/ai-policy",
    title: "AI Policy & Operations",
    description:
      "How Flash Fence LLC uses digital tools while keeping all physical fencing and excavation work human-supervised.",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/ai-readiness-service-index",
    title: "AI Readiness Service Index",
    description:
      "A machine-readable overview of Flash Fence LLC services, service area, and contact routes for search assistants.",
    changeFrequency: "monthly",
    priority: 0.4,
  },
  {
    path: "/sitemap",
    title: "Sitemap",
    description:
      "HTML directory of Flash Fence fencing, excavation, blog, and policy pages.",
    changeFrequency: "monthly",
    priority: 0.3,
  },
];

export function absoluteUrl(path: string): string {
  if (path === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}${path}`;
}

export function getSitePage(path: string): SitePage {
  const page = SITE_PAGES.find((entry) => entry.path === path);

  if (!page) {
    throw new Error(`Missing site page config for ${path}`);
  }

  return page;
}
