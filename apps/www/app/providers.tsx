import { PostHogProvider } from "@/components/posthog-provider";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      disableTransitionOnChange
      themes={["light", "dark"]}
    >
      <PostHogProvider>{children}</PostHogProvider>
    </ThemeProvider>
  );
}
