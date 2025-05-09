import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Finance", href: "" },
  { label: "Banking", href: "/finance/banking" },
];

export default function BankingPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Finance"
        subtype="Banking"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
