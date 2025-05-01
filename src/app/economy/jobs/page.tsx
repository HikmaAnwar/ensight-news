import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "ECONOMY | JOBS",
    title: "Job Creation in Ethiopia: Opportunities and Challenges",
    description:
      "Exploring the dynamics of job creation in Ethiopia's evolving economy.",
    image: "/images/job-creation.jpg",
    href: "/economy/jobs/creation-opportunities",
    author: "Fitsum Abera",
    readTime: "8 min",
  },
  {
    id: "2",
    category: "ECONOMY | JOBS",
    title: "Youth Employment in Ethiopia: Strategies for Success",
    description:
      "Addressing the critical issue of youth unemployment in Ethiopia.",
    image: "/images/youth-employment.jpg",
    href: "/economy/jobs/youth-employment",
    author: "Rahel Teshome",
    readTime: "6 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "/economy" },
  { label: "Jobs", href: "/economy/jobs" },
];

export default function JobsPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Jobs"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
