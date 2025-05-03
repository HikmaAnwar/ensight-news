import { Container } from "@mantine/core";
import { ArticleDetail } from "@/components/ui/ArticleDetail";
import { HeroSection } from "@/components/ui/HeroSection";

export default function HomePage() {
  return (
    <Container fluid className="py-8 px-0 w-full">
      <HeroSection />
      <ArticleDetail />
    </Container>
  );
}
