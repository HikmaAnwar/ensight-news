// src/app/page.tsx
import { Container } from "@mantine/core";
import { ArticleDetail } from "@/components/ui/ArticleDetail";
import { HeroSection } from "@/components/ui/HeroSection";

export default function HomePage() {
  return (
    <Container size="lg" className="py-8 bg-amber-500">
      <HeroSection />
      <ArticleDetail />
    </Container>
  );
}
