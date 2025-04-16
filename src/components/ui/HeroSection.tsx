import { Title, Text } from "@mantine/core";
import { SharedButton } from "@/components/ui/SharedButton";

export function HeroSection() {
  return (
    <section className="bg-surface border-b border-border py-12 md:py-20 text-left">
      <div className="container mx-auto px-4">
        <span className="inline-block bg-primary-accent text-light px-5 py-2 rounded-full text-sm font-bold mb-6">
          Ethiopia Focus
        </span>
        <Title
          order={1}
          className="text-primary mb-6 max-w-3xl text-5xl font-bold"
        >
          Infrastructure Push & GERD Financing: Ethiopia Explores New Models
        </Title>
        <Text className="text-secondary mb-8 max-w-2xl">
          As the Grand Ethiopian Renaissance Dam nears completion and national
          infrastructure ambitions grow, Addis Ababa seeks innovative financing
          solutions beyond traditional debt, crucial for sustained economic
          momentum.
        </Text>
        <SharedButton
          variant="filled"
          className="bg-primary-accent text-light mb-4 md:mb-0"
          rounded={true}
        >
          Read Analysis ↓
        </SharedButton>
      </div>
    </section>
  );
}
