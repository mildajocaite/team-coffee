import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGithubActions && repositoryName ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  // Required for Next.js v14+ static export builds.
  output: "export",
  // GitHub Pages project sites are served from /<repo-name>.
  basePath,
  assetPrefix: basePath,
  // next/image default optimization requires a server runtime.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
