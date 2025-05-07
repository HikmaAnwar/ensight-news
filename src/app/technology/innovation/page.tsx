import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "TECH AND SCIENCE | INNOVATION",
    title: "Ethiopia's Innovation Ecosystem: Startups and Beyond",
    description:
      "A look at how Ethiopia is fostering innovation through startups and tech hubs.",
    image: "/images/innovation-ecosystem.jpg",
    href: "/tech-and-science/innovation/startup-ecosystem",
    author: "Tsegaye Girma",
    readTime: "7 min",
  },
  {
    id: "2",
    category: "TECH AND SCIENCE | INNOVATION",
    title: "The Role of AI in Ethiopia's Tech Revolution",
    description:
      "How artificial intelligence is shaping Ethiopia's technological advancements.",
    image: "/images/ai-revolution.jpg",
    href: "/tech-and-science/innovation/ai-revolution",
    author: "Aster Demissie",
    readTime: "8 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tech and Science", href: "" },
  { label: "Innovation", href: "/tech-and-science/innovation" },
];

export default function InnovationPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Tech and Science"
        subtype="Innovation"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
