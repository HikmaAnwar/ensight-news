import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: " FINANCE | INVESTMENT",
    title: "Ethiopia's Investment Landscape: Opportunities and Challenges",
    description:
      "An in-depth analysis of the current investment climate in Ethiopia.",
    image: "/images/investment.jpg",
    href: "/finance/investment/ethiopia-investment-landscape",
    author: "Amina Abdi",
    readTime: "8 min",
  },
  {
    id: "2",
    category: "FINANCE | INVESTMENT",
    title: "Foreign Direct Investment in Ethiopia: Trends and Insights",
    description:
      "A comprehensive overview of foreign direct investment trends in Ethiopia.",
    image: "/images/foreign-direct-investment.jpg",
    href: "/finance/investment/foreign-direct-investment-ethiopia",
    author: "Samuel Tesfaye",
    readTime: "7 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Finance", href: "/finance" },
  { label: "Investment", href: "/finance/investment" },
];

export default function InvestmentPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Finance"
        subtype="Investment"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
