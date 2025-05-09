import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Finance", href: "" },
  { label: "Investment", href: "/finance/investment" },
];

export default function InvestmentPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Finance"
        subtype="Investment"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
