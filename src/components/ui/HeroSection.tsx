// components/ui/HeroSection.tsx
import { Button, Title, Text } from "@mantine/core";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-surface border-b border-border py-12 md:py-20 text-left">
      <div className="container mx-auto px-4">
        <span className="inline-block bg-primary-accent text-text-light px-5 py-2 rounded-full text-sm font-bold mb-6">
          Ethiopia Focus
        </span>
        <Title order={1} className="text-text-primary mb-6 max-w-3xl">
          Infrastructure Push & GERD Financing: Ethiopia Explores New Models
        </Title>
        <Text className="text-text-secondary mb-8 max-w-2xl">
          As the Grand Ethiopian Renaissance Dam nears completion and national
          infrastructure ambitions grow, Addis Ababa seeks innovative financing
          solutions beyond traditional debt, crucial for sustained economic
          momentum.
        </Text>
        <Button
          component={Link}
          href="#sample-article"
          color="primary-accent"
          size="lg"
        >
          Read Analysis ↓
        </Button>
      </div>
    </section>
  );
}
