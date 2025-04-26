import { Container } from "@mantine/core";
import { ArticleDetail } from "@/components/ui/ArticleDetail";
import { HeroSection } from "@/components/ui/HeroSection";
import { SubscriptionPlans } from "@/components/ui/SubscriptionPlans";
import { TrustedBy } from "@/components/ui/TrustedBy";

export default function HomePage() {
  return (
    <div className="bg-background">
      <Container size="lg">
        <HeroSection />
        <ArticleDetail />
        <SubscriptionPlans />
        <TrustedBy />
      </Container>
    </div>
  );
}
