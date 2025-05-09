import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "" },
  { label: "Growth", href: "/economy/growth" },
];

export default function GrowthPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Growth"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
