import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "ECONOMY | GROWTH",
    title: "Ethiopia's Economic Growth: Past and Future",
    description:
      "A review of Ethiopia's economic growth trajectory and future prospects.",
    image: "/images/economic-growth.jpg",
    href: "/economy/growth/past-future",
    author: "Elias Worku",
    readTime: "9 min",
  },
  {
    id: "2",
    category: "ECONOMY | GROWTH",
    title: "Sectoral Contributions to Ethiopia's GDP Growth",
    description:
      "Breaking down the key sectors driving Ethiopia's economic expansion.",
    image: "/images/gdp-growth.jpg",
    href: "/economy/growth/sectoral-contributions",
    author: "Zewditu Mengesha",
    readTime: "7 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "" },
  { label: "Growth", href: "/economy/growth" },
];

export default function GrowthPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Growth"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
