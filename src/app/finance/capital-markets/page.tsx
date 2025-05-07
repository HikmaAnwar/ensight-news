import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "FINANCE | CAPITAL MARKETS",
    title: "Ethiopian Stock Exchange Sees Record Trading Volume",
    description:
      "The Ethiopian Stock Exchange has reported a record trading volume of 1 billion birr in the last quarter.",
    image: "/images/stock-exchange.jpg",
    href: "/finance/capital-markets/ethiopian-stock-exchange-record",
    author: "Amina Abdi",
    readTime: "5 min",
  },
  {
    id: "2",
    category: "FINANCE | CAPITAL MARKETS",
    title: "New Regulations for Foreign Investors in Ethiopian Capital Markets",
    description:
      "The Ethiopian government has introduced new regulations to attract foreign investors to the capital markets.",
    image: "/images/foreign-investors.jpg",
    href: "/finance/capital-markets/foreign-investors-regulations",
    author: "Samuel Tesfaye",
    readTime: "7 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Finance", href: "" },
  { label: "Capital Markets", href: "/finance/capital-markets" },
];

export default function CapitalMarketsPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Finance"
        subtype="Capital Markets"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
