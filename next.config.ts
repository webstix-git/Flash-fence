import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Parent folder has another package-lock.json; pin Turbopack to this app.
    root: path.join(__dirname),
  },
  async redirects() {
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
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/book-online",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery/white-vinyl-picket-fence",
        destination: "/services/fencing#vinyl",
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery/black-chain-link",
        destination: "/services/fencing#chain-link",
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery/tan-vinyl-privacy-fence",
        destination: "/services/fencing#vinyl",
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery/white-vinyl",
        destination: "/services/fencing#vinyl",
        permanent: true,
      },
      {
        source: "/portfolio-collections/gallery/:slug*",
        destination: "/gallery",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
