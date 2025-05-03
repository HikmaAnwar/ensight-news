import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "ECONOMY | INFLATION",
    title: "Understanding Inflation Trends in Ethiopia",
    description:
      "A deep dive into the factors driving inflation in Ethiopia's economy.",
    image: "/images/inflation-trends.jpg",
    href: "/economy/inflation/trends",
    author: "Tewodros Alemayehu",
    readTime: "8 min",
  },
  {
    id: "2",
    category: "ECONOMY | INFLATION",
    title: "Coping with Inflation: Strategies for Ethiopian Businesses",
    description:
      "Practical strategies for businesses to navigate inflationary pressures.",
    image: "/images/business-inflation.jpg",
    href: "/economy/inflation/business-strategies",
    author: "Hiwot Bekele",
    readTime: "6 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "/economy" },
  { label: "Inflation", href: "/economy/inflation" },
];

export default function InflationPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Inflation"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
