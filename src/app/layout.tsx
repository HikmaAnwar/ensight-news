import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <MantineProvider>
          <Navigation />
          <main>{children}</main> <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
