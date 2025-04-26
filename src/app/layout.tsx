// src/app/layout.tsx
import "./globals.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { TrustedBy } from "@/components/ui/TrustedBy";
import { SubscriptionPlans } from "@/components/ui/SubscriptionPlans";

export const metadata = {
  title: "Ensight - Business Intelligence",
  description:
    "Your premier source for actionable business intelligence focused on Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="bg-surface">
        <MantineProvider defaultColorScheme="dark">
          <a href="#main-content" className="sr-only focus:not-sr-only">
            Skip to Main Content
          </a>
          <Header />
          <main id="main-content" className="bg-surface">
            <div className="px-20">{children}</div>
            <section className="py-12 w-full bg-background">
              <div className="max-w-[1200px] mx-auto px-4">
                <SubscriptionPlans />
                <TrustedBy />
              </div>
            </section>
          </main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
