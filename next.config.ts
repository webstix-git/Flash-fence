import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Parent folder has another package-lock.json; pin Turbopack to this app.
    root: path.join(__dirname),
  },
};

export default nextConfig;
