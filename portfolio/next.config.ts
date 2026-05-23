import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  basePath: '/public',
  assetPrefix: '/public/',
}

export default nextConfig