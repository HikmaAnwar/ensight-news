import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "ECONOMY | DEVELOPMENT",
    title: "Sustainable Development Goals in Ethiopia",
    description:
      "How Ethiopia is aligning with global sustainable development objectives.",
    image: "/images/sustainable-development.jpg",
    href: "/economy/development/sustainable-goals",
    author: "Mekonnen Hailu",
    readTime: "10 min",
  },
  {
    id: "2",
    category: "ECONOMY | DEVELOPMENT",
    title: "Urban Development in Ethiopia: Opportunities and Risks",
    description:
      "Analyzing the rapid urban growth in Ethiopia and its implications.",
    image: "/images/urban-development.jpg",
    href: "/economy/development/urban-growth",
    author: "Betelhem Assefa",
    readTime: "7 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "" },
  { label: "Development", href: "/economy/development" },
];

export default function DevelopmentPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Development"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
