import "./globals.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import "@mantine/carousel/styles.css";

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
          </main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
