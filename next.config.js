/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images :{
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
 
module.exports = nextConfig