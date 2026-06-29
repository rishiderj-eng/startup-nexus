import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingCTA } from "@/components/layout/floating-cta";

export const metadata: Metadata = {
  title: "Startup Nexus — Build Better Startups Together",
  description:
    "A global startup ecosystem where founders, experts, mentors, and investors collaborate to transform ideas into validated companies.",
  keywords: ["startup", "validation", "experts", "investors", "founders", "ecosystem"],
  openGraph: {
    title: "Startup Nexus — Build Better Startups Together",
    description:
      "Submit your idea, get it validated by experts, and become a Verified Startup.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/*
          Fonts loaded via <link> (runtime) rather than next/font so a production
          build never needs network access to Google Fonts.
          Display: Space Grotesk · Body: Inter · Data/scores: JetBrains Mono
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
            --font-display: 'Space Grotesk', 'Inter', sans-serif;
            --font-mono: 'JetBrains Mono', ui-monospace, monospace;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
