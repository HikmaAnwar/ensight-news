import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Business", href: "" },
  { label: "Markets", href: "/business/markets" },
];

export default function MarketsPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Business"
        subtype="Markets"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
