import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

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
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
