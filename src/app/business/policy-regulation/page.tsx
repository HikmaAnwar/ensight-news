import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Business", href: "" },
  { label: "Policy & Regulation", href: "/business/policy-regulation" },
];

export default function PolicyRegulationPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Business"
        subtype="Policy & Regulation"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
