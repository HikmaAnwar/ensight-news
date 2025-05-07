import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "TECH AND SCIENCE | RESEARCH",
    title: "Scientific Research in Ethiopia: Building a Knowledge Economy",
    description:
      "How Ethiopia is investing in research to drive innovation and growth.",
    image: "/images/scientific-research.jpg",
    href: "/tech-and-science/research/knowledge-economy",
    author: "Getachew Tesfaye",
    readTime: "8 min",
  },
  {
    id: "2",
    category: "TECH AND SCIENCE | RESEARCH",
    title: "Collaborative Research in Ethiopia: Global Partnerships",
    description:
      "Exploring Ethiopia's role in international research collaborations.",
    image: "/images/global-research.jpg",
    href: "/tech-and-science/research/global-partnerships",
    author: "Saba Wolde",
    readTime: "6 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tech and Science", href: "" },
  { label: "Research", href: "/tech-and-science/research" },
];

export default function ResearchPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Tech and Science"
        subtype="Research"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
