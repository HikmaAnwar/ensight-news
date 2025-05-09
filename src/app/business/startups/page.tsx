import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Business", href: "" },
  { label: "Startups", href: "/business/startups" },
];

export default function StartupsPage() {
  return (
    <div>
      <Container size="lg">
        <ArticleSection
          section="Business"
          subtype="Startups"
          breadcrumbItems={breadcrumbItems}
        />
      </Container>
    </div>
  );
}
