/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",      // THIS enables static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
