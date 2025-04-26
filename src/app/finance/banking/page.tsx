import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "FINANCE | BANKING",
    title: "Commercial Bank of Ethiopia Implements AI for Risk...",
    description:
      "How Ethiopia's largest bank is using artificial intelligence to streamline...",
    image: "/images/banking-atm.jpg",
    href: "/finance/banking/commercial-bank-ethiopia-ai",
    author: "Elias Mengistu",
    readTime: "9 min",
  },
  {
    id: "2",
    category: "FINANCE | BANKING",
    title: "Regional Banks Expand Branch Network Despite Digital Push",
    description:
      "Why physical banking locations remain crucial in Ethiopia’s developing finan...",
    image: "/images/banking-money.jpg",
    href: "/finance/banking/regional-banks-expansion",
    author: "Hiwot Bekele",
    readTime: "7 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Finance", href: "/finance" },
  { label: "Banking", href: "/finance/banking" },
];

export default function BankingPage() {
  return (
    <div>
      <Container size="lg">
        <ArticleSection
          section="Finance"
          subtype="Banking"
          articles={articles}
          breadcrumbItems={breadcrumbItems}
        />
      </Container>
    </div>
  );
}
