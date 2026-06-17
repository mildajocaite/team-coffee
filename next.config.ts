import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Next.js v14+ static export builds.
  output: "export",
  // next/image default optimization requires a server runtime.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
