import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true
  },
  transpilePackages: ["@tailwindcss/postcss"],
};

export default nextConfig;
