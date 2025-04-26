import { Container } from "@mantine/core";
import { ArticleDetail } from "@/components/ui/ArticleDetail";
import { HeroSection } from "@/components/ui/HeroSection";

export default function HomePage() {
  return (
    <div>
      <Container size="lg">
        <HeroSection />
        <ArticleDetail />
      </Container>
    </div>
  );
}
