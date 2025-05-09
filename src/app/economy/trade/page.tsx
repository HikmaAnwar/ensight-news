import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "" },
  { label: "Trade", href: "/economy/trade" },
];

export default function TradePage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Trade"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
