import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "" },
  { label: "Inflation", href: "/economy/inflation" },
];

export default function InflationPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Inflation"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
