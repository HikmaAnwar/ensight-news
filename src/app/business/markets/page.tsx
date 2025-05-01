import { Container } from "@mantine/core";
import { ArticleSection } from "@/components/ui/ArticleSection";

const articles = [
  {
    id: "1",

    category: "BUSINESS | MARKETS",
    title: "Ethiopia's Coffee Market: Trends and Opportunities",
    description:
      "An in-depth analysis of the coffee market in Ethiopia, exploring current trends and future opportunities.",
    image: "/images/news.jpg",
    href: "/business/markets/ethiopia-coffee-market",
    author: "Amina Tesfaye",
    readTime: "10 min",
  },
  {
    id: "2",
    category: "BUSINESS | MARKETS",
    title: "The Rise of E-commerce in Ethiopia",
    description:
      "Exploring the growth of e-commerce in Ethiopia and its impact on traditional retail.",
    image: "/images/news.jpg",
    href: "/business/markets/rise-ecommerce-ethiopia",
    author: "Samuel Abebe",
    readTime: "8 min",
    isPremium: true,
  },
];
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Business", href: "/business" },
  { label: "Markets", href: "/business/markets" },
];

export default function MarketsPage() {
  return (
    <Container size="lg" className="py-8">
      <ArticleSection
        section="Business"
        subtype="Markets"
        articles={articles}
        breadcrumbItems={breadcrumbItems}
      />
    </Container>
  );
}
