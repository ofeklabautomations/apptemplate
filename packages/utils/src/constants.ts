import { isDev } from "./env";

export const INTERNAL_DASHBOARD_URL = isDev()
  ? "http://localhost:3001"
  : "https://dashboard.example.com";

export const PUBLIC_DASHBOARD_URL = isDev()
  ? "http://localhost:3000/dashboard"
  : "https://example.com/dashboard";
