import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/dashboard",
  assetPrefix: "/dashboard",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
