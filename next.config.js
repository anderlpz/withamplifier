/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for easy hosting
  output: 'export',
  
  // No image optimization for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
