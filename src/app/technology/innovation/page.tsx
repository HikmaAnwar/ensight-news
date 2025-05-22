import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tech and Science", href: "" },
  { label: "Innovation", href: "/tech-and-science/innovation" },
];

export default function InnovationPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Tech and Science"
        subtype="Innovation"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
