import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "ECONOMY | TRADE",
    title: "Ethiopia's Trade Agreements: Boosting Global Reach",
    description:
      "A look at how trade agreements are enhancing Ethiopia's global market presence.",
    image: "/images/trade-agreements.jpg",
    href: "/economy/trade/ethiopia-global-trade",
    author: "Dawit Kebede",
    readTime: "7 min",
  },
  {
    id: "2",
    category: "ECONOMY | TRADE",
    title: "Challenges in Ethiopia's Export Sector",
    description:
      "Examining the hurdles faced by Ethiopia's export industry and potential solutions.",
    image: "/images/export-challenges.jpg",
    href: "/economy/trade/export-challenges",
    author: "Liya Tadesse",
    readTime: "8 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "/economy" },
  { label: "Trade", href: "/economy/trade" },
];

export default function TradePage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Trade"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
