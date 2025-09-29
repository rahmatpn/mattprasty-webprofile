import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output  : "export",
  /* config options here */
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
