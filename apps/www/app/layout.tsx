import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import MouseMoveEffect from "@/components/mouse-move-effect";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Super SaaS Template",
  description: "SaaS template with landing page, dashboard, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <MouseMoveEffect />
          {children}
        </Providers>
      </body>
    </html>
  );
}
