import { INTERNAL_DASHBOARD_URL } from "@repo/utils";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/dashboard",
        destination: `${INTERNAL_DASHBOARD_URL}/dashboard`,
      },
      {
        source: "/dashboard/:match*",
        destination: `${INTERNAL_DASHBOARD_URL}/dashboard/:match*`,
      },
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
    ];
  },
};

export default nextConfig;
