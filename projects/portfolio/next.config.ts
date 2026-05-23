import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: '/portfolio',
  assetPrefix: '/portfolio/',

  env: {
    NEXT_PUBLIC_BASE_PATH: '/portfolio',
  },
}

export default nextConfig