import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tech and Science", href: "" },
  { label: "Research", href: "/tech-and-science/research" },
];

export default function ResearchPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Tech and Science"
        subtype="Research"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
