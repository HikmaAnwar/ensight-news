import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",
    category: "ECONOMY | POLICIES",
    slug: "ethiopias-economic-policies-a-new-era-of-reform",
    title: "Ethiopia's Economic Policies: A New Era of Reform",
    description:
      "Exploring the latest economic policy reforms shaping Ethiopia's future.",
    image: "/images/economic-policies.jpg",
    author: "Yared Lemma",
    readTime: "9 min",
  },
  {
    id: "2",
    category: "ECONOMY | POLICIES",
    slug: "impact-of-monetary-policy-on-ethiopias-economy",
    title: "Impact of Monetary Policy on Ethiopia's Economy",
    description:
      "An analysis of how monetary policies are influencing Ethiopia's economic landscape.",
    image: "/images/monetary-policy.jpg",
    author: "Selamawit Gebremedhin",
    readTime: "6 min",
    isPremium: true,
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Economy", href: "/economy" },
  { label: "Policies", href: "/economy/policies" },
];

export default function PoliciesPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Economy"
        subtype="Policies"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
