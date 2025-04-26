import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "BUSINESS | STARTUPS",
    title: "PayStack Secures $200M to Expand Across Africa",
    description:
      "Fintech startup PayStack raises significant funding to fuel its growth...",
    image: "/images/paystack-startup.jpg",
    href: "/business/startups/paystack-expansion",
    author: "Sarah Johnson",
    readTime: "6 min",
  },
  {
    id: "2",
    category: "BUSINESS | STARTUPS",
    title: "Flutterwave Partners with Local Banks for Growth",
    description:
      "Flutterwave collaborates with regional banks to enhance payment solutions...",
    image: "/images/flutterwave-startup.jpg",
    href: "/business/startups/flutterwave-partnership",
    author: "Michael Okoro",
    readTime: "5 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Business", href: "/business" },
  { label: "Startups", href: "/business/startups" },
];

export default function StartupsPage() {
  return (
    <div className="bg-background">
      <Container size="lg">
        <ArticleSection
          section="Business"
          subtype="Startups"
          articles={articles}
          breadcrumbItems={breadcrumbItems}
        />
      </Container>
    </div>
  );
}
