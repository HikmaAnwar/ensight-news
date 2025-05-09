import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "" },
  { label: "Jobs", href: "/economy/jobs" },
];

export default function JobsPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Jobs"
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
