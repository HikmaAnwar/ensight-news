import "./globals.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="overflow-x-hidden bg-surface">
        <MantineProvider defaultColorScheme="light">
          <a href="#main-content" className="sr-only focus:not-sr-only">
            Skip to Main Content
          </a>
          <Header />
          <main id="main-content" className="bg-surface">
            <div className="w-full max-w-[1440px] mx-2 md:mx-4 lg:mx-8">
              {children}
            </div>
            <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
          </main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
