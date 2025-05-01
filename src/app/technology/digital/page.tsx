import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "TECH AND SCIENCE | DIGITAL",
    title: "Digital Transformation in Ethiopia: Progress and Potential",
    description: "Examining Ethiopia's journey towards a digital economy.",
    image: "/images/digital-transformation.jpg",
    href: "/tech-and-science/digital/transformation-progress",
    author: "Mesfin Belay",
    readTime: "9 min",
  },
  {
    id: "2",
    category: "TECH AND SCIENCE | DIGITAL",
    title: "E-Commerce Boom in Ethiopia: Opportunities for Growth",
    description: "How e-commerce is reshaping Ethiopia's business landscape.",
    image: "/images/ecommerce-boom.jpg",
    href: "/tech-and-science/digital/ecommerce-growth",
    author: "Kalkidan Yohannes",
    readTime: "7 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tech and Science", href: "/tech-and-science" },
  { label: "Digital", href: "/tech-and-science/digital" },
];

export default function DigitalPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Tech and Science"
        subtype="Digital"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
