import Link from "next/link";
import { Text, Group, Anchor } from "@mantine/core";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">Ensight</h3>
            <Text className="text-muted">
              Actionable business intelligence focused on Africa’s growth
              sectors.
            </Text>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Anchor
                  component={Link}
                  href="/business"
                  className="text-secondary hover:text-primary-accent"
                >
                  Business
                </Anchor>
              </li>
              <li>
                <Anchor
                  component={Link}
                  href="/finance"
                  className="text-secondary hover:text-primary-accent"
                >
                  Finance
                </Anchor>
              </li>
              <li>
                <Anchor
                  component={Link}
                  href="/infrastructure"
                  className="text-secondary hover:text-primary-accent"
                >
                  Infrastructure
                </Anchor>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Anchor
                  component={Link}
                  href="/about"
                  className="text-secondary hover:text-primary-accent"
                >
                  About Us
                </Anchor>
              </li>
              <li>
                <Anchor
                  component={Link}
                  href="/contact"
                  className="text-secondary hover:text-primary-accent"
                >
                  Contact
                </Anchor>
              </li>
              <li>
                <Anchor
                  component={Link}
                  href="/privacy"
                  className="text-secondary hover:text-primary-accent"
                >
                  Privacy Policy
                </Anchor>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-4">Connect</h4>
            <Group gap="xs">
              <Anchor
                href="https://twitter.com"
                className="text-muted hover:text-primary-accent"
              >
                Twitter
              </Anchor>
              <Anchor
                href="https://linkedin.com"
                className="text-muted hover:text-primary-accent"
              >
                LinkedIn
              </Anchor>
            </Group>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center">
          <Text className="text-muted text-sm">
            © 2025 Ensight. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  );
}
