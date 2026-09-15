import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Parent folder has another package-lock.json; pin Turbopack to this app.
    root: path.join(__dirname),
  },
  async redirects() {
    const siteUrl = "https://flashfencewi.com";

    return [
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/service-page/home-visit",
        destination: `${siteUrl}/contact-us`,
        permanent: true,
      },
      {
        source: "/book-online",
        destination: `${siteUrl}/contact-us`,
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: `${siteUrl}/gallery`,
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery",
        destination: `${siteUrl}/gallery`,
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery/white-vinyl-picket-fence",
        destination: `${siteUrl}/services/fencing#vinyl`,
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery/black-chain-link",
        destination: `${siteUrl}/services/fencing#chain-link`,
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery/tan-vinyl-privacy-fence",
        destination: `${siteUrl}/services/fencing#vinyl`,
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery/white-vinyl",
        destination: `${siteUrl}/services/fencing#vinyl`,
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery/:slug*",
        destination: `${siteUrl}/gallery`,
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.flashfencewi.com" }],
        destination: `${siteUrl}/`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.flashfencewi.com" }],
        destination: `${siteUrl}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
