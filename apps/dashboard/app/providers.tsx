import { PostHogProvider } from "@/components/posthog-provider";
import { Toaster } from "@repo/ui";
import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        errorRetryCount: 3,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <ThemeProvider
        attribute="class"
        enableSystem
        disableTransitionOnChange
        themes={["light", "dark"]}
      >
        <Toaster />
        <PostHogProvider>{children}</PostHogProvider>
      </ThemeProvider>
    </SWRConfig>
  );
}
