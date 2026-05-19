import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/old-portfolio',
        destination: '/projects',
        permanent: true,
      },
      // Add future redirects here
    ];
  },
};

export default nextConfig;
