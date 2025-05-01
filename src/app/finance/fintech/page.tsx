import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "FINANCE | FINTECH",
    title: "Ethiopia's Fintech Revolution: A Deep Dive",
    description:
      "Exploring the rapid growth of fintech in Ethiopia and its impact on the economy.",
    image: "/images/fintech.jpg",
    href: "/finance/fintech/ethiopia-fintech-revolution",
    author: "Liya Tesfaye",
    readTime: "8 min",
  },
  {
    id: "2",
    category: "FINANCE | FINTECH",
    title: "The Rise of Mobile Payments in Ethiopia",
    description:
      "How mobile payment solutions are transforming the financial landscape in Ethiopia.",
    image: "/images/mobile-payments.jpg",
    href: "/finance/fintech/mobile-payments-ethiopia",
    author: "Daniel Assefa",
    readTime: "6 min",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Finance", href: "/finance" },
  { label: "Fintech", href: "/finance/fintech" },
];

export default function FintechPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Finance"
        subtype="Fintech"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
