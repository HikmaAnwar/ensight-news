// src/app/business/startups/page.tsx
import { Title, Text, Container } from "@mantine/core";
import { StartupSection } from "@/components/ui/StartupSection";

export default function StartupsPage() {
  return (
    <div className="bg-background">
      <section className="py-12 bg-surface">
        <Container size="lg">
          <Title
            order={1}
            className="text-text-primary mb-4 animate-fade-in-up"
          >
            African Startups to Watch
          </Title>
          <Text className="text-text-secondary max-w-2xl mx-auto mb-8">
            Explore the innovative startups driving Africa’s economic
            transformation in fintech, agritech, and more.
          </Text>
        </Container>
      </section>
      <StartupSection />
    </div>
  );
}
