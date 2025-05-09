import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "" },
  { label: "Development", href: "/economy/development" },
];

export default function DevelopmentPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Development"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
