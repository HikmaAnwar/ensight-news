import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "" },
  { label: "Policies", href: "/economy/policies" },
];

export default function PoliciesPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Policies"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
