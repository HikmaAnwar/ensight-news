import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";
import { articles } from "@/lib/data";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Tech and Science", href: "/tech-and-science" },
  { label: "Digital", href: "/tech-and-science/digital" },
];

export default function DigitalPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Tech and Science"
        subtype="Digital"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
