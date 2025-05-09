import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Finance", href: "" },
  { label: "Fintech", href: "/finance/fintech" },
];

export default function FintechPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Finance"
        subtype="Fintech"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
