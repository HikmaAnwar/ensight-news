// app/layout.tsx
import "./globals.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Header } from "@/components/ui/Header"; // Adjust path if different
import { Footer } from "@/components/ui/Footer"; // Adjust path if different

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
      <body className="px-20 bg-surface">
        <MantineProvider defaultColorScheme="dark">
          <a href="#main-content" className="sr-only focus:not-sr-only">
            Skip to Main Content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
